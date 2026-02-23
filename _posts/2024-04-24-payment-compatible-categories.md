---
title: Совместимые категории блюд для типов оплаты
layout: default
tags: v9
---

В API добавлено свойство [`PaymentType.CompatibleCategories`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Payments_IPaymentType_CompatibleCategories.htm) для получения категорий блюд, совместимых с типом оплаты.

Позволяет реализовать кастомные проверки совместимости типов оплаты с категориями блюд (например, бонусами можно оплатить только определённые категории).

### Пример использования

```csharp
var paymentType = PluginContext.Operations
    .GetPaymentTypes()
    .First(pt => pt.Name == "Бонусы");

var compatibleCategories = paymentType.CompatibleCategories;

// Проверка, можно ли оплатить позицию данным типом оплаты
foreach (var item in order.Items.OfType<IOrderProductItem>())
{
    if (!compatibleCategories.Contains(item.Product.Category))
    {
        // Этот тип оплаты нельзя использовать для данной категории
    }
}
```

### См. также

* [`IPaymentType`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Payments_IPaymentType.htm)
* [`IProductCategory`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Assortment_IProductCategory.htm)
* Валидации заказов перед оплатой
* Предварительных проверок в UI плагинов

### См. также

* [`IPaymentType`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Payments_IPaymentType.htm)
* [`IProductCategory`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Assortment_IProductCategory.htm)
* [Типы оплаты](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetPaymentTypes.htm)
