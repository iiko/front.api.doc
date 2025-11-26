---
title: Расширение KitchenOrderDto
layout: default
tags: v9preview1 v9
---

В API V9Preview1 был расширен класс [`KitchenOrderDto`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Kitchen_KitchenOrderDto.htm) с целью добиться наиболее точной настройки [создаваемого кухонного заказа через API](https://iiko.github.io/front.api.doc/2023/08/23/creating-kitchen-orders-from-api.html). 

Были добавлены следующие поля:

- [`ExternalNumber`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_KitchenOrderDto_ExternalNumber.htm) - внешний номер заказа, аналог [`ExternalNumber`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrder_ExternalNumber.htm) официантского заказа. 
- [`TabName`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_KitchenOrderDto_TabName.htm) - название таба, аналог [`TabName`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrder_TabName.htm) официантского заказа.
- [`OriginName`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_KitchenOrderDto_OriginName.htm) - название агрегатора, аналог [`OriginName`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrder_OriginName.htm) официантского заказа.
- [`CookingPriority`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_KitchenOrderDto_CookingPriority.htm) - отвечает за порядок отображения заказов на кухонном экране. Чем больше значение - тем выше приоритет заказа и его позиция в списке.
- [`IsTopCookingPriority`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_KitchenOrderDto_IsTopCookingPriority.htm) - особое значение для приоритета - такие заказы имеет всегда высшие позиции в списке заказов, а также выделяются особым цветом. 

Все добавленные поля отображаются или влияют на отображение заказа на кухонном экране. Посмотреть внешний вид можно по следующей [`ссылке`](https://ru.iiko.help/articles/#!iikofront-8-8/topic-33).



