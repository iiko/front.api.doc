---
title: Порядок модификаторов блюда
layout: default
---

Начиная с версии API V7Preview6 появится возможность располагать простые и групповые модификаторы блюда в том же порядке, как это сделано в BackOffice.

Поле MenuIndex добавлено для типов [`ISimpleModifierBase`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Assortment_ISimpleModifierBase_MenuIndex.htm) и [`IGroupModifier`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Assortment_IGroupModifier_MenuIndex.htm).

Получить модификаторы блюда можно получить с помощью следующих методов:
- [`IOperationService.GetSimpleModifier`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetSimpleModifiers.htm)
- [`IOperationService.GetGroupModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetGroupModifiers.htm)

Если модификаторы блюда настроены с помощью схемы модификаторов (поле [`IProduct.Template`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Assortment_IProduct_Template.htm) не `null`), то следует использовать следующие методы:
- [`IOperationService.GetCommonSimpleModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetCommonSimpleModifiers.htm)
- [`IOperationService.GetCommonGroupModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetCommonGroupModifiers.htm)
- [`IOperationService.GetSplittableSimpleModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetSplittableSimpleModifiers.htm)
- [`IOperationService.GetSplittableGroupModifiers`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetSplittableGroupModifiers.htm)
