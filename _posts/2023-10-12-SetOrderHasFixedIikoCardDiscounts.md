---
title: Возможность изменять параметр hasFixedIikoCardDiscounts
layout: default
---

Начиная с API V8 мы переименовали параметр hasIikoCardDiscounts методов [`CreateOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_CreateOrder.htm),
[`CreateDeliveryOrder`](https://iiko.github.io/front.api.sdk/v8/html/Overload_Resto_Front_Api_Editors_IEditSession_CreateDeliveryOrder.htm) в hasFixedIikoCardDiscounts, а также добавили возможность изменять его.

Для этого в API добавлен новый метод [`SetOrderHasFixedIikoCardDiscounts`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_SetOrderHasFixedIikoCardDiscounts.htm), 
с помощью которого можно изменять значение [`HasFixedDiscounts`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IIikoCard51OrderInfo_HasFixedDiscounts.htm) как у доставочного, так и обычного заказа.
