---
title: Добавление в заказ предварительного платежа с последующим превращением в предоплату
layout: default
---
Добавлена возможность превращать предварительный платеж в предоплату по инициативе плагина, с помощью метода [`IOperationService.ProcessPrepay`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_ProcessPrepay.htm).
Для этого потребуется, чтобы платеж был проведенным вовне, либо поддерживал Silent-оплату.
Подробнее см. в статье [Оплатные действия](Payments.html).