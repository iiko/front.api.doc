---
title: Нотификация BeforeProceedOrderPayment при оплате через API
layout: default
tags: v9preview3 v9
---
Теперь событие [`BeforeProceedOrderPayment`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_BeforeProceedOrderPayment.htm) генерируется не только при оплате заказа через UI, но и при вызове API-методов оплаты, таких как [`PayOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PayOrder.htm).

Это позволяет плагинам выполнять необходимые проверки и действия перед оплатой независимо от способа её инициации. Например, плагин AlcoholMarkingPlugin теперь корректно проверяет объёмы крепкого алкоголя при оплате через API.
