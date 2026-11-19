---
title: Облегчённая нотификация перед печатью пречека (BeforeOrderBillWithOrderId)
layout: default
tags: v10 v10preview1
---

Начиная с API V10Preview1 в [`INotificationService`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_INotificationService.htm) добавлена нотификация [`BeforeOrderBillWithOrderId`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_INotificationService_BeforeOrderBillWithOrderId.htm):

```cs
INotification<(Guid orderId, IUser user, IOperationService os, IViewManager vm)> BeforeOrderBillWithOrderId { get; }
```

Нотификация аналогична [`BeforeOrderBill`]({{ site.baseurl }}{% post_url 2020-12-23-edit-order-before-bill %}), но вместо объекта заказа `IOrder` передаёт только его идентификатор. Для больших заказов подготовка и передача `IOrder` в плагин занимает заметное время, поэтому новая нотификация срабатывает быстрее. Если плагину нужны данные заказа, их можно получить по `orderId`, например методом `GetOrderById`.

### Поведение

* Нотификация вызывается в тех же сценариях, что и `BeforeOrderBill`, в том числе при [повторной печати пречека]({{ site.baseurl }}{% post_url 2021-07-01-repeat-before-order-bill %}).
* Сначала вызываются все обработчики `BeforeOrderBill`, затем все обработчики `BeforeOrderBillWithOrderId`.
* С помощью переданного `IOperationService` можно редактировать заказ: после выполнения обработчиков заказ перечитывается, а при первой печати пречека пересчитываются цены и скидки.
* Чтобы отменить печать пречека, выбросьте `OperationCanceledException`.
* `vm` может быть `null`, если печать пречека выполняется без участия пользователя.

Если плагину не нужен весь заказ, рекомендуется использовать `BeforeOrderBillWithOrderId` вместо `BeforeOrderBill`.
