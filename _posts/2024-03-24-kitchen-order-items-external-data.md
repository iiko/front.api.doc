---
title: ExternalData для позиций кухонного заказа
layout: default
tags: v8
---

В Api V8 были расширены возможности задания внешней информации (`ExternalData`) для кухонного заказа. Теперь ее можно давать и для позиций заказа.

Для этого было добавлено следующие операции:

- [`AddOrUpdateKitchenOrderItemExternalData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddOrUpdateKitchenOrderItemExternalData.htm) - добавление или обновление ExternalData для позиции заказа
- [`DeleteKitchenOrderItemExternalData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_DeleteKitchenOrderItemExternalData.htm) - удаление ExternalData у позиции заказа по заданному ключу
- [`TryGetKitchenOrderItemExternalDataByKey`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetKitchenOrderItemExternalDataByKey.htm) - получить ExternalData у позиции  заказа по заданному ключу
- [`GetKitchenOrderItemAllExternalData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetKitchenOrderItemAllExternalData.htm) - получить всю ExternalData у позиции заказа

Стоит отметить, что для [`OLAP Отчет по продажам`](https://ru.iiko.help/articles/iikooffice-8-7/topic-109) для позиций кухонного заказа в ExternalData (поле `Публичные данные плагинов о приготовлении`) будет также записывать ExternalData заказа. В случае совпадений ключей приоритет имеет ExternalData позиции.
