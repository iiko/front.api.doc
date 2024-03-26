---
title: Поддержка дополнительной валюты в IPaymentItem
layout: default
tags: v9preview1
---

В интерфейсе [`IPaymentItem`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Payments_IPaymentItem.htm) появилось свойство [`CurrencyInfo`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Payments_IPaymentItem_CurrencyInfo.htm), которое позволяет хранить данные о дополнительной валюте платежа.
Для поддержки использования дополнительных валют в платежах в методы [`AddPaymentItem`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_AddPaymentItem.htm), [`AddExternalPaymentItem`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_AddExternalPaymentItem.htm), [`AddExternalFiscalizedPaymentItem`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_AddExternalFiscalizedPaymentItem.htm) была добавлена возможность задавать сумму в дополнительной валюте, а также указывать эту валюту через интерфейс [`IAdditionalCurrency`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Payments_IAdditionalCurrency.htm).
Кроме того, был добавлен метод получения списка валют с их текущими курсами [`GetCurrencyRates`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetCurrencyRates.htm), а также список валют с курсами для определенного заказа [`GetCurrencyRatesForOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetCurrencyRatesForOrder.htm).
