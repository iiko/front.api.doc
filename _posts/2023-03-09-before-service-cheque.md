---
title: Уведомление о печати сервисного чека
layout: default
---

В API V8Preview4 было добавлено уведомление о печати сервисного чека [`BeforeServiceCheque`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_BeforeServiceCheque.htm).

Печать сервисного чека можно прервать выбросом `OperationCanceledException` в обработчике.
Уведомление генерируется при печати сервисного чека как из UI iikoFront, так и из API.
