---
title: Переименование CashCheque в ShortenedChequeExtensions.
layout: default
tags: v9preview1 v9

---

В API V9Preview1 класс `CashCheque` переименован в [`ShortenedChequeExtensions`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Cheques_ShortenedChequeExtensions.htm), чтобы устранить противоречия в семантике. Данный класс используется для расширения содержания документа и используется в callback-уведомлении [`CashChequePrinting`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_CashChequePrinting.htm). 