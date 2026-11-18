---
title: Настройка печати нефискального пречека с фискальным чеком до оплаты
layout: default
tags: v10 v10preview2
---

Начиная с API V10Preview2 в [`IRestaurantSection`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection.htm) добавлено свойство [`PrintBillWithFiscalChequeBeforePaymentEnabled`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection_PrintBillWithFiscalChequeBeforePaymentEnabled.htm) — включена ли в отделении печать нефискального пречека вместе с фискальным чеком до оплаты.

Свойство дополняет существующее `FiscalChequeBeforePaymentEnabled` (включена ли [фискализация до оплаты]({{ site.baseurl }}{% post_url 2025-01-23-print-fiscal-cheque-before-payment %})). Плагины, которые сами управляют печатью пречека и чека в режиме фискализации до оплаты (например, приложения официантов), могут учитывать эту настройку и не печатать лишний или недостающий документ.
