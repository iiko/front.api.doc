---
title: Информация о текущем пользователе, авторизованном на iikoFront
layout: default
---

С версии V7Preview4 можно будет подписаться на уведомление о смене текущего пользователя на iikoFront: [`CurrentUserChanged`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_CurrentUserChanged.htm).

В момент подписки возвращается текущий пользователь. Если на iikoFront никто не авторизован, возвращается `null`.