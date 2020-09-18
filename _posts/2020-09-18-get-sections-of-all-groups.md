---
title: Добавлена возможность получить список имеющихся групп и список отделений каждой группы.
layout: default
---

По мотивам заявки [`#143`](https://github.com/iiko/front.api.sdk/issues/143). В V7Preview4 появилась возможность получить список всех групп, а также список отделений любой, не только текущей, группы. 
Добавлены методы:
- [`GetTerminalsGroups`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetTerminalsGroups.htm) - возвращает все имеющиеся группы.
- [`GetRestaurantSectionsByTerminalsGroup(ITerminalsGroup terminalsGroup)`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetRestaurantSectionsByTerminalsGroup.htm) - возвращает отделения указанной в аргументах группы.

Кроме того, у отделения появилась ссылка на родительскую группу:
[`ITerminalsGroup IRestaurantSection.TerminalsGroup`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection_TerminalsGroup.htm)

Метода получения отделений текущей группы `GetRestaurantSections` в V7Preview4 не будет. Вместо него можно пользоваться
```cs
// Получить все отделения текущей группы
var currentGroupSections = PluginContext.Operations.GetRestaurantSectionsByTerminalsGroup(PluginContext.Operations.GetHostTerminalsGroup());
