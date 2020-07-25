---
title: Стало возможным сопоставить возвращённый и новый заказы
layout: default
---

В V7Preview4 мы переименовали событие возврата заказа в 
[`OrderStorned`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_OrderStorned.htm), 
добавив в него новый аргумент `Guid newOrderId` — 
идентификатор нового заказа, который является копией возвращённого, и с которым будет происходить дальнейшая работа. 
В сам же заказ добавили новое поле 
[`StornedOrderId`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IOrder_StornedOrderId.htm) — 
идентификатор того самого возвращённого заказа, с которого текущий заказ был скопирован во время операции возврата (сторнирования). 
Данное поле не заполняется, если заказ не был возвращён.