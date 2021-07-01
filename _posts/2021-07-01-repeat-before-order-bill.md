---
title: BeforeOrderBill и повторный пречек
layout: default
---

В версии API V7Preview7 уведомление об операции пречека заказа
[`BeforeOrderBill`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_BeforeOrderBill.htm)
будет генерироваться и при повторном пречеке.

Если нужно оставить старое поведение и игнорировать повторные пречеки,
то в случае перевода плагина на указанную или более новую версию API нужно будет отфильтровывать заказы по статусу в обработчике уведомления:

```cs
PluginContext.Notifications.BeforeOrderBill.Subscribe(x =>
{
    if (x.order.Status != OrderStatus.New)
        return;

    // Обработка оригинального пречека
});
```