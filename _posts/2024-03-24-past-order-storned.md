---
title: Нотификация о сторнировании PastOrder
layout: default
tags: v8
---

В Api V8 была добавлена новая нотификация [`PastOrderStorned`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_PastOrderStorned.htm), которая срабатывает после успешного сторнирования [`PastOrder`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_PastOrder.htm).

Нотификация передает информацию о сторнированном закрытом заказе в виде объекта нового добавленного класса  [`StornedPastOrderInfo`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_StornedPastOrderInfo.htm).
