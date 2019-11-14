---
title: Во всех версиях Front.Api в обработчике OnPaymentAdded заказ учитывает скидку, привязанную к типу оплаты
layout: default
---

Теперь сумма заказа [IOrder.ResultSum](http://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_Data_Orders_IOrder_ResultSum.htm) будет учитывать скидку, привязанную к типу оплаты, в обработчике вновь добавленного внешнего платежа [IExternalPaymentProcessor.OnPaymentAdded](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IExternalPaymentProcessor_OnPaymentAdded.htm#!).
Изменение затронет все поддерживаемые версии API.