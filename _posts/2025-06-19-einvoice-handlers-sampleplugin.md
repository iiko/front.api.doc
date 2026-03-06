---
title: EInvoice API - обработчики в SamplePlugin для разработки
layout: default
tags: v9preview6 v9
---

**Применимо только для Болгарии.**

В SamplePlugin добавлены stub-обработчики для работы с электронными счетами (E-Invoice), предназначенные для разработки и тестирования.

### Добавленные обработчики

**GetEInvoiceNumberHandler** — имитирует получение номера счета и передачу его во Front. При разработке появляется popup-окно, где номер счета нужно ввести вручную.

**ConfirmEInvoiceNumberProcessedHandler** — имитирует отправку подтверждения о том, был ли успешно использован номер счета.

Для оплаты заказа как E-Invoice необходимо наличие ровно одной подписки на оба уведомления: [`GetEInvoiceNumber`](https://iiko.github.io/front.api.sdk/v9/html/E_Resto_Front_Api_INotificationService_GetEInvoiceNumber.htm) и [`ConfirmEInvoiceNumberProcessed`](https://iiko.github.io/front.api.sdk/v9/html/E_Resto_Front_Api_INotificationService_ConfirmEInvoiceNumberProcessed.htm). Эти stub-обработчики позволяют тестировать функциональность E-Invoice без реальной интеграции.

### См. также

* [Получение номера счета через API](https://iiko.github.io/front.api.doc/2025/06/20/get-invoice-number-from-api.html)
* [`INotificationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_INotificationService.htm)
