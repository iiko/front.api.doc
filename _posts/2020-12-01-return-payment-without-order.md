---
title: При возврате заказов закрытых кассовых смен стал доступен идентификатор заказа
layout: default
---

В V7Preview5 в метод
[`ReturnPaymentWithoutOrder`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IPaymentProcessor_ReturnPaymentWithoutOrder.htm)
был добавлен новый аргумент `Nullable<Guid> orderId`.

Данный метод реализуется в коде плагина и вызывается из iikoFront, когда на нём пытаются вернуть заказ, который был оплачен плагинным типом в кассовой смене, которая на данный момент закрыта.
При возврате товаров в отрыве от заказов указанный аргумент равен `null`.
Подробнее о возврате заказов закрытых кассовых смен можно почитать в статье ["Возврат товара"](https://ru.iiko.help/smart/project-iikofront/topic-38).
Подробнее о методе `ReturnPaymentWithoutOrder` можно почитать в статье ["Внешние типы оплаты"](https://iiko.github.io/front.api.doc/v6/ru/PaymentProcessor.html), в разделе "Методы возврата оплаты".