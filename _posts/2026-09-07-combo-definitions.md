---
title: Определения новых комбо в API
layout: default
tags: v10 v10preview2
---

В `IOperationService` добавлен метод [`GetComboDefinitions`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetComboDefinitions.htm), возвращающий описания новых (RMS-)комбо, настроенных в BackOffice. Полученные определения используются, чтобы собрать комбо в заказе: подобрать блюда по шагам, учесть размеры, цены и стоп-листы, а затем добавить комбо методом [`AddOrderCombo`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderCombo.htm).

Описания публикуются в новом пространстве имён `Resto.Front.Api.Data.Combo`.

## Сущности комбо

### [`IComboDefinition`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Combo_IComboDefinition.htm)

Определение комбо.

* `Name` — название комбо
* `Sku` — SKU комбо
* [`Category`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Combo_IComboDefinition_Category.htm) — категория отображения (`null`, если категории нет)
* `Position` — порядок сортировки
* `PickListLabel` — метка в списке быстрого выбора
* [`Scale`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Combo_IComboDefinition_Scale.htm) — шкала продукта для выбора размера (`null`, если размеры не используются)
* `Sizes` — доступные размеры комбо (`null` — доступны все размеры шкалы)
* `ShowHintForMissingSteps` — максимальное число отсутствующих не-основных шагов, при котором ещё показывается подсказка о сборке комбо (`null` — подсказка показывается всегда)
* [`Steps`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Combo_IComboDefinition_Steps.htm) — упорядоченный список шагов комбо

### [`IComboStep`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Combo_IComboStep.htm)

Шаг (группа) комбо.

* `Name` — название шага
* `Position` — порядок сортировки внутри комбо
* `IsMainGroup` — когда продукты из всех основных шагов добавлены в заказ, показывается подсказка о сборке комбо
* `CanSkipStep` — можно ли пропустить шаг при сборке комбо
* `Items` — продукты, доступные на этом шаге

### [`IComboStepItem`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Combo_IComboStepItem.htm)

Позиция продукта внутри шага.

* `Position` — порядок сортировки внутри шага
* `Product` — продукт, разрешённый на этой позиции
* `ForbiddenModifiers` — запрещённые модификаторы продукта в этом комбо (`null` — запрещены все, пустой список — не запрещён ни один)
* `Sizes` — соответствие размеров комбо доступным размерам продукта (`null` — у продукта нет шкалы или все размеры доступны для всех размеров комбо, пустой словарь — ни один размер не доступен)
* `SizesForUnscaledCombo` — доступные размеры продукта для комбо без размера (`Scale == null`; `null` — доступны все, пустой список — продукт недоступен на этом шаге)

### [`IComboDefinitionCategory`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Combo_IComboDefinitionCategory.htm)

Категория отображения определения комбо.

* `Name` — название категории
* `Position` — порядок сортировки

## Цены и видимость

Для учёта комбо-прайслиста и стоп-листов при подборе блюд добавлены два метода.

### [`GetComboItemPrice`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetComboItemPrice.htm)

Возвращает цену продукта в составе комбо для заданных шага и размера комбо. Аргументы: `product`, `productSize` (или `null` для базовой цены), `comboGroupId` — идентификатор шага (группы) комбо, `comboSize` (или `null` для базовой цены без размера), `priceCategory` (или `null` для категории по умолчанию), `pricingTime` — момент времени, на который рассчитывается цена.

Возвращает `null`, если в комбо-прайслисте нет записи для этой комбинации.

### [`GetComboItemIncludedInMenu`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetComboItemIncludedInMenu.htm)

Возвращает, включён ли продукт в комбо-меню для заданных шага и размера комбо. Сигнатура совпадает с `GetComboItemPrice`. Возвращает `null`, если в комбо-прайслисте нет записи для этой комбинации (ограничения нет); `false` означает, что блюдо недоступно (в том числе из-за стоп-листа) и должно быть исключено из подбора.

## Пример: сборка комбо в заказе

```csharp
private void AddComboInOrder(IOrder order, IOperationService os)
{
    // 1. Получаем активные определения комбо
    var comboDefinitions = os.GetComboDefinitions();
    if (comboDefinitions.Count == 0)
        return;

    var editSession = os.CreateEditSession();
    var guest = order.Guests.Last();
    var comboDefinition = comboDefinitions[0];

    // 2. Определяем размер комбо, если у комбо есть шкала
    IProductSize comboSize = null;
    if (comboDefinition.Scale != null)
    {
        var availableSizes = comboDefinition.Sizes
            ?? PluginContext.Operations.GetProductScaleSizes(comboDefinition.Scale);
        comboSize = availableSizes.FirstOrDefault();
    }

    // 3. Для каждого шага подбираем блюдо и добавляем его в заказ
    var comboItems = new Dictionary<ComboGroupIdAndName, IOrderCookingItemStub>();
    var expectedComboPrice = 0m;

    foreach (var comboStep in comboDefinition.Steps)
    {
        // Отбираем блюда, совместимые с выбранным размером комбо
        var compatibleItems = comboStep.Items.Where(item =>
        {
            if (comboSize == null || item.Sizes == null)
                return true;
            return item.Sizes.TryGetValue(comboSize, out var sizes) && sizes.Count > 0;
        }).ToList();

        // Исключаем недоступные по прайслисту / стоп-листу
        compatibleItems = compatibleItems.Where(item =>
        {
            IProductSize productSize = null;
            if (item.Product.Scale != null)
                productSize = PluginContext.Operations
                    .GetProductScaleSizes(item.Product.Scale)
                    .FirstOrDefault();

            var included = os.GetComboItemIncludedInMenu(
                item.Product, productSize, comboStep.Id, comboSize,
                order.PriceCategory, DateTime.Now);

            return included != false; // null — записи в прайслисте нет (ограничения нет)
        }).ToList();

        if (compatibleItems.Count == 0)
            return;

        var product = compatibleItems[0].Product;
        IProductSize productSize = null;
        if (product.Scale != null)
            productSize = product.Scale.DefaultSize;

        // Цена блюда именно в составе комбо
        var comboItemPrice = os.GetComboItemPrice(
            product, productSize, comboStep.Id, comboSize,
            order.PriceCategory, DateTime.Now);
        expectedComboPrice += comboItemPrice ?? 0m;

        // Добавляем блюдо в заказ
        var stub = editSession.AddOrderProductItem(1, product, order, guest, productSize);

        // Ключ словаря — идентификатор шага (группы) комбо
        comboItems.Add(new ComboGroupIdAndName(comboStep.Id, null), stub);
    }

    // 4. Добавляем само комбо
    editSession.AddOrderCombo(
        Guid.NewGuid(),           // id комбо в заказе
        null,                     // имя (можно null)
        1,                        // количество
        expectedComboPrice,       // цена
        comboDefinition.Id,       // sourceActionId — id определения комбо
        Guid.Empty,               // programId — программа лояльности (0, если нет)
        comboItems,               // блюда по шагам
        order,
        guest,
        comboSize);               // размер комбо (null, если без шкалы)

    os.SubmitChanges(editSession);
}
```

Цена комбо рассчитывается плагином как сумма `GetComboItemPrice` по шагам; за достоверность цены отвечает плагин.

### См. также

* [`GetComboDefinitions`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetComboDefinitions.htm)
* [`AddOrderCombo`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderCombo.htm)
* [Группы комбо при создании из API]({{ site.baseurl }}{% post_url 2024-09-26-ComboGroupIdAndName %})
* [Размеры в комбо-блюдах]({{ site.baseurl }}{% post_url 2023-06-05-combo-size %})
