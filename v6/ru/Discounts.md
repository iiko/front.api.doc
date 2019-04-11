---
title: Скидки и надбавки
layout: default
---
# Скидки и надбавки #
iikoRms имеет встроенную дисконтную систему. Сторонние системы лояльности (plazius, iikoCard и прочие) в данной статье не рассматриваются.
Дисконтная система iikoRms позволяет начислять скидки и надбавки по различным условиям.
Под скидкой понимается уменьшение стоимости элемента заказа на определённую сумму, а под набавкой — увеличение. Поскольку разница между скидкой и надбавкой заключается лишь в знаке числа, вычитаемого из стоимости, для упрощения терминологии и то, и другое будем называть скидками (в коде [`DiscountType`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IDiscountType.htm), [`DiscountItem`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IDiscountItem.htm), [`DiscountCard`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IDiscountCard.htm) и так далее), подразумевая, что положительное значение [`DiscountSum`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IAppliedDiscountItem_DiscountSum.htm) в предметной области соответствует скидке, а отрицательное — надбавке.

Вообще говоря, скидку можно настроить таким образом, что в пределах заказа на одно блюдо она будет снижать стоимость, то есть действовать как скидка, а на другое — повышать, то есть действовать как надбавка, поэтому разделение на скидки и надбавки можно считать весьма условным. 

## Ограничения ##
Правила и условия применения скидок ([`DiscountItem`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IDiscountItem.htm)) определяются типом ([`DiscountType`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IDiscountType.htm)), это может быть фиксированная сумма (ваучер), процент от стоимости, округление (отбрасывание копеек) и так далее, но результат применения скидки ([`AppliedDiscountItem`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IAppliedDiscountItem.htm)) — это всегда абсолютная величина, конкретное число.
Алгоритмы применения скидок зависят от [категории блюда](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Assortment_IProduct_Category.htm), [отделения заказа](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Organization_Sections_IRestaurantSection.htm), суммы заказа ([`FullSum`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrder_FullSum.htm)), [режима обслуживания](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Organization_OrderServiceType.htm), текущего времени и [времени сервисной печати](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderRootItem_PrintTime.htm), скидки могут комбинироваться или не комбинироваться между собой, применяться как параллельно (к полной стоимости), так и последовательно (с учётом применения предыдущих скидок), все эти условия являются деталью реализации и не опубликованы в API.

В API доступны лишь общие настройки, такие как:

- [`IsActive`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountType_IsActive.htm) — действует ли скидка в [текущей группе](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_GetHostTerminalsGroup.htm),
- [`IsAutomatic`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountType_IsAutomatic.htm) — может ли скидка добавляться в заказы автоматически,
- [`CanApplyManually`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountType_CanApplyManually.htm) — может ли скидка быть добавлена в заказ вручную, путём выбора из списка,
- [`CanApplyByCardNumber`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountType_CanApplyByCardNumber.htm) — может ли скидка быть добавлена в заказ по номеру дисконтной карты (путём ввода номера карты на цифровой клавиатуре),
- [`CanApplyByDiscountCard`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountType_CanApplyByDiscountCard.htm) — может ли скидка быть добавлена в заказ по дисконтной карте (путём считывания трека карты),
- [`DiscountByFlexibleSum`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountType_DiscountByFlexibleSum.htm) — требуется ли при добавлении скидки в заказ указать её сумму,
- [`CanApplySelectively`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountType_CanApplySelectively.htm) — можно ли выборочно применить скидку к нескольким элементам заказа.  

Сумма скидки вычисляется отдельно для каждого элемента заказа, даже если скидка действует на весь заказ. Таким образом, скидка на заказ — это сумма скидок на его элементы.
Сумма скидки, как и любая другая денежная величина, кратна минимальному номиналу валюты.
Сумма всех действующих на элемент заказа скидок не превышает его стоимости, иными словами, результат вычитания скидок из стоимости может достичь нуля (скидка 100%), но отрицательным стать не может.
Для надбавок такого ограничения нет, к стоимости элемента заказа можно прибавить сколь угодно большое значение.

## Жизненный цикл ##
Добавленная в заказ скидка может находиться в одном из двух состояний — зафиксирована, либо не зафиксирована.
Возможны переходы между этими состояниями, но напрямую управлять этим нельзя, состояние привязано к жизненному циклу заказа.
Сейчас скидки фиксируются при переводе заказа в [статус](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrder_Status.htm) `Bill` и возвращаются в незафиксированное состояние при переводе в статус `New`, но это деталь реализации, которая может измениться в любой момент.

### Скидка не зафиксирована ###
При добавлении скидки в заказ запоминаются данные лишь о том, как её вычислять.
Суммы вычисляются на лету по требованию, результаты вычислений не запоминаются.
Поскольку при каждом вычислении используются последние доступные значения параметров алгоритма применения скидки, включая настройки из iikoOffice и текущее время, результаты могут получаться разные. Соответственно, может меняться и итоговая стоимость заказа.

Автоматически добавляемые скидки ([`IsAutomatic`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountType_IsAutomatic.htm)) неявно присутствуют во всех заказах с незафиксированными скидками, до фиксации их не будет в списке [`Discounts`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrder_Discounts.htm) каждого заказа, а после фиксации — зависит от наличия эффекта применения к заказу.

