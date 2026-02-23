---
title: Исключение DuplicatedIdException
layout: default
tags: v9preview5 v9
---

Добавлено исключение [`DuplicatedIdException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_DuplicatedIdException.htm) для идентификации дублирования ID сущностей.

Позволяет чётко отличить случаи дублирования идентификаторов от других ошибок. Применяется к заказам, гостям, улицам, блюдам, оплатам, комбо, модификаторам и компонентам.

### Пример использования

```csharp
try
{
    var order = operations.CreateOrder(...);
}
catch (DuplicatedIdException ex)
{
    // Заказ с таким ID уже существует
    PluginContext.Log.Warn($"Duplicate order ID detected: {ex.Message}");
}
```

### См. также

* [`DuplicatedIdException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_DuplicatedIdException.htm)
* [Обработка исключений](https://iiko.github.io/front.api.sdk/v9/html/N_Resto_Front_Api_Exceptions.htm)
