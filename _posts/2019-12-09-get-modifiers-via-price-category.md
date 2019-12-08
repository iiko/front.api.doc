---
title: Добавлена возможность узнать список доступных модификаторов блюда с учётом ценовых категорий
layout: default
---

Начиная с V7 появится возможность узнать список доступных модификаторов с учётом ценовых категорий для блюда со схемой модификаторов и без. 
Это позволит отображать состав модификаторов в меню в заведениях, работающих с ценовыми категориями и приказами об изменении прейскуранта, когда тот или иной модификатор в составе блюда может быть доступен или недоступен в зависимости от назначенной [заказу](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IOrder_PriceCategory.htm) или [отделению](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection_DefaultPriceCategory.htm) ценовой категории.

Указанные ниже методы в качестве аргумента стали принимать [IPriceCategory](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IPriceCategory.htm). 
Параметр не является обязательным, т.е. можно передать `null`, если важно знать доступность модификаторов без учёта ценовой категории.

Получение модификаторов для блюда без схемы модификаторов:

- Простые модификаторы ([IProduct.GetSimpleModifiers](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_OperationArgumentExtensions_GetSimpleModifiers.htm) 
или [IOperationService.GetSimpleModifiersByProduct](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetSimpleModifiersByProduct.htm))
- Групповые модификаторы ([IProduct.GetGroupModifiers](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_OperationArgumentExtensions_GetGroupModifiers.htm) 
или [IOperationService.GetGroupModifiersByProduct](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetGroupModifiersByProduct.htm))

Получение модификаторов для блюда со схемой модификаторов:

- Простые общие модификаторы ([ICompoundItemTemplate.GetCommonSimpleModifiers](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_OperationArgumentExtensions_GetCommonSimpleModifiers.htm) 
или [IOperationService.GetCommonSimpleModifiersByCompoundItemTemplate](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetCommonSimpleModifiersByCompoundItemTemplate.htm))
- Простые делимые модификаторы ([ICompoundItemTemplate.GetSplittableSimpleModifiers](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_OperationArgumentExtensions_GetSplittableSimpleModifiers.htm) 
или [IOperationService.GetSplittableSimpleModifiersByCompoundItemTemplate](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetSplittableSimpleModifiersByCompoundItemTemplate.htm))
- Групповые общие модификаторы ([ICompoundItemTemplate.GetCommonGroupModifiers](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_OperationArgumentExtensions_GetCommonGroupModifiers.htm) 
или [IOperationService.GetCommonGroupModifiersByCompoundItemTemplate](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetCommonGroupModifiersByCompoundItemTemplate.htm))
- Групповые делимые модификаторы ([ICompoundItemTemplate.GetSplittableGroupModifiers](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_OperationArgumentExtensions_GetSplittableGroupModifiers.htm) 
или [IOperationService.GetSplittableGroupModifiersByCompoundItemTemplate](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetSplittableGroupModifiersByCompoundItemTemplate.htm))
