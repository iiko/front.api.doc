---
title: Проведение предварительного платежа в предоплату
layout: default
---
Добавлена возможность проведения предварительных платежей в предоплату по инициативе плагина, с помощью метода [`IOperationService.ProcessPrepay`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_ProcessPrepay.htm).
Для проведения предварительного платежа потребуется чтобы платеж был проведенным вовне, либо поддерживал Silent-оплату.