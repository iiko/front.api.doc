---
title: Удалено свойство IRestaurantSection.Tables
layout: default
tags: v10 v10preview1
---

Начиная с API V10Preview1 из [`IRestaurantSection`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection.htm) удалено свойство `Tables`.

Отделение ссылалось на свои столы, а стол — на своё отделение (`ITable.RestaurantSection`). Из-за такой циклической ссылки объекты нельзя было сериализовать без дополнительных ухищрений, а практической необходимости в ней нет.

Чтобы получить столы отделения, используйте новый метод [`GetRestaurantSectionTables`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetRestaurantSectionTables.htm) в `IOperationService`:

```cs
IReadOnlyList<ITable> GetRestaurantSectionTables(IRestaurantSection section);
```

Было:

```cs
var tables = section.Tables;
```

Стало:

```cs
var tables = PluginContext.Operations.GetRestaurantSectionTables(section);
```

Как и раньше, метод возвращает в том числе удалённые столы.

Свойство `ITable.RestaurantSection` сохранено. В V9 и более ранних версиях API свойство `IRestaurantSection.Tables` по-прежнему доступно.
