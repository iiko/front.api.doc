---
title: Добавлена возможность взаимодействия между плагинами по сети 
layout: default
---

Начиная с V7Preview5 с помощью метода [`CallExternalOperation`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_CallExternalOperation__2.htm) плагин может вызвать операцию, реализованную другим плагином на другом терминале.

Ранее взаимодействие между плагинами было доступно лишь в рамках одного терминала ([подробности]({{ site.baseurl }}{% post_url 2018-08-03-external operations%})).
Теперь у метода `CallExternalOperation` появился необязательный аргумент `terminal`, позволяющий указать, на каком терминале следует выполнить операцию.
Если оставить этот аргумент `null`, операция будет выполнена на локальном терминале.
В любом случае, на терминале, на котором предполагается выполнить операцию, должен быть плагин, зарегистрировавший эту внешнюю операцию с помощью [`RegisterExternalOperation`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_RegisterExternalOperation__2.htm).

Возможность удалённого выполнения внешних операций упростит разработку плагина, которому требуется обмен данными между установленными на разных терминалах копиями.
Раньше таким плагинам приходилось самим находить друг друга в сети, выполнять и обрабатывать сетевые запросы, соответственно, при установке требовалось настраивать разрешения на открытие/прослушку портов и т. п.
Кроме того, вспомогательные плагины, предоставляющие другим плагинам доступ к данным из внешних систем, теперь достаточно устанавливать в единственном экземпляре на главный терминал.

Для возможности указания терминала, на котором следует выполнить операцию, в API добавлен справочник [терминалов](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Organization_ITerminal.htm).
Сопутствующие изменения:

* Добавлен метод [`GetTerminals`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetTerminals.htm), возвращающий список терминалов текущего ресторана.
* [`GetHostTerminal`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetHostTerminal.htm) возвращает локальный терминал ([`ITerminal`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Organization_ITerminal.htm)). 
* [`GetHostTerminalSettings`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetHostTerminalSettings.htm) возвращает настройки локального терминала ([`IHostTerminalSettings`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Organization_IHostTerminalSettings.htm)).
* Отдельный метод `GetHostTerminalCultureInfo` удалён, информацию о культуре можно получить в составе настроек локального терминала.