### Скидка зафиксирована ###
При достижении заказом момента, когда его итоговая стоимость больше не должна меняться, вычисляемые на лету значения (цены, скидки и т. п.) фиксируются.
Результат последнего вычисления сохраняется и используется при последующих обращениях вместо повторного вычисления.
Это позволяет не зависеть от изменения настроек или других параметров применения скидок.
С этого момента помимо алгоритма и параметров применения скидки запоминаются конкретные суммы по каждому элементу заказа.
Однако, если на момент фиксации скидка фактически не действовала (имела нулевой эффект), она удаляется из заказа. 

## Структуры данных ##
- [`DiscountType`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IDiscountType.htm) — тип скидки, элемент справочника скидок. Весь справочник можно получить, вызвав метод [`GetDiscountTypes`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_GetDiscountTypes.htm).
- [`DiscountItem`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IDiscountItem.htm) — добавленная в заказ скидка. Скидку в заказ можно добавить методами [`AddDiscount`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_AddDiscount.htm), [`AddFlexibleSumDiscount`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_AddFlexibleSumDiscount.htm), [`AddDiscountByCardNumber`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_AddDiscountByCardNumber.htm), [`AddFlexibleSumDiscountByCardNumber`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_AddFlexibleSumDiscountByCardNumber.htm).
Удалить скидку можно с помощью [`DeleteDiscount`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_DeleteDiscount.htm).
Список добавленных в заказ скидок — [`Discounts`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrder_Discounts.htm).
- [`AppliedDiscountItem`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IAppliedDiscountItem.htm) — результат применения ранее добавленной в заказ скидки, можно получить с помощью метода [`GetOrderAppliedDiscounts`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_GetOrderAppliedDiscounts.htm), при этом скидки могут быть применены на лету в момент запроса, либо может быть возвращён результат предыдущего применения, если он был зафиксирован в заказе.
- [`FullSum`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrder_FullSum.htm) — полная стоимость заказа без учёта скидок (подытог).
- [`ResultSum`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrder_ResultSum.htm) — итоговая стоимость заказа с учётом скидок.

Примечание: не следует определять суммарную скидку по заказу как разницу между двумя последними значениями, поскольку они отличаются не только учётом скидок, но и учётом налога на добавленную стоимость (НДС, VAT), не включённого в цену товаров. Сумму скидок лучше считать, суммируя [`DiscountSum`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IAppliedDiscountItem_DiscountSum.htm).


## Выборочное применение скидок ##
По умолчанию скидки действуют на все блюда, включая те, что добавлены после назначения скидки.
Однако, скидки с включённой настройкой `CanApplySelectively` можно выборочно применить к одному или нескольким элементам заказа, и тогда они будут действовать только на них.
Например, при торговле выпечкой ещё горячие изделия могут продаваться по полной стоимости, а те же самые, но уже остывшие — со скидкой.
[Элемент номенклатуры](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Assortment_IProduct.htm) в обоих случаях один и тот же.
Решение принимает пользователь (или плагин), задавая ограничение, на какие блюда и модификаторы будет действовать скидка.
Это ограничение работает как *белый список* (whitelist), поэтому выборочно применённая скидка не будет действовать на блюда, добавленные позднее.
Все прочие ограничения (по категории, по времени, по сумме и т. п.) остаются в силе, то есть фактически скидка подействует только на те элементы *белого списка*, которые удовлетворяют и прочим условиям.

Выборочно применённая скидка действует только непосредственно на заданные элементы заказа.
Например, если в заказе есть блюдо с платными модификаторами, и скидка выборочно применена только к блюду, только на блюдо она и будет действовать.
Чтобы выборочно применить скидку и к блюдам, и к модификаторам, необходимо явно задать и блюдо, и модификаторы. 

### Ключевые функции: ###

- [`ChangeSelectiveDiscount`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_ChangeSelectiveDiscount.htm) — позволяет задать *белый список* элементов заказа, на которые может действовать скидка. Учитывая разные типы элементов, фактически это три списка — [простых блюд](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IOrderProductItem.htm), [компонентов составных блюд](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IOrderCompoundItemComponent.htm) и [модификаторов](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IOrderModifierItem.htm).
Если все три списка задать `null`, скидка перестанет применяться выборочно, будет действовать на весь заказ.
- [`GetSelectiveDiscountItemSettings`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_GetSelectiveDiscountItemSettings.htm) — метод возвращает параметры выборочного применения (те самые три списка), либо `null`, если скидка действует на весь заказ без ограничения по элементам.
- [`IsSelectivelyApplied`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountItem_IsSelectivelyApplied.htm) — показывает, применяется ли скидка выборочно или на весь заказ.

### Примеры ###
Пример выборочного применения скидки можно посмотреть во входящем в состав SDK плагине Resto.Front.Api.SamplePlugin (`EditorTester.AddSelectiveDiscount`):

```cs
/// <summary>
/// Добавление скидки с возможностью выбора блюд.
/// </summary>
private void AddSelectiveDiscount()
{
    var order = PluginContext.Operations.GetOrders().Last();
    var selectedDish = new List<IOrderProductItemStub> { order.Items.OfType<IOrderProductItem>().Last() };
    var discountType = PluginContext.Operations.GetDiscountTypes().Last(x => !x.Deleted && x.IsActive && x.CanApplySelectively);

    var editSession = PluginContext.Operations.CreateEditSession();
    editSession.AddDiscount(discountType, order);
    editSession.ChangeSelectiveDiscount(order, discountType, selectedDish, null, null);
    PluginContext.Operations.SubmitChanges(PluginContext.Operations.GetCredentials(), editSession);
}
```