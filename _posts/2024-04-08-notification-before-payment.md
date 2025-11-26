---
title: Добавлено уведомление о добавлении платежа в заказ
layout: default
tags: v8

---

В [`INotificationService`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_INotificationService.htm) добавлено 
уведомление [`BeforePaymentAdded`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_BeforePaymentAdded.htm).
Уведомление вызывается перед добавлением платежа в заказ. Если один из подписавшихся плагинов бросит исключение `OperationCanceledException` 
добавление платежа будет отменено.
