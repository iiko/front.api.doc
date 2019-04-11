---
title: Добавлены аргументы в уведомление о печати блюд заказа 
layout: default
---
Начиная с версии iiko 6.4 в API V6 в уведомления о печати сервисного чека ([`INotificationService.SubscribeOnBeforeServiceCheque`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_INotificationService_SubscribeOnBeforeServiceCheque.htm) и [`NotificationServiceExtensions.SubscribeOnBeforeServiceCheque`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Extensions_NotificationServiceExtensions_SubscribeOnBeforeServiceCheque.htm)) добавлен список печатаемых блюд (`IOrderCookingItem`).
