---
title: Нотификация BeforeOrderClose при закрытии заказа
layout: default
tags: v10
---

Добавлена нотификация [`BeforeOrderClose`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_INotificationService_BeforeOrderClose.htm),
которая срабатывает после процессинга оплат, непосредственно перед закрытием заказа.

Раньше изменить заказ после проведения оплат (например, записать внешние данные через
[`AddOrderExternalData`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderExternalData.htm))
можно было в обработчике `BeforeDoCheque`. После удаления второго вызова `BeforeDoCheque` эта возможность пропала —
теперь для таких сценариев предназначена отдельная нотификация `BeforeOrderClose`.

### Возможности

Позволяет плагинам:

* Изменять заказ после процессинга оплат — записывать `ExternalData`, менять заказ через edit-сессию;
* Взаимодействовать с пользователем через [`IViewManager`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_UI_IViewManager.htm);
* Отменять закрытие заказа, бросая `OperationCanceledException` в подписчике.

### Аргументы

Нотификация передаёт кортеж `(order, paymentItems, os, vm)`:

* `order` — закрываемый заказ;
* `paymentItems` — список оплат заказа;
* `os` — [`IOperationService`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_IOperationService.htm),
  через который можно создать edit-сессию (`CreateEditSession` поддерживается в точке расширения `BeforeOrderClose`);
* `vm` — [`IViewManager`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_UI_IViewManager.htm)
  (может быть `null`, если оплата выполняется в фоне).

### Пример

```csharp
PluginContext.Notifications.BeforeOrderClose.Subscribe(x =>
{
    var editSession = x.os.CreateEditSession();
    editSession.AddOrderExternalData(
        "ProcessedByPlugin",
        new ExternalDataItem("yes", false),
        x.order);
    x.os.SubmitChanges(editSession);
});
```

### См. также

* [`INotificationService`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_INotificationService.htm)
* [`IOperationService`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_IOperationService.htm)
* [`IEditSession.AddOrderExternalData`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderExternalData.htm)
* [Нотификация BeforeProceedOrderPayment](https://iiko.github.io/front.api.doc/2024/03/20/before-proceed-payment-notification.html)
