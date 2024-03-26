---
title: Расширение поиска по PastOrders
layout: default
---

В Api V8Preview7 были модифицированы методы [`GetPastOrdersBySum`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPastOrdersBySum.htm) и [`GetPastOrders`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPastOrders.htm).

Для [`GetPastOrdersBySum`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPastOrdersBySum.htm) параметр `paymentSum` был заменен на два параметра `minPaymentSum` и `maxPaymentSum`, что позволяет задавать отрезок цен закрытых заказов.

Для [`GetPastOrders`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPastOrders.htm) был добавлен новый флаг `isEndOfOrderNumber`. В случае его состояния `True` - метод вернет список из [`закрытых заказов`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_PastOrder.htm), среди которых будут заказы оканчивающиеся на значение, заданное в orderNumber. К примеру за все время было закрыто 400 заказов, запрос -  `GetPastOrders(12, null, null, true)`, тогда метод вернет список заказов с номерами 12, 112, 212, 312, но не 121.

