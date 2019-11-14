---
title: Обработчик OnPaymentAdded будет вызываться после добавления скидки, привязанной к типу оплаты
layout: default
---

Начиная с iikoRms 7.1.4 обработчик [IExternalPaymentProcessor.OnPaymentAdded](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IExternalPaymentProcessor_OnPaymentAdded.htm) будет видеть заказ с учётом скидки, привязанной к типу оплаты.

Раньше при добавлении в заказ внешнего платежа сначала вызывался обработчик `OnPaymentAdded` и лишь затем в заказ добавлялась скидка, привязанная к этому типу оплаты. При таком подходе процессор внешних платежей не имел возможности учесть эту скидку. Начиная с iikoRms 7.1.4 скидка будет добавлена в заказ перед вызовом `OnPaymentAdded`, соответственно, на момент вызова `OnPaymentAdded` сумма заказа ([IOrder.ResultSum](http://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_Data_Orders_IOrder_ResultSum.htm)) будет уже с учётом скидки.

Изменение затронет все поддерживаемые версии API.