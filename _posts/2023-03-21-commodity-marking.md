---
title: Передача марки товара через API
layout: default
tags: v8
---

Добавлена возможность передавать марку товара при создании заказа через API. Марка доступна через поле [`ChequeSale.Ffd12`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_Tasks_ChequeSale_Ffd12.htm).

Ограничения:

* Марка передаётся только для формата ФФД 1.2
* Не реализовано дробное количество маркированной продукции

### См. также

* [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm)
* [`ChequeSale.Ffd12`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_Tasks_ChequeSale_Ffd12.htm)
* [Работа с маркированной продукцией](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IOrderProductItem.htm)
* [Создание заказов через API](https://iiko.github.io/front.api.sdk/v9/html/Overload_Resto_Front_Api_IOperationService_CreateOrder.htm)
