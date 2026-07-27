---
title: Получение всех ExternalData
layout: default
tags: v9preview3 v9
---

Методы [`GetOrderAllExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetOrderAllExternalData.htm), [`GetKitchenOrderAllExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetKitchenOrderAllExternalData.htm) и [`GetKitchenOrderItemAllExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetKitchenOrderItemAllExternalData.htm) теперь возвращают словарь (ключ - строковый идентификатор, значение - [`ExternalDataItem`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Common_ExternalDataItem.htm)) вместо только значений. Это значительно ускоряет работу с внешними данными.

```csharp
// Получение всех внешних данных заказа
var allData = PluginContext.Operations.GetOrderAllExternalData(order);

foreach (var kvp in allData)
{
    var key = kvp.Key;
    var value = kvp.Value;
    PluginContext.Log.Info($"External data: {key} = {value.Value}");
}
```

### См. также

* [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm)
* [`IOperationService.GetOrderAllExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetOrderAllExternalData.htm)
* [`ExternalDataItem`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Common_ExternalDataItem.htm)
* [Работа с внешними данными](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderExternalData.htm)
