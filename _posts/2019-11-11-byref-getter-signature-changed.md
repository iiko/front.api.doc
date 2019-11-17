---
title: Изменилась сигнатура extension-методов для получения связанных/дочерних объектов
layout: default
---
В `PluginContext.Operations` есть методы для получения связанных объектов — например, получить родительскую группу продукта можно с помощью [`PluginContext.Operations.TryGetParentByProduct(product)`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_TryGetParentByProduct.htm). Для удобства вызова эти методы имеют парные extension-методы ко входным аргументам (например, `product.TryGetParent(PluginContext.Operations)`). Начиная с V7 такой вызов становится проще, не надо указывать `PluginContext.Operations`: [`product.TryGetParent()`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_TryGetParent.htm).

Изменение затронуло методы:

* [`TryGetSectionSchema`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Organization_Sections_RestaurantSectionExtensions_TryGetSectionSchema.htm)
* [`TryGetParent`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_TryGetParent.htm)/[`TryGetParent`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductGroupExtensions_TryGetParent.htm)
* [`GetSimpleModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_GetSimpleModifiers.htm)/[`TryGetSimpleModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_TryGetSimpleModifiers.htm)
* [`GetGroupModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_GetGroupModifiers.htm)/[`TryGetGroupModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_TryGetGroupModifiers.htm)
* [`GetIncludedInMenuSections`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_GetIncludedInMenuSections.htm)/[`TryGetIncludedInMenuSections`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_TryGetIncludedInMenuSections.htm)
* [`GetDisabledSizes`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_GetDisabledSizes.htm)/[`TryGetDisabledSizes`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_TryGetDisabledSizes.htm)
* [`GetTemplatedModifiersParams`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_GetTemplatedModifiersParams.htm)/[`TryGetTemplatedModifiersParams`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductExtensions_TryGetTemplatedModifiersParams.htm)
* [`GetChildProducts`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductGroupExtensions_GetChildProducts.htm)/[`TryGetChildProducts`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductGroupExtensions_TryGetChildProducts.htm)
* [`GetChildGroups`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductGroupExtensions_GetChildGroups.htm)/[`TryGetChildGroups`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_ProductGroupExtensions_TryGetChildGroups.htm)
* [`GetCommonSimpleModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_CompoundItemTemplateExtensions_GetCommonSimpleModifiers.htm)/[`TryGetCommonSimpleModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_CompoundItemTemplateExtensions_TryGetCommonSimpleModifiers.htm)
* [`GetCommonGroupModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_CompoundItemTemplateExtensions_GetCommonGroupModifiers.htm)/[`TryGetCommonGroupModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_CompoundItemTemplateExtensions_TryGetCommonGroupModifiers.htm)
* [`GetSplittableSimpleModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_CompoundItemTemplateExtensions_GetSplittableSimpleModifiers.htm)/[`TryGetSplittableSimpleModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_CompoundItemTemplateExtensions_TryGetSplittableSimpleModifiers.htm)
* [`GetSplittableGroupModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_CompoundItemTemplateExtensions_GetSplittableGroupModifiers.htm)/[`TryGetSplittableGroupModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Assortment_CompoundItemTemplateExtensions_TryGetSplittableGroupModifiers.htm)

Кроме того, удалены из некоторых Get/TryGet-пар удалены Get-методы, которые могли возвращать `null`:

* `GetSectionSchema(IRestaurantSection)`
* `GetParent(IProduct)`
* `GetParent(IProductGroup)`