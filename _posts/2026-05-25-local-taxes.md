---
title: Получение данных об местных налогах, входящих в заказ.
layout: default
tags: v10preview1
---
Начиная с API V10Preview1 заказ содержит информацию о местных налогах.

В свеойстве [`Itens`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Orders_IOrder_Items.htm) заказа [`IOrder`](https://iiko.github.io/front.api.sdk/V10/html/T_Resto_Front_Api_Data_Orders_IOrder.htm) добавлены местные налоги - список [`ILocalTaxInfo`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Orders_ILocalTaxInfo.htm).
Местные налоги содержатся в следующих интерфейсах элементов заказа:
- [`IOrderProductItem`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Orders_IOrderProductItem.htm)
- [`IOrderServiceItem`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Orders_IOrderServiceItem.htm)
- [`IOrderCompoundItemComponent`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Orders_IOrderCompoundItemComponent.htm)
- [`IOrderModifierItem`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Orders_IOrderModifierItem.htm)
- [`IRemovedOrderItem`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Orders_IRemovedOrderItem.htm)
