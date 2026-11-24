---
title: Акты приготовления и списания через API
layout: default
tags: v10 v10preview4
---

Начиная с API V10Preview4 плагин может вести акты приготовления и списания без редактора документа iikoFront. Через API акт можно создать, изменить, удалить, отправить в RMS и напечатать, а также взвесить товар для строки акта. Раньше документы можно было только читать. Методы рассчитаны в первую очередь на кухонные экраны (WebKDS).

Все новые методы добавлены в [`IOperationService`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_IOperationService.htm). Они принимают [`ICredentials`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Security_ICredentials.htm), выполняются от имени этого сотрудника и не показывают диалогов на терминале. Новые классы данных находятся в пространстве имён `Resto.Front.Api.Data.Documents`.

## Лицензия и права

Методы получения контекста, номенклатуры, создания, изменения, удаления, отправки, печати и взвешивания работают только при наличии в лицензии модуля 21139701. Без модуля метод выбрасывает [`LicenseRestrictionException`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Exceptions_LicenseRestrictionException.htm). Для чтения документов модуль не нужен.

Новых прав не появилось, проверяются те же права сотрудника, что и в iikoFront:

* создание, изменение, удаление, отправка, номенклатура и взвешивание — «Создавать и редактировать акты приготовления» (`B_PRODNC`) или «Создавать и редактировать акты списания» (`B_WOFFC`) в зависимости от типа документа;
* чтение — право просмотра актов этого типа (`B_PRODNV`, `B_WOFFV`) или право их создания и редактирования;
* печать — право чтения акта и «Распечатывать пречек повторно» (`F_CPBA`).

Права проверяются по типу документа, а не по автору: сотрудник с правом может изменить или отправить любой неотправленный акт терминала, в том числе созданный в iikoFront другим сотрудником. Если прав нет, выбрасывается [`PermissionDeniedException`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Exceptions_PermissionDeniedException.htm). Подробнее — в статье [Проверка прав]({{ site.baseurl }}/articles/ru/CheckingPermissions.html).

## Чтение документов

