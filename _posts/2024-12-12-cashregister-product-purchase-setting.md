---
title: Добавлена настройка покупки товара на кассе
layout: default
tags: v9preview5 v9
---
В интерфейс [`ICashRegister`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Devices_ICashRegister.htm) добавлено свойство [`CanBuy`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_ICashRegister_CanBuy.htm), показывающее, поддерживает ли касса операцию покупки товара.

Это полезно для плагинов, которые работают с покупкой товаров, в том числе с отрицательной ценой, через кассовое оборудование.


