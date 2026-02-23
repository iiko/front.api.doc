---
title: Улучшено поле Details в PaymentActionFailedException
layout: default
tags: V9Preview4 V9
---
Теперь поле [`Details`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Exceptions_PaymentActionFailedException_Details.htm) исключения [`PaymentActionFailedException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedException.htm) корректно заполняется во всех случаях.

Ранее при вызове некоторых методов, таких как [`StornoOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_StornoOrder.htm) или [`PayOrderAndPayOutOnUser`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PayOrderAndPayOutOnUser.htm), это поле могло оставаться пустым. Теперь исключение всегда содержит подробное описание возникшей проблемы.

