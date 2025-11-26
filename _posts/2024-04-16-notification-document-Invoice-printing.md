---
title: Добавлено уведомление о печати отчета с возможностью расширения содержания печатаемого документа.
layout: default
tags: v9preview1 v9

---

В API V9Preview1 добавлена функциональность вставки XML разметки в отчет перед печатью, чтобы позволить плагинам расширять содержание печатаемого документа.


В [`INotificationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_INotificationService.htm) добавлено уведомление [`DocumentInvoicePrinting`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_DocumentInvoicePrinting.htm) со следующими параметрами: 

[`IDocument`](https://iiko.github.io/front.api.sdk/v9/html/Properties_T_Resto_Front_Api_Data_Documents_IDocument.htm) - Передает тип и номер печатаемого документа.

[`ChequeExtensions`](ChequeExtensions) - Используется для вставки xml разметки в соответствующие секции документа (BeforeHeader, AfterHeader, BeforeFooter, AfterFooter).