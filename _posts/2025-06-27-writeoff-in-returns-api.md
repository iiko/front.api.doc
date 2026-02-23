---
title: Уведомления при списании в возвратах
layout: default
tags: v9
---
Добавлены новые уведомления для обработки возвратов заказов через API. Это позволяет плагинам реагировать на возврат позиций и выполнять необходимые действия во внешних системах или запретить возврат.

Добавлены следующие уведомления в [`INotificationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_INotificationService.htm):

- [`PartialOrderItemsRemovalTypeSelected`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_PartialOrderItemsRemovalTypeSelected.htm) — вызывается после выбора причины списания при частичном возврате
- [`RemovalTypeSelected`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_RemovalTypeSelected.htm) — вызывается после выбора причины списания при полном возврате

```csharp
INotification<(Guid orderId, IReadOnlyCollection<Guid> returnOrderItemIds, Guid removalTypeId)> PartialOrderItemsRemovalTypeSelected { get; }

INotification<(Guid orderId, Guid removalTypeId)> RemovalTypeSelected { get; }
```

Плагины могут подписаться на эти уведомления и при необходимости отменить дальнейшее выполнение операции возврата, если обработка во внешней системе завершилась с ошибкой. Это особенно важно для плагинов работы с маркированным товаром (например, алкоголь), где требуется отменить списания во внешних системах при возврате.
