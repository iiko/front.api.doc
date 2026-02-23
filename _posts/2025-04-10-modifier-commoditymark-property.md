---
title: Свойства CommodityMark и Codes для модификаторов
layout: default
tags: V9Preview6 V9
---
Добавлены свойства [`CommodityMark`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrderModifierItem_CommodityMark.htm) и [`Codes`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrderModifierItem_Codes.htm) для модификаторов в [`IOrderModifierItem`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IOrderModifierItem.htm).

Свойство `CommodityMark` уже существовало в сущностях iikoFront, но не было доступно через API. Теперь оно проброшено в API, что позволяет плагинам работать с маркировкой товаров у модификаторов.

Дополнительно добавлено свойство `Codes` для работы с кодами маркировки модификаторов.

