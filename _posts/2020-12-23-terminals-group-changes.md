---
title: Изменена настройка главного терминала в группе
layout: default
---

В iikoRms 7.5 [изменился](https://ru.iiko.help/articles/releasenotes/version-7-5/a/h3__457162169) способ настройки главного терминала в группе, поэтому в API начиная с V7Preview5 главный терминал можно получить напрямую из группы, а не вычислять через точки продаж как раньше.

Прежде для определения, является ли локальный терминал главным в группе, требовалось проверить наличие среди локальных точек продаж ([`GetHostTerminalPointsOfSale`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetHostTerminalPointsOfSale.htm)) главной точки продаж (`IPointOfSale.IsMain`). Начиная с iikoRms 7.5 у точек продаж нет галочки «Главная касса», главный терминал задаётся напрямую для группы, соответственно, начиная с V7Preview5 вместо `IPointOfSale.IsMain` добавлено свойство [`ITerminalsGroup.MainTerminal`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_ITerminalsGroup_MainTerminal.htm).

В ранее выпущенных версиях API по возможности будет имитироваться старая схема настроек — главной будет считаться точка продаж главного терминала. Если у главного терминала несколько точек продаж, главной будет считаться дефолтная точка продаж, а если ни одна из точек продаж не помечена галочкой «По умолчанию», то главной будет считаться первая (они сортируются в лексикографическом порядке). Если у главного терминала нет точек продаж, плагины старых версий не смогут определить, что этот терминал является главным.

Кроме того, начиная с V7Preview5 произошли следующие изменения:

* [`TerminalsGroupChanged`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_TerminalsGroupChanged.htm) — уведомление об изменении группы
* [`GetTerminalsGroupTerminals`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetTerminalsGroupTerminals.htm) — метод получения терминалов указанной группы
* [`GetTerminalsGroupRestaurantSections`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetTerminalsGroupRestaurantSections.htm) — список отделений указанной группы (раньше этот метод назывался `GetRestaurantSectionsByTerminalsGroup`)
* [`GetHostAgentId`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetHostAgentId.htm) — идентификатор локального агента, связанного с локальным терминалом (раньше этот метод назывался `GetAgentId`) 
* [`IHostTerminalSettings.IsMainTerminal`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_IHostTerminalSettings_IsMainTerminal.htm) — является ли терминал главным (раньше это свойство называлось `IHostTerminalSettings.SingleInstancePluginsCompatible`)

Другие изменения, связанные с настройками групп и терминалов, можно найти в заметке про [взаимодействие между плагинами по сети](https://iiko.github.io/front.api.doc/2020/11/23/call-remote-external-operation.html).
