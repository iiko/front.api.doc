---
title: Комплексное изменение ExternalData у кухонного заказа
layout: default
tags: v9preview1 v9
---

В Api V9Preview1 были добавлены две новые операции - [`ComplexAddOrUpdateKitchenOrderAndItemsExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_ComplexAddOrUpdateKitchenOrderAndItemsExternalData.htm) и [`ComplexDeleteKitchenOrderAndItemsExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_ComplexDeleteKitchenOrderAndItemsExternalData.htm).

[`ComplexAddOrUpdateKitchenOrderAndItemsExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_ComplexAddOrUpdateKitchenOrderAndItemsExternalData.htm) - позволяет массового добавить/обновить `ExternalData` у кухонного заказа и всех его позиций.

[`ComplexDeleteKitchenOrderAndItemsExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_ComplexDeleteKitchenOrderAndItemsExternalData.htm) - позволяет единовременно удалить все ненужные `ExternalData` у кухонного заказа и всех его позиций.

Эти операции будут особенно полезны в случае активного пользования внешними данными: операции только единожды генерируют нотификацию [`KitchenOrderChanged`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_KitchenOrderChanged.htm), а также выполняются быстрее, чем множественного использование [`AddOrUpdateKitchenOrderExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_AddOrUpdateKitchenOrderExternalData.htm) / [`AddOrUpdateKitchenOrderItemExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_AddOrUpdateKitchenOrderItemExternalData.htm) / [`DeleteKitchenOrderExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_DeleteKitchenOrderExternalData.htm) / [`DeleteKitchenOrderItemExternalData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_DeleteKitchenOrderItemExternalData.htm).
