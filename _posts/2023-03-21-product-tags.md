---
title: Выставлены пользовательские свойства (ProductTags) для продукта (IProduct)
layout: default
---

В API V8 были выставлены пользовательские свойства для продуктов [`IProduct.ProductTags`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Assortment_IProduct_ProductTags.htm), а так же появилась возможность получить все пользовательские свойства и их группы с помощью вызовов [`GetProductTags`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetProductTags.htm) и [`GetProductTagGroups`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetProductTagGroups.htm) соответственно.

Получение конкретных пользовательских свойств по идентификатору [`GetProductTagById`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetProductTagById.htm), [`TryGetProductTagById`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetProductTagById.htm).

Получение конкретных групп пользовательских свойств по идентификатору [`GetProductTagGroupById`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetProductTagGroupById.htm), [`TryGetProductTagGroupById`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetProductTagGroupById.htm).

Получение группы для конкретного пользовательского свойства доступно по свойству [`IProductTag.Group`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Assortment_IProductTag_Group.htm).