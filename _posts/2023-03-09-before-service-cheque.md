---
title: Редактирование заказа перед печатью сервисного чека
layout: default
---

В API V8Preview4 появилась возможность редактировать заказ непосредственно перед печатью сервисного чека.

Перед печатью сервисного чека срабатывает уведомление [`BeforeServiceCheque`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_BeforeServiceCheque.htm). Теперь оно позволяет менять заказ через [`IOperationService`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_IOperationService.htm), ставший доступным в аргументах уведомления.