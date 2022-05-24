---
title: В API V8 добавлены уведомления об удалении внешней оплаты из заказа
layout: default
---

При попытке удаления внешней оплаты вызывается метод [`OnPaymentDeleting`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IPaymentProcessor_OnPaymentDeleting.htm) у соответствующего [`IPaymentProcessor`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_IPaymentProcessor.htm).

Некоторые платёжные системы требуют проведения оплаты во внешней системе до оплаты заказа в iiko, поэтому возникает отрезок времени, когда во внешней системе оплата уже проведена, а в iiko ещё нет.
Прежде пользователь мог бесследно удалить такую оплату и, поскольку в iiko эта оплата считалась непроведённой, удалялась она без отмены, что приводило к ошибочной лишней транзакции во внешней системе.

Теперь процессор оплаты в методе `OnPaymentDeleting` может по своему усмотрению:

* ничего не делать — если оплата ещё не проведена и не требует никаких действий при удалении,
* отменить оплату во внешней системе,
* запретить удаление оплаты в iiko, сгенерировав одно из исключений:
    * [`PaymentActionCancelledException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionCancelledException.htm) — отмена удаления без дополнительных сообщений (например, если ранее плагин показывал какой-то вопрос, и пользователь выбрал отмену),
    * [`PaymentActionFailedException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedException.htm) — запрет удаления с показом сообщения об ошибке (например, если не удалось отменить оплату во внешней системе).

Пока это работает только в случае попытки удаления с экрана оплаты. Вызов метода `OnPaymentDeleting` при удалении оплаты через API ([`DeleteExternalPaymentItem`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_DeleteExternalPaymentItem.htm)) будет реализован позднее.