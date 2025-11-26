---
title: Возможности расширения кассового чека
layout: default
tags: v9 v9preview2

---

В API V9Preview2 добавлена возможность менять задавать и использовать [`ChequeSale.FiscalTags`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_Tasks_ChequeSale_FiscalTags.htm) для позиций фискального чека.

- Задать тэги можно в рамках [`IChequeTaskProcessor`](https://iiko.github.io/front.api.doc/v6/ru/ChequeTaskProcessor.html) в операции [`BeforeDoChequeAction()`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_IChequeTaskProcessor_BeforeDoChequeAction.htm)
  [операций внешнего фискального регистратора](https://iiko.github.io/front.api.doc/v6/ru/CashRegisters.html):
- Считать тэги можно в рамках операции [`ICashRegister.DoCheque()`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoCheque.htm)

Кроме того, можно получить свойства уже пробитого чека методом [`GetDocumentFiscalTags()`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetDocumentFiscalTags.htm), зная [`FdNumber`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_Tasks_GetFiscalTagsTask_FdNumber.htm) интересующего вас документа.