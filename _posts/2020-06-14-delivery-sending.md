---
title: Добавлена возможность отправить доставку в путь (без оплаты)
layout: default
---

Начиная с V7Preview3 появляется возможность подготовить доставку к отправке, напечатать накладную, назначить курьера и отправить его в путь.

### Нововведения

- Настройка времени оплаты доставки [PluginContext.Operations.GetHostDeliverySettings().DeliveryPaymentTimeOption](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_IDeliverySettings_DeliveryPaymentTimeOption.htm) — перед отправкой или перед закрытием. Пока оплата доставок через API не поддерживается, поэтому работать будет только отправка без оплаты.
- Настройка времени печати доставочной накладной — вручную или автоматически, а если автоматически, то в какой именно момент: [PluginContext.Operations.GetHostDeliverySettings().DeliveryBillPrintTimeOption](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_IDeliverySettings_DeliveryBillPrintTimeOption.htm).
- Подготовка доставки к отправке (перевод в статус «Ожидает»): [PluginContext.Operations.PrepareDeliveryForSending(credentials, delivery)](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_PrepareDeliveryForSending.htm). Здесь будут проверены ограничения графика работы и картографии, а также добавлены автодобавляемые блюда и услуги. Можно указать необязательный флаг throwOnChanges, чтобы операция прервалась в случае изменения состава или стоимости заказа, это позволит плагину отреагировать на изменения и проверить, хочет ли он отправить доставку с этими изменениями. По умолчанию флаг выключен, плагин согласен на любые автоизменения.
- Печать доставочной накладной: [PluginContext.Operations.PrintDeliveryBill(credentials, delivery)](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_PrintDeliveryBill.htm). Здесь же напечатаются доставочные стикеры, если в настройках указано печатать их вместе с накладной.
- Отправка доставки в путь: [PluginContext.Operations.SendDelivery(credentials, delivery)](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_SendDelivery.htm).
- Если настроена автоматическая печать доставочной накладной в начале приготовления или при отправке, она будет напечатана при вызове из плагина методов [PrintOrderItems](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_PrintOrderItems.htm) и [SendDelivery](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_SendDelivery.htm) соответственно.

### Пример использования

```cs
private void CreateAndSendDelivery()
{
    if (PluginContext.Operations.GetHostDeliverySettings().DeliveryPaymentTimeOption == DeliveryPaymentTimeOption.BeforeSending)
        return; // not supported yet

    var credentials = PluginContext.Operations.AuthenticateByPin(pin);

    var delivery = CreateDelivery(false); // EditorTester.CreateDelivery method from SamplePlugin
    if (PluginContext.Operations.IsDeliveryConfirmationActive())
    {
        Debug.Assert(delivery.DeliveryStatus == DeliveryStatus.Unconfirmed);
        PluginContext.Operations.ChangeDeliveryConfirmTime(DateTime.Now, delivery, credentials);
        delivery = PluginContext.Operations.GetDeliveryOrderById(delivery.Id);
    }

    PluginContext.Operations.PrintOrderItems(credentials, delivery, delivery.Items.OfType<IOrderCookingItem>().ToList());

    Debug.Assert(delivery.DeliveryStatus == DeliveryStatus.New);
    PluginContext.Operations.PrepareDeliveryForSending(credentials, delivery);
    delivery = PluginContext.Operations.GetDeliveryOrderById(delivery.Id);
    Debug.Assert(delivery.DeliveryStatus == DeliveryStatus.Waiting);

    var courier = PluginContext.Operations.GetUsers().Single(x => x.Name == courierName);
    Debug.Assert(delivery.Courier == null);
    PluginContext.Operations.ChangeDeliveryCourier(true, delivery, courier, credentials);
    delivery = PluginContext.Operations.GetDeliveryOrderById(delivery.Id);
    Debug.Assert(Equals(delivery.Courier, courier));

    Debug.Assert(!delivery.IsPrintedBillActual);
    PluginContext.Operations.PrintDeliveryBill(credentials, delivery);
    delivery = PluginContext.Operations.GetDeliveryOrderById(delivery.Id);
    Debug.Assert(delivery.IsPrintedBillActual);

    PluginContext.Operations.SendDelivery(credentials, delivery);
    delivery = PluginContext.Operations.GetDeliveryOrderById(delivery.Id);
    Debug.Assert(delivery.DeliveryStatus == DeliveryStatus.OnWay);
}
```