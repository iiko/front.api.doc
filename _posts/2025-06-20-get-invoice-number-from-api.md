---
title: Получение номера инвойса из АПИ
layout: default
---
В V9 добавлена возможность получения номера инвойса из АПИ для Болгарии.

Были добавлены два новых уведомления:
- [`GetEInvoiceNumber`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_GetEInvoiceNumber.htm) используется для получения номера инвойса. Оно отправляется, когда выбрана организация и кассир переходит к оплате.
- [`ConfirmEInvoiceNumberProcessed`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_ConfirmEInvoiceNumberProcessed.htm) используется для уведомления плагина о том, был ли успешно использован номер инвойса, выданный GetEInvoiceNumberHandler. Это происходит после закрытия заказа.

Для оплаты заказа инвойсом необходимо, чтобы было ровно по одной подписке на оба уведомления: GetEInvoiceNumber и ConfirmEInvoiceNumberProcessed.
В противном случае получить номер инвойса и сформировать инвойс будет невозможно — пользователю отобразится соответствующее сообщение.

Если произойдёт ошибка при получении номера инвойса, оплата завершится с ошибкой — пользователю отобразится соответствующее сообщение.
