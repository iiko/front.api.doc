---
title: Запрет переноса заказа на стол другой группы
layout: default
tags: v9
---

Добавлена защита от переноса заказа на стол, принадлежащий другой группе терминалов, через API.

## Проблема

При использовании метода [`ChangeOrderTables`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_ChangeOrderTables.htm) можно было перенести заказ на стол другой группы терминалов, что вызывало неожиданные побочные эффекты и проблемы синхронизации данных между группами.

```csharp
var auth = PluginContext.Operations.GetDefaultCredentials();
var group = PluginContext.Operations.GetHostTerminalsGroup();
var table = PluginContext.Operations.GetTables().First(t => !t.RestaurantSection.TerminalsGroup.Equals(group));
PluginContext.Operations.ChangeOrderTables(order, new[] { table }, auth);
```

## Решение

Теперь при попытке переноса заказа на стол другой группы через API генерируется исключение. Заказ можно переносить только на столы в пределах текущей группы терминалов.

Это предотвращает некорректные операции и обеспечивает целостность данных при работе с несколькими группами терминалов.

## См. также

- [GetTables](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetTables.htm)
- [GetHostTerminalsGroup](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetHostTerminalsGroup.htm)
