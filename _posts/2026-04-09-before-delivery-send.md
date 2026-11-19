---
title: Нотификация перед отправкой доставки (BeforeDeliverySend)
layout: default
tags: v10 v10preview1
---

Начиная с API V10Preview1 в [`INotificationService`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_INotificationService.htm) добавлена нотификация [`BeforeDeliverySend`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_INotificationService_BeforeDeliverySend.htm):

```cs
INotification<(IDeliveryOrder order, IViewManager vm)> BeforeDeliverySend { get; }
```

Нотификация вызывается перед отправкой доставки — переходом из статуса «Ожидает отправки» в статус «В пути». Плагин может проверить доставку, показать сообщение пользователю или запретить отправку.

### Когда вызывается

* при нажатии кнопки «Отправить» на экранах доставки;
* при автоматической отправке доставки после оплаты заказа;
* при отправке доставки курьером со своего экрана доставок;
* при вызове метода API [`SendDelivery`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_SendDelivery.htm).

К моменту вызова доставка уже сохранена, курьер назначен. Если доставка разделена на части, нотификация вызывается один раз — для основной доставки.

### Отмена отправки

Чтобы запретить отправку, выбросьте `OperationCanceledException` с текстом причины. Нотификация будет вызвана у всех подписанных плагинов, после чего сообщения всех отказавших плагинов будут показаны пользователю. Доставка останется в статусе «Ожидает отправки», а iikoFront останется на экране доставки. Если отправка вызвана через `SendDelivery`, вызывающий плагин получит `OperationCanceledException`.

```cs
PluginContext.Notifications.BeforeDeliverySend.Subscribe(x =>
{
    if (!IsReadyToSend(x.order)) // собственная проверка плагина
        throw new OperationCanceledException("Доставка не может быть отправлена: заказ ещё не собран");
});
```

### Ограничения

* В нотификацию не передаётся `IOperationService`, поэтому изменять доставку в обработчике нельзя — нотификация предназначена только для проверки и отмены.
* `vm` может быть `null`, если отправка выполняется без участия пользователя (например, через `SendDelivery`). Проверяйте `vm` перед показом диалогов.
