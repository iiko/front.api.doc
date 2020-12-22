---
title: Редактирование заказа перед пречеком
layout: default
---

Начиная с API V7Preview5 появилась возможность редактировать заказ непосредственно перед пречеком.

Перед переводом заказа в пречек срабатывает уведомление
[`BeforeOrderBill`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_BeforeOrderBill.htm).
Раньше оно позволяло отменять перевод заказа в статус
[`Bill`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_OrderStatus.htm)
путем генерации исключения `OperationCanceledException` в соответствующем подписчике.
Также оно позволяло взаимодействовать с пользователем (когда это возможно) через
[`IViewManager`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_UI_IViewManager.htm),
показывать различные окна в iikoFront.

Теперь ко всему прочему добавилась возможность менять заказ через
[`IOperationService`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_IOperationService.htm),
ставший доступным в аргументах уведомления.
Таким образом, перед фиксацией стоимости можно отредактировать состав блюд или скидок заказа.