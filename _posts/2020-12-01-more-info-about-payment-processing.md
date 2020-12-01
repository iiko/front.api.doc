---
title: В методы проведения плагинных оплат добавлено больше информации
layout: default
---

В V7Preview5 в методах
[`Pay`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IPaymentProcessor_Pay.htm) и
[`PaySilently`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IPaymentProcessor_PaySilently.htm)
заменили несколько аргументов.

Теперь в метод `Pay` вместо `Guid paymentTypeId` приходит `IPaymentItem paymentItem`.
А в метод `PaySilently` вместо `Guid orderId`, `Guid paymentTypeId` приходят `IOrder order`, `IPaymentItem paymentItem`.
Таким образом, при проведении плагинной оплаты, когда iikoFront передаёт управление одному из указанных методов в плагине, можно определить, происходит проведение оплаты при закрытии заказа или проведение предоплаты: у `IPaymentItem paymentItem` доступно свойство
[`IsPrepay`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Payments_IPaymentItem_IsPrepay.htm).