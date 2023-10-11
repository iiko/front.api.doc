---
title: Отслеживание, из какой доставки образовалась, или в какую перешла доставка при переносе на новую точку.
layout: default
---

Начиная с V8Preview7 в доставочный заказ [`IDeliveryOrder`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm добавлены новые свойства, заполняющиеся при переносе доставки с точки на точку: идентификатор новой доставки, созданной для переноса текущей на новую точку, и идентификатор группы новой доставки. Идентификатор старой доставки, из которой образовалась текущая доставка, и идентификатор группы старой доставки.

При переносе доставки с точки на точку старая доставка переходит в статус "Отменена", и на новой точке путем клонирования данных создается новая доставка. Поле [`MovedToDeliveryId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedToDeliveryId.htm) старой доставки заполняется идентификатором новой доставки. В поле [`MovedToTerminalGroupId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedToTerminalGroupId.htm) сохраняется id группы, в которую текущуя доставка была перенесена.

У новой доставки поле [`MovedFromDeliveryId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedFromDeliveryId.htm) заполняется идентификатором старой доставки, а поле [`MovedFromTerminalGroupId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedFromTerminalGroupId.htm) - идентификатором группы, из которой текущая доставка пришла.

Если доставка не была перенесена на другую точку, все перечисленные свойства равны null.

Свойство MovedToDeliveryId существовало и до V8Preview7, но под другим названием: [`MovedDeliveryId`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedDeliveryId.htm). С версии V8Preview7 оно переименовано.

Для изменения любого из 4 перечисленных выше полей доставки в API добавлен метод ChangeDeliveryMoveIds [`ChangeDeliveryMoveIds`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeDeliveryMoveIds.htm),