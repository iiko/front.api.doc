---
title: Нотификация о начале процесса оплаты
layout: default
tags: v9 v9preview1
---

Добавлена нотификация [`BeforeProceedOrderPayment`](https://iiko.github.io/front.api.sdk/v9/html/E_Resto_Front_Api_INotificationService_BeforeProceedOrderPayment.htm), которая выполняется перед началом процесса оплаты (на экране кассы при нажатии кнопки "Оплатить").

### Возможности

Позволяет плагинам:
* Выполнять дополнительные проверки перед оплатой
* Вносить изменения в заказ на этапе начала оплаты через предоставленный [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm)

### Пример использования

```csharp
// Подписка на уведомление
var subscription = PluginContext.Notifications
    .BeforeProceedOrderPayment
    .Subscribe(notification =>
    {
        var order = notification.Order;
        var operations = notification.Operations;
        
        // Выполнение проверок или изменений
        var editSession = operations.CreateEditSession();
        
        // Добавление внешних данных или другие операции
        editSession.AddOrderExternalData(
            "PaymentInitiated",
            new ExternalDataItem(DateTime.Now.ToString(), false),
            order
        );
        
        operations.SubmitChanges(editSession);
    });
```

### См. также

* [`INotificationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_INotificationService.htm)
* [Уведомления о событиях](https://iiko.github.io/front.api.sdk/v9/html/N_Resto_Front_Api_Notifications.htm)
* [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm)
