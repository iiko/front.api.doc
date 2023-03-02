---
title: Навигация в заказ по инициативе плагина
layout: default
---

В API V8 сделали первый шаг к возможности навигироваться между экранами iikoFront по инициативе плагина.
Пока поддерживается только навигация в заказ по плагинным кнопкам или с экрана редактирования заказа.

В [`IViewManager`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_UI_IViewManager.htm)
был добавлен новый метод
[`NavigateToOrderAfterOperation`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_NavigateToOrderAfterOperation.htm).

Его можно вызвать во вью-менеджере, который приходит в плагин при нажатии плагинных кнопок:

- на ДОП - Дополнения —
[`AddButtonToPluginsMenu`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddButtonToPluginsMenu.htm)
- на экране закрытого заказа —
[`AddButtonToClosedOrderScreen`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddButtonToClosedOrderScreen.htm)
- на экране возврата заказов закрытых кассовых смен —
[`AddButtonToProductsReturnScreen`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddButtonToProductsReturnScreen.htm)
- на экране редактирования заказа —
[`AddButtonToOrderEditScreen`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddButtonToOrderEditScreen.htm)

А также во вью-менеджере, который приходит в плагин при редактировании из API текущего открытого на фронте заказа:

- вызов внутри
[`TryEditCurrentOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryEditCurrentOrder.htm)

Навигация возможна только в открытый заказ.
При вызове метода проверяются соответствующие права текущего залогиненного на фронте сотрудника.
Такие же, какие проверяются при навигации путем нажатия кнопок на самом фронте.
Навигация в заказ доставки пока невозможна.