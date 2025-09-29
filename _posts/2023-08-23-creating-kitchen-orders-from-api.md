---
title: Создание кухонных заказов из API
layout: default
tags: v8preview7 v8
---

В API V8Preview7 был добавлен метод [`CreateKitchenOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CreateKitchenOrder.htm), который позволяет создать кухонный заказ через API.

Данный кухонный заказ не будет содержать "официантской части", так что все фискальные операции должны быть проведены через внешние системы.

[`CreateKitchenOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CreateKitchenOrder.htm) позволяет создавать пустой кухонный заказ. Это может быть полезно для случаев, когда нужно перенести внешние данные между точками ([`AddOrUpdateKitchenOrderExternalData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddOrUpdateKitchenOrderExternalData.htm), [`TryGetKitchenOrderExternalDataByKey`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetKitchenOrderExternalDataByKey.htm)).

В кухонные заказы, созданные через API, нельзя добавлять блюда. Однако такой кухонный заказ можно очистить от всех блюд. Для этого был добавлен метод [`DeleteKitchenOrderItems`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_DeleteKitchenOrderItems.htm). Данный метод работает только для заказов, созданных через API.

Также, чтобы можно было проще отличить: стандартный ли это кухонный заказ или созданный через [`CreateKitchenOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CreateKitchenOrder.htm) в [`IKitchenOrder`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrder.htm) было добавлено поле [`IsExternal`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_IsExternal.htm).