У методов [`GetDocuments`](https://iiko.github.io/front.api.sdk/v10/html/Overload_Resto_Front_Api_IOperationService_GetDocuments.htm), [`GetDocumentById`](https://iiko.github.io/front.api.sdk/v10/html/Overload_Resto_Front_Api_IOperationService_GetDocumentById.htm) и [`TryGetDocumentById`](https://iiko.github.io/front.api.sdk/v10/html/Overload_Resto_Front_Api_IOperationService_TryGetDocumentById.htm) появились перегрузки с `ICredentials`. Они учитывают права сотрудника так же, как список документов в iikoFront: `GetDocuments` пропускает недоступные документы, а чтение недоступного документа по идентификатору выбрасывает `PermissionDeniedException`. Перегрузки без `ICredentials` работают как раньше.

[`IDocument`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Documents_IDocument.htm) раньше содержал только `Type` и `Number`. Теперь документ стал версионной сущностью (`Revision`) и содержит:

* `OperationId`, `OperationName` — настроенная операция документа;
* `RestaurantSection` — точка создания документа;
* `SourceStore`, `DestinationStore` — склады документа ([`IDocumentStore`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Documents_IDocumentStore.htm)); `null`, если склад не используется или до отправки определяется по строкам;
* `Author`, `AuthorizedBy` — сотрудник, создавший акт;
* `Date` — время последнего локального сохранения, после отправки — время отправки;
* `Comment` — комментарий или причина списания;
* `Items` — полный состав акта;
* `IsSentToServer` — акт поставлен в очередь обмена с RMS. Признак не подтверждает, что документ проведён в RMS.

Строка акта [`IDocumentItem`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Documents_IDocumentItem.htm) содержит товар, размер, количество в единице измерения товара, склады строки и список замеров `Containers` ([`IDocumentItemContainer`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Documents_IDocumentItemContainer.htm)) — тару, введённое количество и способ ввода.

В [`IContainer`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Assortment_IContainer.htm) добавлены `Id`, `Weight` (вес пустой тары, кг), `Gross` (вес полной тары, кг), `IsImplicit` (тара соответствует базовой единице измерения товара) и `IsDefault`.

Плагинам, которые только вызывают API, доработка не нужна. Если плагин сам реализует интерфейсы `IDocument` или `IContainer`, например в тестах, в реализацию нужно добавить новые свойства.

## Подготовка акта

[`GetDocumentCreationContext`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetDocumentCreationContext.htm) возвращает точку создания документов терминала и операции приготовления и списания, которые сотрудник может создавать. Для каждой операции ([`DocumentOperation`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Documents_DocumentOperation.htm)) известны:

* `Type` — `DocumentType.Production` или `DocumentType.Writeoff`;
* `SourceStoreSelectionMode`, `DestinationStoreSelectionMode` — как выбирается склад:
  * `NotApplicable` — склад не используется;
  * `FromList` — склад выбирается из списка `SourceStores` / `DestinationStores`;
  * `FromCookingPlaceType` — склад определяется для каждого товара по месту приготовления;
* `IsReasonRequired` — для отправки акта списания нужна непустая причина (комментарий);
* `AuthorizationUserType` — тип пользователя, который должен подтвердить отправку; `UserType.None` — подтверждение не требуется.

[`GetDocumentProducts`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetDocumentProducts.htm) возвращает товары, которые можно добавить в акт выбранной операции. Набор отличается от режима «Вся номенклатура» в редакторе документа iikoFront: API исключает все услуги, товары без единицы измерения и товары, у которых отключены все размеры шкалы. Доступные размеры получайте через `GetProductScaleSizes` и `GetDisabledSizesByProduct`, тару — через `PackageContainers` товара.

## Количество и тара

Строка акта ([`DocumentItemData`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Documents_DocumentItemData.htm)) задаёт товар, размер (`ProductSizeId`, для товара без шкалы — `null`), тару (`ContainerId`, `null` — базовая единица измерения товара) и количество `Amount`. Способ ввода количества задаёт `MeasurementMode`:

* `UnitsCalculating` (по умолчанию) — количество в базовой единице измерения товара, не более трёх знаков после запятой;
* `ContainersCounting` — целое число фасовок; количество равно числу фасовок, умноженному на вместимость тары;
* `ContainerWeighting` — вес брутто в килограммах вместе с тарой; количество рассчитывается по весу пустой и полной тары.

В строке акта `IDocumentItem.Amount` хранит пересчитанное количество, а в `Containers` сохраняется введённое значение.

[`MeasureDocumentItemWeight`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_MeasureDocumentItemWeight.htm) читает вес с весов терминала и возвращает [`DocumentItemWeight`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Documents_DocumentItemWeight.htm): вес брутто, вес тары, вес нетто и количество в единице измерения товара. Метод ничего не сохраняет: полученное значение плагин передаёт в строку акта сам. Если весов нет или они вернули ошибку, выбрасывается `DeviceException`.

## Создание, изменение и удаление

[`CreateDocument`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_CreateDocument.htm) проверяет и сохраняет на терминале полный непустой акт ([`DocumentCreateData`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Documents_DocumentCreateData.htm)). Склады указываются только в режиме `FromList`, в остальных режимах — `null`. Автором акта становится сотрудник из `credentials`. Если данные не проходят проверку, выбрасывается `ConstraintViolationException`, а акт не сохраняется.

[`UpdateDocument`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_UpdateDocument.htm) полностью заменяет состав и комментарий неотправленного акта. Операцию и выбранные склады изменить нельзя. [`DeleteDocument`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_DeleteDocument.htm) удаляет неотправленный акт. Отправленный акт изменить или удалить нельзя.

Методы, которые работают с существующим актом, принимают ревизию последнего прочитанного документа (`IDocument.Revision`):

* если акт уже изменили на терминале или в другом клиенте, выбрасывается `EntityModifiedException` — перечитайте документ и повторите операцию;
* если акт занят другой операцией, выбрасывается `EntityAlreadyInUseException`.

Не выполняйте несколько изменяющих вызовов для одного акта параллельно: они конкурируют за блокировку документа.

## Отправка в RMS

[`SendDocumentToServer`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_SendDocumentToServer.htm) проверяет акт и ставит его в очередь обмена с RMS. В отличие от отправки из iikoFront, акт при этом не печатается. Метод не ждёт проведения в RMS.

Перед отправкой строки акта группируются по складам, как и при отправке из iikoFront. Если склады всех строк совпадают, отправляется исходный акт. Если нет (например, склады определяются по месту приготовления), на каждую пару складов создаётся отдельный документ с новым номером, а исходный акт удаляется. Поэтому метод возвращает список всех получившихся документов; для дальнейшей работы используйте их идентификаторы, а не идентификатор исходного акта.

Если операция требует подтверждения (`AuthorizationUserType` не `UserType.None`), передайте [`DocumentAuthorization`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Documents_DocumentAuthorization.htm) с учётными данными или картой подтверждающего — ровно одно из двух. Если подтверждения нет или подтверждающий не подходит, выбрасывается `AuthenticationException`.

## Печать

[`PrintDocumentReceipt`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_PrintDocumentReceipt.htm) печатает одну копию отправленного акта по тем же шаблонам, что и печать из iikoFront. Неотправленный акт напечатать нельзя. Если принтера нет или печать не удалась, выбрасывается `DeviceException`.

## Пример

```cs
var os = PluginContext.Operations;
var credentials = os.AuthenticateByPin(pin);

// 1. Выбираем операцию списания и товар
var operation = os.GetDocumentCreationContext(credentials).Operations
    .First(o => o.Type == DocumentType.Writeoff);
var product = os.GetDocumentProducts(operation.Id, credentials)
    .First(p => p.Scale == null); // для товара со шкалой укажите ProductSizeId

// 2. Создаём акт
var document = os.CreateDocument(new DocumentCreateData
{
    OperationId = operation.Id,
    SourceStoreId = operation.SourceStoreSelectionMode == DocumentStoreSelectionMode.FromList
        ? operation.SourceStores[0].Id
        : (Guid?)null,
    Items = new[]
    {
        new DocumentItemData { ProductId = product.Id, Amount = 1.5m }
    },
    Comment = "Истёк срок годности"
}, credentials);

// 3. Отправляем в RMS, при необходимости с подтверждением
var authorization = operation.AuthorizationUserType == UserType.None
    ? null
    : new DocumentAuthorization { Card = managerCard };
var sentDocuments = os.SendDocumentToServer(document.Id, document.Revision, credentials, authorization);

// 4. Печатаем получившиеся документы
foreach (var sent in sentDocuments)
    os.PrintDocumentReceipt(sent.Id, sent.Revision, credentials);
```

## Нагрузка

Методы рассчитаны на работу повара с актами вручную, а не на постоянный опрос. Самый объёмный по данным метод — `GetDocumentProducts`: на большой номенклатуре он возвращает много товаров. Запрашивайте контекст и номенклатуру при открытии экрана создания акта или при смене операции и используйте результат, пока сотрудник работает с актом. Список документов обновляйте по действию пользователя или после своих изменений, а не частым таймером.

### См. также

* [Изменение статусов кухонного заказа от имени пользователя]({{ site.baseurl }}{% post_url 2026-06-26-kitchen-status-with-credentials %})
* [Формирование документа стоп-листа]({{ site.baseurl }}{% post_url 2026-11-17-stop-list-document %})
