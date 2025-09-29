---
title: Переименование BillCheque в ChequeExtensions.
layout: default
tags: v9preview1 v9

---

В API V9Preview1 класс `BillCheque` переименован в [`ChequeExtensions`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Cheques_ChequeExtensions.htm), чтобы устранить противоречия в семантике. Данный класс применяется для расширения содержания документа и используется в callback-уведомлениях [`BillChequePrinting`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_BillChequePrinting.htm) и [`DocumentInvoicePrinting`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_DocumentInvoicePrinting.htm).