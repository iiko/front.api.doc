---
title: Закрытие оплаченного доставленного доставочного заказа из API
layout: default
---

Начиная с API V8Preview1 появилась возможность закрыть доставку прямо из плагина.

Курьерскую доставку можно закрыть вызовом метода
[`SetDeliveryCloseTime`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_SetDeliveryCloseTime.htm).
При этом доставочный заказ должен находиться в статусе "Закрыт"
([`IDeliveryOrder.Status`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IOrder_Status.htm) ==
[`OrderStatus.Closed`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_OrderStatus.htm)),
т.е. оплачен. Оплата доставочных заказов была сделана ранее, о чём мы писали в
[заметке](https://iiko.github.io/front.api.doc/2020/12/23/pay-deliveries.html).
Сама доставка должна находиться в статусе "Доставлена"
([`IDeliveryOrder.DeliveryStatus`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_DeliveryStatus.htm) ==
[`DeliveryStatus.Delivered`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Brd_DeliveryStatus.htm)).
Пометить доставку доставленной можно последовательным вызовом методов
[`SetDeliveryDelivered`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_SetDeliveryDelivered.htm) и
[`ChangeDeliveryActualDeliverTime`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeDeliveryActualDeliverTime.htm).

Метод принимает в качестве параметра время закрытия доставки `DateTime? closeTime`.
Если задать этот параметр, как `null`, метод изменит статус доставки из "Закрыта" обратно в "Доставлена".

Данный метод не работает для доставок самовывоза, поскольку для закрытия такой доставки нужно ее просто оплатить, о чем упоминалось в
[заметке](https://iiko.github.io/front.api.doc/2020/12/23/pay-deliveries.html),
а возврат такой доставки подразумевает сторнирование заказа (т.е. возврат оплат), которое пока не поддерживается из API.
