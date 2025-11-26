---
title: События между плагинами
layout: default
tags: v9preview2 v9

---

В API V9Preview2 была добавлена возможность создавать и использовать пользовательские события.

Для этого были добавлены следующие операции:

- [`GetExternalNotificationSubscription`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetExternalNotificationSubscription.htm)
- [`InvokeExternalNotification`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_InvokeExternalNotification.htm)
- [`GetAllExternalNotificationsNames `](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetAllExternalNotificationsNames.htm)


[`GetExternalNotificationSubscription(string subscriptionName)`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetExternalNotificationSubscription.htm) - операция позволяет подписываться на пользовательское событие с именем ***subscriptionName***. А в случае его отсутствия зарегистрировать его и сразу же подписаться на него. Максимальная длина имени события - **256** символов.

Пример использования:

	IDisposable subscription;
	subscription =	
		PluginContext.Operations
			.GetExternalNotificationSubscription(subscriptionName)
			.Subscribe(Console.WriteLine);

[`GetAllExternalNotificationsNames() `](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetAllExternalNotificationsNames.htm) - операция позволяет получить список имен всех зарегистрированных событий на терминале. 

[`InvokeExternalNotification(string subscriptionName, string notificationData)`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_InvokeExternalNotification.htm) - операция вызывает срабатывание оповещения пользовательского события с именем ***subscriptionName***  всем его подписчикам и передает в нем информацию в текстовом виде ***notificationData***. Максимальная длина информации - **32000** символов.

Пример использования:

	var subscriptionName = PluginContext.Operations.GetAllExternalNotificationsNames().Last();
    PluginContext.Operations.InvokeExternalNotification(subscriptionName, Guid.NewGuid().ToString());

 Важно знать, что события являются общими для всех терминалов группы, что позволяет передавать извещения не только на локальные плагины, но также и на плагины других терминалов. Также вызывать оповещение события можно с любого плагина терминала группы, даже если сам плагин на данное событие не подписан.

В  [`SamplePlugin`](https://github.com/iiko/front.api.sdk/tree/master/sample/v9preview2/Resto.Front.Api.SamplePlugin) был добавлен [`пример`](https://github.com/iiko/front.api.sdk/blob/master/sample/v9preview2/Resto.Front.Api.SamplePlugin/ExternalNotificationsTester.cs) использования пользовательских событий.
