---
title: Отмена перехода на экран кассы
layout: default
---

Начиная с API V7Preview5 появилась возможность запрещать переход на экран кассы.

Перед переходом на экран кассы срабатывает уведомление
[`NavigatingToPaymentScreen`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_NavigatingToPaymentScreen.htm).
Раньше оно позволяло менять заказ через
[`IOperationService`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_IOperationService.htm),
доступный в аргументах уведомления, например, добавлять платёж.
Также оно позволяло взаимодействовать с пользователем через
[`IViewManager`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_UI_IViewManager.htm),
показывать различные окна в iikoFront.

Теперь ко всему прочему добавилась возможность отменять переход на экран кассы путем генерации исключения `OperationCanceledException` в соответствующем подписчике.
Это может быть востребовано в случаях, когда проверяются дополнительные условия, невыполнение которых может препятствовать навигации на кассу.