---
title: IsPublic для ExternalData в кухонном заказе
layout: default
---

В Api V8Preview6 для кухонных заказов была добавлена возможность задавать публичность данных для [`ExternalData`](https://iiko.github.io/front.api.doc/2023/04/18/external-order-data-in-kitchen-orders.html).

Для этого в метод [`AddOrUpdateKitchenOrderExternalData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddOrUpdateKitchenOrderExternalData.htm) был добавлен дополнительный параметр isPublic.
