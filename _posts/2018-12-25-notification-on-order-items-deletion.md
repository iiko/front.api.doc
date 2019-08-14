---
title: Добавлены аргументы в уведомление об удалении отпечатанных блюд 
layout: default
---
Начиная с версии iiko 6.3 в API V6 в callback [`INotificationService.SubscribeOnBeforeDeletePrintedItem`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_INotificationService_SubscribeOnBeforeDeletePrintedItem.htm) и [`NotificationServiceExtensions.SubscribeOnBeforeDeletePrintedItem`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_Extensions_NotificationServiceExtensions_SubscribeOnBeforeDeletePrintedItem.htm)
добавились новые параметры.

Параметры: 

- коллекция `IOrderRootItem` – удаляемые элементы верхнего уровня;
- коллекция `IOrderModifierItem` – удаляемые модификаторы, если они удаляются без блюда;
- `IDeletionMethod` – причина удаления.
