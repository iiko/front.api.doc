---
title: Поддержка мультикупонов в API v9
layout: default
tags: v9
---

Во Front появилась возможность привязывать несколько купонов к заказу (мультикупоны). Теперь эта функциональность доступна и через API v9.

API V9 теперь поддерживает работу с несколькими купонами через методы [`IOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IOrder.htm):

* Хранение и передача списка купонов
* Добавление купонов в заказ
* Удаление купонов из заказа

### См. также

* [`IOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IOrder.htm)
* [Типы скидок и промоакции](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Assortment_IDiscount.htm)
* [Работа с доставками](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm)
