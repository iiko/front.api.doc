---
title: ExternalData в кухонном заказе
layout: default
tags: v8
---

В Api V8 была добавлена возможность записывать ExternalData для кухонных заказов. Это позволит хранить и передавать необходимую дополнительную информацию, связанную с заказом. 

Для этого в Api было создано 3 метода:

- [`AddOrUpdateKitchenOrderExternalData(IKitchenOrder order, string key, string value)`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddOrUpdateKitchenOrderExternalData.htm) - Добавление в кухонный заказ __order__ информацию __value__ с ключом __key__;
- [`TryGetKitchenOrderExternalDataByKey(IKitchenOrder order, string key`](https://iiko.github.io/front.api.sdk/v8/search.html?SearchText=AddOrUpdateKitchenOrderExternalData) - Попытка получить информацию ExternalData из заказа __order__ с ключом __key__;
- [`DeleteKitchenOrderExternalData(IKitchenOrder order, string key)`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetKitchenOrderExternalDataByKey.htm) - Удаление записи  из заказа __order__ с ключом __key__.