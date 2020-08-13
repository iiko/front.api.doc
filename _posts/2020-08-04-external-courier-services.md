---
title: Добавлены методы для работы с внешними курьерскими службами
layout: default
---

Начиная с V7 в доставке [`IDeliveryOrder`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm) появляется новое поле [`IDeliveryOrder.ExternalCourierServiceData`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_ExternalCourierServiceData.htm), а также методы для назначения внешней курьерской службы [`PluginContext.Operations.ChangeDeliveryExternalCourierService`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_ChangeDeliveryExternalCourierService.htm) и внешнего курьера  [`PluginContext.Operations.ChangeDeliveryExternalCourier`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_ChangeDeliveryExternalCourier.htm).

### Пример использования

```cs
private void EcsExample()
{
    var delivery = ...;
    var credentials = PluginContext.Operations.AuthenticateByPin(pin);
    
    // Идентификатор, полученный из внешней системы
    Guid ecsId = ...;
    // Название системы
    string ecsName = "Service Name";

    PluginContext.Operations.ChangeDeliveryExternalCourierService(ecsId, ecsName, delivery, credentials);
    delivery = PluginContext.Operations.GetDeliveryOrderById(delivery.Id);

    string courierName = "Иванов Иван Иванович";
    string courierPhone = "+79005001234"; // телефон курьера, в международном формате
    string courierComment = "Расчет наличными";

    PluginContext.Operations.ChangeDeliveryExternalCourier(courierName, courierPhone, courierComment, delivery, credentials)
}
```
