---
title: Возврат товаров и заказов закрытых кассовых смен
layout: default
tags: v8
---

Теперь появилась возможность делать возврат товаров или заказов закрытых кассовых смен не только из [UI iikoFront](https://ru.iiko.help/articles/#!iikofront-8-3/topic-38), но и из API V8.

В одной из [предыдущих новостей]({{ site.baseurl }}/2023/03/09/past-orders.html)
мы рассказали о способах получения заказов закрытых кассовых смен.
Теперь, если это необходимо, можно откорректировать список блюд такого заказа, и сделать его возврат путем вызова метода
[`StornoPastOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_StornoPastOrder.htm).

Если же нужно сделать возврат товаров, не привязанных к конкретному заказу, можно воспользоваться методом
[`StornoPastOrderItems`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_StornoPastOrderItems.htm),
заранее сформировав список товаров `items` к возврату.
[`PastOrderItem.Price`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrderItem_Price.htm) и
[`PastOrderItem.SumWithoutDiscounts`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrderItem_SumWithoutDiscounts.htm)
не используются, их можно не заполнять при передаче в метод.

Также из API можно указать [размер блюда](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrderItem_ProductSize.htm), если размеры поддерживаются им.
Каждый из передаваемых `items` может помечаться как модификатор или главное блюдо
([`PastOrderItem.IsMainDish`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrderItem_IsMainDish.htm)).
Аналогично UI и без строгих проверок на соответствие типу номенклатуры из карточки.
Но модификатором не может быть первый элемент списка.
Также блюдо помеченное модификатором не может иметь размер.
У каждого [`PastOrderItem`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_PastOrderItem.htm)
должны быть указаны место приготовления и тип места приготовления.

На данный момент возврат возможен только на фискальном регистраторе по умолчанию текущего терминала.
Кассовая смена на ФР должна быть открыта, наличности должно хватать при возврате наличными.

Тип оплаты для сторнирования можно получить через
[`GetPaymentTypesToStornoPastOrderItems`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPaymentTypesToStornoPastOrderItems.htm).
Можно также возвращать [плагинным типом оплаты]({{ site.baseurl }}/v6/ru/PaymentProcessor.html)
(с флажком `canProcessPaymentReturnWithoutOrder` равным `true`, переданным в
[`RegisterPaymentSystem`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_RegisterPaymentSystem.htm)).

Тип удаления для сторнирования можно получить через
[`GetRemovalTypesToStornoPastOrderItems`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetRemovalTypesToStornoPastOrderItems.htm).
Тип удаления может быть

- без списания
([`IRemovalType.WriteoffType`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IRemovalType_WriteoffType.htm)` == WriteoffType.None`)
- со списанием
([`IRemovalType.WriteoffType`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IRemovalType_WriteoffType.htm)`.HasFlag(WriteoffType.Cafe`))

При сторнировании со списанием проверяется наличие настраиваемого типа оплаты "Возврат от покупателя".

Отделение должно принадлежать текущей группе и у отделения должен быть склад.

Система налогообложения передается только если была получена через
[`GetTaxationSystemsToStornoPastOrderItems`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetTaxationSystemsToStornoPastOrderItems.htm).

При сторнировании со списанием проверяется право F_STRN (Производить возврат оплаты).
При сторнировании без списания проверяется право F_SWWOFF (Производить возврат оплаты по чеку без возврата на склад).

Примеры:
```
private void StornoPastOrder()
{
    var pastOrder = PluginContext.Operations.GetPastOrders().First();
    var paymentType = pastOrder.Payments.First().PaymentType;

    // rt.WriteoffType.HasFlag(WriteoffType.Cafe) - сторнирование со списанием
    // rt.WriteoffType == WriteoffType.None - сторнирование без списания
    var removalType = PluginContext.Operations.GetRemovalTypesToStornoPastOrderItems().First(rt => rt.WriteoffType.HasFlag(WriteoffType.Cafe));
    var section = pastOrder.RestaurantSection;
    var orderType = pastOrder.OrderType;
    var taxationSystem = PluginContext.Operations.GetTaxationSystemsToStornoPastOrderItems().Select(ts => (TaxationSystem?)ts).FirstOrDefault();

    PluginContext.Operations.StornoPastOrder(
        PluginContext.Operations.GetCredentials(),
        pastOrder,
        paymentType,
        removalType,
        section,
        orderType,
        null,
        taxationSystem,
        null);
}

private void StornoProducts()
{
    var paymentType = PluginContext.Operations.GetPaymentTypesToStornoPastOrderItems().First(pt => pt.Name.Contains("SampleApiPayment"));

    // rt.WriteoffType.HasFlag(WriteoffType.Cafe) - сторнирование со списанием
    // rt.WriteoffType == WriteoffType.None - сторнирование без списания
    var removalType = PluginContext.Operations.GetRemovalTypesToStornoPastOrderItems().First(rt => rt.WriteoffType.HasFlag(WriteoffType.Cafe));
    var section = PluginContext.Operations.GetTerminalsGroupRestaurantSections(PluginContext.Operations.GetHostTerminalsGroup()).First();
    var orderType = PluginContext.Operations.GetOrderTypes().FirstOrDefault(ot => ot.OrderServiceType == OrderServiceTypes.Common);
    var taxationSystem = PluginContext.Operations.GetTaxationSystemsToStornoPastOrderItems().Select(ts => (TaxationSystem?)ts).FirstOrDefault();

    var activeProducts = PluginContext.Operations.GetActiveProducts()
        .Where(product => product.Template == null &&
            (product.Type == ProductType.Dish || product.Type == ProductType.Modifier || product.Type == ProductType.Goods || product.Type == ProductType.ForPurchase))
        .ToList();

    PluginContext.Operations.StornoPastOrderItems(
        PluginContext.Operations.GetCredentials(),
        GetPastOrderItems(activeProducts).ToList(),
        paymentType,
        removalType,
        section,
        orderType,
        null,
        taxationSystem,
        null);
}

private IEnumerable<PastOrderItem> GetPastOrderItems(IReadOnlyList<IProduct> activeProducts)
{
    var product = activeProducts.First(p => p.Name.Contains("Чай"));
    yield return new PastOrderItem
    {
        IsMainDish = true,
        Product = product,
        ProductSize = PluginContext.Operations.GetProductSizes().FirstOrDefault(ps => ps.Name.Contains("S")),
        Amount = 2,
        SumWithDiscounts = 100.5m,
        Price = 0, // не используется в StornoPastOrderItems
        SumWithoutDiscounts = 0, // не используется в StornoPastOrderItems
    };

    product = activeProducts.First(p => p.Name.Contains("Сливки"));
    yield return new PastOrderItem
    {
        IsMainDish = false,
        Product = product,
        ProductSize = null,
        Amount = 2,
        SumWithDiscounts = 0m,
        Price = 0, // не используется в StornoPastOrderItems
        SumWithoutDiscounts = 0, // не используется в StornoPastOrderItems
    };

    product = activeProducts.First(p => p.Name.Contains("Пюре"));
    yield return new PastOrderItem
    {
        IsMainDish = true,
        Product = product,
        ProductSize = null,
        Amount = 1,
        SumWithDiscounts = 90m,
        Price = 0, // не используется в StornoPastOrderItems
        SumWithoutDiscounts = 0, // не используется в StornoPastOrderItems
    };

    product = activeProducts.First(p => p.Name.Contains("Бутылка"));
    yield return new PastOrderItem
    {
        IsMainDish = true,
        Product = product,
        ProductSize = null,
        Amount = 2,
        SumWithDiscounts = -15m,
        Price = 0, // не используется в StornoPastOrderItems
        SumWithoutDiscounts = 0, // не используется в StornoPastOrderItems
    };
}
```