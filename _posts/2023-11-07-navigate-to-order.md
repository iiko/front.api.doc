---
title: Навигация в заказ по инициативе плагина (продолжение)
layout: default
---

В API V8 сделали второй шаг к возможности показывать диалоговые окна и навигироваться в заказ по инициативе плагина с разных экранов.

В одной из [предыдущих новостей]({{ site.baseurl }}/2023/02/22/navigate-to-order.html)
мы рассказали о способах навигации в заказ по плагинным кнопкам или с экрана редактирования заказа.
Теперь такая навигация поддерживается и с других экранов:

- [`IAdditionalOperationsScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_IAdditionalOperationsScreen.htm) — ДОП
- [`IOpenOrdersScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_IOpenOrdersScreen.htm) — Открытые заказы
- [`IClosedOrdersScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_IClosedOrdersScreen.htm) — Закрытые заказы
- [`IDocumentsScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_IDocumentsScreen.htm) — Документы
- [`IPreliminaryOrdersScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_IPreliminaryOrdersScreen.htm) — Предзаказы
- [`ISectionSchemaScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_ISectionSchemaScreen.htm) — Схема зала
- [`IOrdersByTablesScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_IOrdersByTablesScreen.htm) — Все столы
- [`IOrdersByWaiterScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_IOrdersByWaiterScreen.htm) — По официантам
- [`ITabsByWaiterScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_ITabsByWaiterScreen.htm) — Табы
- [`IDeliveriesScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_IDeliveriesScreen.htm) — Доставки
- [`IReservesScreen`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Screens_IReservesScreen.htm) — Банкеты и резервы

Чтобы понимать, что мы находимся на экране, который поддерживает работу с UI, нужно подписаться на событие
[`ScreenChanged`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_ScreenChanged.htm).

Если экран, пришедший в событие, является одним из перечисленных выше экранов, можно вызвать новый метод
[`TryExecuteUiOperation`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryExecuteUiOperation.htm),
в который нужно передать ссылку на callback, который iikoFront вызовет, как только появится такая возможность.
При бездействии это произойдёт немедленно, а если в этот момент выполняются другие операции, то callback будет вызван сразу по их завершении.
В любом случае, метод `TryExecuteUiOperation` вернёт управление после вызова callback’а.
Если callback выбросит исключение, оно вылетит из `TryExecuteUiOperation`.
В случае, если в момент вызова `TryExecuteUiOperation` выполнялась другая операция, которая в итоге привела к выходу с текущего экрана,
callback не удастся вызвать ни сразу, ни отложенно, а метод `TryExecuteUiOperation` сгенерирует исключение `OperationCanceledException`.

На время выполнения callback'а показывается прогрессбар. В callback будет передан
[`IViewManager`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_UI_IViewManager.htm)
с возможностью показывать диалоговые окна и
[менять текст на прогрессбаре](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ChangeProgressBarMessage.htm),
а также с возможностью
[навигироваться в заказ](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_NavigateToOrderAfterOperation.htm).

Навигация возможна только в открытый заказ.
При вызове метода проверяются соответствующие права текущего залогиненного на фронте сотрудника.
Такие же, какие проверяются при навигации путем нажатия кнопок на самом фронте.
Навигация в заказ доставки пока невозможна.