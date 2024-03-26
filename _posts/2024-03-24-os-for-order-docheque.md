---
title: Возможность работать с заказом во время операции DoCheque в ICashRegister
layout: default
tags: v9preview1 v9
---

В API V9Preview1 появилась возможность работать с заказом во время операции [`DoCheque`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoCheque.htm), используя [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm).

Для изменения каких-либо данных заказа, например, для добавления внешних данных с помощью [`AddOrderExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderExternalData.htm), необходимо воспользоваться [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm), являющийся входным аргументом [`DoCheque`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoCheque.htm).

Так как заказ уже находится в [`статусе`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_OrderStatus.htm) `Bill` во время выполнения [`DoCheque`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoCheque.htm), то большинство операций недоступно.