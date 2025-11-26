---
title: Пищевая ценность с учётом размера блюда
layout: default
tags: v9preview2 v9
---

В API V9Preview2 стало возможным узнать пищевую ценность ([`FoodValue`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_DataTransferObjects_FoodValue.htm)) конкретного блюда с учётом его размера.

Новое поле доступно у элементов обычного заказа:

- [`IOrderProductItem.FoodValue`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrderProductItem_FoodValue.htm)
- [`IOrderCompoundItemComponent.FoodValue`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrderCompoundItemComponent_FoodValue.htm)
- [`IOrderModifierItem.FoodValue`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrderModifierItem_FoodValue.htm)

У элементов кухонного заказа:

- [`IKitchenOrderProductItem.FoodValue`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderProductItem_FoodValue.htm)
- [`IKitchenOrderCompoundItemComponent.FoodValue`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderCompoundItemComponent_FoodValue.htm)
- [`IKitchenOrderModifierItem.FoodValue`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderModifierItem_FoodValue.htm)

А также у элементов заказов закрытых кассовых смен:

- [`PastOrderItem.FoodValue`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_PastOrderItem_FoodValue.htm)

В продукте соответствующие decimal-поля
([`IProduct.FoodValueCaloricity`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Assortment_IProduct_FoodValueCaloricity.htm),
[`IProduct.FoodValueCarbohydrate`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Assortment_IProduct_FoodValueCarbohydrate.htm),
[`IProduct.FoodValueFat`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Assortment_IProduct_FoodValueFat.htm),
[`IProduct.FoodValueProtein`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Assortment_IProduct_FoodValueProtein.htm))
заменены одним полем [`IProduct.FoodValue`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Assortment_IProduct_FoodValue.htm) указанного типа. В продукте пищевая ценность указана без учёта размера.
