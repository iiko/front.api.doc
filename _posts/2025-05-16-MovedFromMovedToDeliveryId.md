---
title: Расширение информации о перенесенном доставочном заказе
layout: default
tags: v8preview5 v8
---

Начиная с V8Preview5 при переносе доставочного заказа на новую точку можно отследить, из какой группы и в какую был перенесен текущий доставочный заказ. А также теперь известен заказ на старой точке, который стал источником текущего.

В дополнение к имеющимуся свойству [`MovedToDeliveryId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedToDeliveryId.htm) в доставочном заказе [`IDeliveryOrder`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm) появились новые поля
- [`MovedFromDeliveryId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedFromDeliveryId.htm) - прошлый идентификатор доставочного заказа до переноса на новую точку
- [`MovedFromTerminalGroupId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedFromTerminalGroupId.htm) - идентификатор группы, которой принадлежала прошлая точка доставки
- [`MovedToTerminalGroupId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedToTerminalGroupId.htm) - идентификатор группы, которой принадлежит текущая точка доставки

По этим данным можно легко определить цепочку перемещения доставочного заказа при ее переносе на новую точку. 

Для изменения значений полей, содержащих информацию о переносе доставочного заказа, взамен [`IEditSession.ChangeDeliveryMovedId`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_ChangeDeliveryMovedId.htm) добавлен новый метод
[`IEditSession.ChangeDeliveryMoveIds`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeDeliveryMoveIds.htm), 
позволяющий отредактировать любое из свойств `MovedFromDeliveryId`, `MovedFromTerminalGroupId`, `MovedToDeliveryId`, `MovedToTerminalGroupId`.
Имеющийся ранее метод `IEditSession.ChangeDeliveryMovedId` удален.