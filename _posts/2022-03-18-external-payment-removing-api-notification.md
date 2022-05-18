---
title: В API V8 добавлен механизм предотвращения удаления внешнего типа оплаты из заказа по инициативе плагина
layout: default
---

В интерфейс [`IPaymentProcessor`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_IPaymentProcessor.htm) добавлен метод [`OnPaymentDeleting`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IPaymentProcessor_OnPaymentDeleting.htm), уведомляющий об удалении внешнего типа оплаты из заказа (на странице оплаты). 

Отменить удаление можно двумя способами: выкинув исключение [`PaymentActionCancelledException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionCancelledException.htm), при этом никакого сообщение не будет отображено пользователю, либо при помощи исключения [`PaymentActionFailedException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedException.htm) и в данном случае отобразится переданное сообщение.

Ранее была возможна ситуация, когда при наличии внешнего типа оплаты в заказе его можно было удалить в моменте обработки платежной системой. Из-за чего платеж никогда не был сторнирован на стороне внешней системы, что приводило к несогласованности данных и потере денег клиентом.
 