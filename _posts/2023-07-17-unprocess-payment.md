---
title: Возврат проведенных платежей
layout: default
---

Начиная с API V8PreviewV7 появилась возможность возвращать проведенные платежи и предоплаты методом [`IOperationService.UnprocessPayment`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_UnprocessPayment.htm). 
Это может потребоваться для сценариев, когда оплата была начата, но не был распечатан фискальный чек. Или когда оплату проводили методом [`IOperationService.ProcessPrepay`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_ProcessPrepay.htm) ранее, но теперь её требуется вернуть.