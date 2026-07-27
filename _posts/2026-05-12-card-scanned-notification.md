---
title: Уведомления о сканировании карты или штрихкода
layout: default
tags: v10preview1 v10
---

Начиная с V10Preview1, в
[`INotificationService`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_INotificationService.htm)
добавлены три новых уведомления аппаратного уровня —
`CardScanning`, `CardScanningFailed` и `CardScanned`.
В отличие от
[`OrderEditCardSlided`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_INotificationService_OrderEditCardSlided.htm)
и
[`OrderEditBarcodeScanned`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_INotificationService_OrderEditBarcodeScanned.htm),
они вызываются независимо от того, какой экран открыт.

- [`CardScanning`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_INotificationService_CardScanning.htm) —
считыватель начал приём данных.
Срабатывает не на всех типах устройств.
Если уведомление было вызвано, следом гарантированно придёт
ровно одно из двух: `CardScanned` или `CardScanningFailed`.

- [`CardScanningFailed`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_INotificationService_CardScanningFailed.htm) —
срабатывает только если перед этим пришло `CardScanning`.
Считыватель начал приём, но данные не были получены —
аппаратная ошибка считывателя или ошибка конфигурации (например, стоп-символ настроен неверно).
Однако если данные физически получены, но не распознаны на уровне бизнес-логики
(например, номер карты не принадлежит ни одному гостю
или штрихкод не привязан ни к одному товару),
`CardScanningFailed` не вызывается — вместо него срабатывает `CardScanned`.

- [`CardScanned`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_INotificationService_CardScanned.htm) —
карта или штрихкод успешно считаны.
Должен вернуть `bool`: `true` останавливает дальнейшую обработку, `false` — передаёт управление дальше.

Пример подписки на все три уведомления — класс
[`CardScannedHandler`](https://github.com/iiko/front.api.sdk/blob/master/sample/v10preview1/Resto.Front.Api.SamplePlugin/NotificationHandlers/CardScannedHandler.cs)
в проекте `Resto.Front.Api.SamplePlugin` SDK.
