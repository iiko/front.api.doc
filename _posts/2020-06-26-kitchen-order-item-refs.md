---
title: Добавлена возможность сопоставить блюда обычного и кухонного заказов
layout: default
---

В V7Preview3 для блюд и модификаторов в кухонном заказе добавлены ссылки на соответствующие блюда и модификаторы в исходном заказе.

* [`IKitchenOrderCookingItem.BaseOrderItemId`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderCookingItem_BaseOrderItemId.htm) — соответствует [`IOrderCookingItem.Id`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IOrderCookingItem.htm),
* [`IKitchenOrderModifierItem.BaseOrderModifierId`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderModifierItem_BaseOrderModifierId.htm) — соответствует [`IOrderModifierItem.Id`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IOrderModifierItem.htm),
* [`IKitchenOrder.BaseOrderId`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_BaseOrderId.htm) — соответствует [`IOrder.Id`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IOrder.htm).