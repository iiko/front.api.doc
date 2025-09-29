---
title: Переименовение GetPaymentSystemName в GetPaymentSystemKey
layout: default
---

В API V7 метод `GetPaymentSystemName` переименован в [`GetPaymentSystemKey`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetPaymentSystemKey.htm), чтобы устранить противорчения в семантике. Данный метод возвращает ключ [`IPaymentProcessor.PaymentSystemKey`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_IPaymentProcessor_PaymentSystemKey.htm), с которым платежная система регистрируется в iiko.