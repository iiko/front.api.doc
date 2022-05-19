---
title: В API V8 добавлен механизм нотификации плагина об удалении внешнего типа оплаты из заказа
layout: default
---

При попытке удаления внешней оплаты вызывается метод [`OnPaymentDeleting`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IPaymentProcessor_OnPaymentDeleting.htm) у соответствующего [`IPaymentProcessor`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_IPaymentProcessor.htm). Данный механизм работает только в случае попытки удаления с экрана оплаты.

Плагин, исходя из логики работы, может корректно обработать удаление оплаты, либо запретить удаление.
Отменить удаление можно двумя способами: выкинув исключение [`PaymentActionCancelledException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionCancelledException.htm), при этом никакого сообщения не будет отображено пользователю либо при помощи исключения [`PaymentActionFailedException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedException.htm) и в данном случае отобразится переданное сообщение.

Некоторые платежные системы требуют процессинга на стороне внешней системы до того, как заказ полностью оплачивается и закрывается на стороне iiko. Ранее, добавленную оплату можно было легко удалить из списка оплат на экране кассы, не обращаясь при этом к внешней системе для отмены платежа. Это приводило к рассинхронизации платежей и потере денег. Теперь событие удаления добавленной оплаты можно перехватить со стороны внешнего платежного решения, корректно отменить оплату во внешней системе или же отменить удаление оплаты.
 