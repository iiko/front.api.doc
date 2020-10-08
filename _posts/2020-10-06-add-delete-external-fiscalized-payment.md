---
title: Появилась возможность добавлять и удалять платеж, фискализованный на внешней кассе
layout: default
---

В V7Preview4 стало возможным добавлять в заказ платеж, фискализованный на внешней кассе. Удалить из заказа такой платеж тоже можно.

Добавлены методы:
- [`AddExternalFiscalizedPaymentItem`](https://iiko.github.io/front.api.sdk/v7/html/Overload_Resto_Front_Api_Editors_IEditSession_AddExternalFiscalizedPaymentItem.htm) - добавляет фискализованный на внешней кассе платеж в заказ
- [`DeleteExternalFiscalizedPaymentItem`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_DeleteExternalFiscalizedPaymentItem.htm) - удаляет такой платеж из заказа

Более подробное описание и примеры использования новых методов можно найти в статье
[Оплатные действия](https://iiko.github.io/front.api.doc/v6/ru/Payments.html).