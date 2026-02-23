---
title: Номер фискальной секции в API
layout: default
tags: v8
---

В API добавлена возможность получения номера фискальной секции блюда в произвольный момент. Ранее номер был доступен только при получении [`ChequeTask`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_Tasks_ChequeTask.htm).

Добавлены свойства:

* [`FiscalSectionMap`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Organization_ITerminalGroup_FiscalSectionMap.htm) в [`ITerminalGroup`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Organization_ITerminalGroup.htm) - карта соответствия типов мест приготовления и номеров секций ФР
* [`CookingPlaceType`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Assortment_IProduct_CookingPlaceType.htm) в [`IProduct`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Assortment_IProduct.htm) - тип места приготовления для продукта  
* [`Kitchen`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrderServiceItem_Kitchen.htm) в [`IOrderServiceItem`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IOrderServiceItem.htm) - кухня, на которой готовится позиция заказа

### Использование

```csharp
var terminal = PluginContext.Operations.GetHostTerminal();
var terminalGroup = PluginContext.Operations.GetHostTerminalGroup();

var orderItem = order.Items.OfType<IOrderProductItem>().First();
var cookingPlaceType = orderItem.Product.CookingPlaceType;
var kitchen = orderItem.Kitchen;

// Получение номера фискальной секции
var fiscalSection = terminalGroup.FiscalSectionMap[cookingPlaceType];
```

### См. также

* [`ITerminalGroup`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Organization_ITerminalGroup.htm)
* [`IProduct`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Assortment_IProduct.htm)
* [`IOrderServiceItem`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_IOrderServiceItem.htm)
* [`ChequeSale`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_Tasks_ChequeSale.htm)
