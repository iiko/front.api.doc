---
title: Добавлены методы для работы с внешними курьерскими службами
layout: default
---

Начиная с V7 в доставке [IDeliveryOrder](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm) появляется новое поле [IDeliveryOrder.ExternalCourierServiceData](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_ExternalCourierServiceData.htm), а также методы для назначения внешней курьерской службы [PluginContext.Operations.ChangeDeliveryExternalCourierService](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_ChangeDeliveryExternalCourierService.htm) и внешнего курьера  [PluginContext.Operations.ChangeDeliveryExternalCourier](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_ChangeDeliveryExternalCourier.htm).

### Пример использования

```cs
private void EcsExample()
{
    var delivery = ...;
    var credentials = PluginContext.Operations.AuthenticateByPin(pin);

    PluginContext.Operations.ChangeDeliveryExternalCourierService(new Guid("C7B010FB-F23F-481F-9C74-E770AE0F074C"), "Название службы", delivery, credentials);
    delivery = PluginContext.Operations.GetDeliveryOrderById(delivery.Id);

    PluginContext.Operations.ChangeDeliveryExternalCourier("Иванов Иван Иванович", "89005001234", "Расчет наличными", delivery, credentials)
}
```
