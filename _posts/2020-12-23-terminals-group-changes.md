---
title: Изменения, связанные с настройками групп и терминалов
layout: default
---

В V7Preview5 было добавлено уведомление об изменении группы:
[`TerminalsGroupChanged`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_TerminalsGroupChanged.htm);
у группы стало возможным узнать главный терминал: [`ITerminalsGroup.MainTerminal`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_ITerminalsGroup_MainTerminal.htm);
а также появилась возможность получить список терминалов, привязанных к указанной группе:
[`GetTerminalsGroupTerminals`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetTerminalsGroupTerminals.htm).

Помимо прочего, метод получения списка отделений указанной группы был переименован из `GetRestaurantSectionsByTerminalsGroup` в
[`GetTerminalsGroupRestaurantSections`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetTerminalsGroupRestaurantSections.htm);
метод получения идентификатора локального агента, связанного с локальным терминалом, переименован из `GetAgentId` в
[`GetHostAgentId`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetHostAgentId.htm);
свойство локального терминала, определяющее, является ли терминал главным в группе, переименовано из `IHostTerminalSettings.SingleInstancePluginsCompatible` в
[`IHostTerminalSettings.IsMainTerminal`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_IHostTerminalSettings_IsMainTerminal.htm);
удалено поле `IPointOfSale.IsMain`.

Другие изменения, связанные с настройками групп и терминалов, можно найти в заметке ["Добавлена возможность взаимодействия между плагинами по сети"](https://iiko.github.io/front.api.doc/2020/11/23/call-remote-external-operation.html).