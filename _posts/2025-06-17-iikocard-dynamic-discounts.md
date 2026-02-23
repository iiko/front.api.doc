---
title: Изменение динамических скидок iikoCard через API
layout: default
tags: V9Preview7 V9
---
Добавлена возможность задавать и изменять динамические скидки iikoCard в заказах через API.

Новый метод [`ChangeOrderIikoCard5DynamicDiscounts`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_ChangeOrderIikoCard5DynamicDiscounts.htm) позволяет плагинам изменять динамические скидки для iikoCard в заказах.

Ранее свойство [`DynamicDiscounts`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IIikoCard51OrderInfo_DynamicDiscounts.htm) было доступно только для чтения, и не было способа изменить эти скидки программно. Это дополняет существующие методы, такие как [`ChangeOrderAppliedIikoCard5ManualConditions`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_ChangeOrderAppliedIikoCard5ManualConditions.htm) и [`ChangeOrderIikoCard5Coupon`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_ChangeOrderIikoCard5Coupon.htm).
