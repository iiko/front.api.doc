---
title: Опциональная выгрузка внешних данных плагинов при получении всех кухонных заказов
layout: default
tags: v9preview1
---

В API V9Preview1 для метода [`GetKitchenOrders`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetKitchenOrders.htm) добавлен опциональный параметр _includeExternalData_, что позволяет выгрузить внешние данные плагинов при получении кухонных заказов.

Если в параметр _includeExternalData_ передано значение `true`, то будут возвращены все кухонные заказы с заполненным полем [`IKitchenOrder.ExternalData`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_ExternalData.htm) — все внешние данные всех плагинов.

Если при получении всех кухонных заказов внешние данные плагинов не были запрошены, то для конкретного кухонного заказа их всегда можно получить методом [`TryGetKitchenOrderExternalDataByKey`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_TryGetKitchenOrderExternalDataByKey.htm).