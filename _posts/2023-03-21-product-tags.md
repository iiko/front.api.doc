---
title: Выставлены пользовательские свойства (ProductTags) для продукта (IProduct)
layout: default
---

В API V8 были выставлены пользовательские свойства для продуктов [`IProduct.ProductTags`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Assortment_IProduct_ProductTags.htm), а так же появилась возможность получить все пользовательские свойства ([`IProductTag`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Assortment_IProductTag.htm)) и их группы ([`IProductTagGroup`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Assortment_IProductTagGroup.htm)) с помощью вызовов [`IOperationService.GetProductTags()`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetProductTags.htm) и [`IOperationService.GetProductTagGroups()`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetProductTagGroups.htm) соответственно.

Получение конкретных пользовательских свойств по идентификатору возможно с помощью вызовов [`IOperationService.GetProductTagById(Guid id)`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetProductTagById.htm), [`IOperationService.TryGetProductTagById(Guid id)`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetProductTagById.htm).

Получение конкретных групп пользовательских свойств [`IOperationService.GetProductTagGroupById(Guid id)`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetProductTagGroupById.htm), [`IOperationService.TryGetProductTagGroupById(Guid id)`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetProductTagGroupById.htm).

Получение группы для конкретного пользовательского свойства доступно по свойству [`IProductTag.Group`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Assortment_IProductTag_Group.htm).