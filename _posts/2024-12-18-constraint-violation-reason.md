---
title: Свойство Reason в ConstraintViolationException
layout: default
tags: v9preview5 v9
---

В исключение [`ConstraintViolationException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_ConstraintViolationException.htm) добавлено свойство [`Reason`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Exceptions_ConstraintViolationException_Reason.htm) для детализации причины нарушения ограничений.

### Причины нарушений

* **ProductExcludedFromMenu** - продукт исключён из меню
* **ModifierUsing** - некорректное использование модификаторов
* **PaymentTypeUsing** - проблемы с типом оплаты
* **CommodityMarkUsing** - некорректное количество маркировки
* **SettingsIssue** - проблемы в настройках

### Пример использования

```csharp
try
{
    // Операция с заказом
}
catch (ConstraintViolationException ex)
{
    switch (ex.Reason)
    {
        case ConstraintViolationReason.ProductExcludedFromMenu:
            // Обработка исключённого из меню продукта
            break;
        case ConstraintViolationReason.ModifierUsing:
            // Обработка ошибок с модификаторами
            break;
    }
}
```

### См. также

* [`ConstraintViolationException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_ConstraintViolationException.htm)
* [`ConstraintViolationReason`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_ConstraintViolationReason.htm)

* [`ConstraintViolationException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_ConstraintViolationException.htm)
* [Обработка исключений](https://iiko.github.io/front.api.sdk/v9/html/N_Resto_Front_Api_Exceptions.htm)
