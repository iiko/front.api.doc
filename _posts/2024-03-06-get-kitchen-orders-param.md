---
title: Опциональная выгрузка внешних данных плагинов при получении всех кухонных заказов
layout: default
---

В API V9Preview1 добавлен опциональный параметр для метода [`GetKitchenOrders`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetKitchenOrders.htm) принимает значение `true`, либо `false`.
Если передан параметр `true`, вернутся все кухонные заказы с заполненным полем [`IKitchenOrder.ExternalData`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_ExternalData.htm) - все внешние данные всех плагинов. В случае, если передан параметр `false` или не передано ничего, будут возвращены кухонные заказы с полем ExternalData равным `null`.
Если поле [`IKitchenOrder.ExternalData`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_ExternalData.htm) `null`, то для получения внешних данных плагинов, записанные в кухонный заказ, нужно будет воспользоваться методом [`TryGetKitchenOrderExternalDataByKey`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_TryGetKitchenOrderExternalDataByKey.htm).