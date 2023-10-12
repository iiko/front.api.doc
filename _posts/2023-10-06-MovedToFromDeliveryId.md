---
title: Отслеживание, из какой доставки образовалась, или в какую перешла текущая доставка при переносе на новую точку.
layout: default
---

Начиная с V8Preview7 в доставочный заказ [`IDeliveryOrder`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm) добавлены новые свойства, заполняющиеся при переносе доставки с точки на точку: идентификатор новой доставки, созданной для переноса текущей, и идентификатор группы новой доставки. Идентификатор старой доставки, из которой образовалась текущая доставка, и идентификатор группы старой доставки.

При переносе доставки с точки на точку старая доставка переходит в статус "Отменена", и на новой точке путем клонирования данных создается новая доставка. Поле [`MovedToDeliveryId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedToDeliveryId.htm) старой доставки заполняется идентификатором новой доставки. Поле [`MovedToTerminalGroupId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedToTerminalGroupId.htm) заполняется идентификатором группы, в которую текущуя доставка была перенесена.

У новой доставки в поле [`MovedFromDeliveryId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedFromDeliveryId.htm) сохраняется идентификатор старой доставки, а в поле [`MovedFromTerminalGroupId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedFromTerminalGroupId.htm) - идентификатор группы, из которой текущая доставка пришла. Если доставка не была перенесена на другую точку, все перечисленные свойства равны `null`.

Свойство `MovedToDeliveryId` существовало в доставочном заказе [`IDeliveryOrder`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm) и до V8Preview7, но под другим названием - [`MovedDeliveryId`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_MovedDeliveryId.htm). В V8Preview7 оно переименовано в `MovedToDeliveryId`.

Для изменения любого из четырех перечисленных выше полей доставки в API добавлен метод [`ChangeDeliveryMoveIds`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeDeliveryMoveIds.htm).