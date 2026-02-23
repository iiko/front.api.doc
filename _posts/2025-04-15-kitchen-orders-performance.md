---
title: Оптимизация методов работы с кухонными заказами
layout: default
tags: v9preview6 v9
---
Оптимизированы методы работы с кухонными заказами в [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm). Вместо передачи полных моделей объектов теперь используются только идентификаторы, что значительно сокращает время передачи данных.

Оптимизированы следующие методы:

- [`AddOrUpdateKitchenOrderExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_AddOrUpdateKitchenOrderExternalData.htm) — теперь принимает ID кухонного заказа вместо полной модели
- [`SetKitchenOrderProcessingStatus`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_SetKitchenOrderProcessingStatus.htm) — использует ID вместо объекта [`IKitchenOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrder.htm)
- [`TryGetKitchenOrderExternalDataByKey`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_TryGetKitchenOrderExternalDataByKey.htm) — оптимизирован для работы по ID
- [`ChangeKitchenOrderItemsProcessingStatus`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_ChangeKitchenOrderItemsProcessingStatus.htm) — уменьшено количество передаваемых данных

Это уменьшает количество вызовов API и повышает общую производительность, особенно заметно в плагинах типа KDS Балансира, где часто выполняются операции с кухонными заказами.

