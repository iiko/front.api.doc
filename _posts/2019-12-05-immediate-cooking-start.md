---
title: Добавлена возможность узнать, надо ли запускать приготовление при добавлении блюда в заказ 
layout: default
---

Начиная с V7 для продукта [`IProduct`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Assortment_IProduct.htm) доступно свойство [`ImmediateCookingStart`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Assortment_IProduct_ImmediateCookingStart.htm), показывающее, следует ли запускать услугу или начинать приготовление блюда сразу после добавления в заказ.

Этому свойству в iikoOffice соответствует настройка «Печатать при добавлении» в карточке товара.
Эта настройка общая и для блюд ([`IOrderCookingItem`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IOrderCookingItem.htm)), и для повременных услуг ([`IOrderServiceItem`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IOrderServiceItem.htm)), но семантика отличается: 

* для блюда — надо ли запустить приготовление блюда сразу после добавления в заказ ([`PrintOrderItems`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_PrintOrderItems.htm)),
* для повременных услуг — надо ли запустить услугу сразу после добавления в заказ ([`StartService`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_StartService.htm)).