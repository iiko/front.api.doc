---
title: Сведения о безналичной транзакции в платёжных плагинах (IPaymentProcessor)
layout: default
tags: v10 v10preview2
---

Начиная с V10Preview2, платёжный плагин, реализующий
[`IPaymentProcessor`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_IPaymentProcessor.htm),
может передавать реквизиты безналичной транзакции
([`BankTransactionDetails`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Payments_BankTransactionDetails.htm))
через
[`IPaymentDataContext`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_IPaymentDataContext.htm).
Контекст передаётся в каждый из методов процессора:
`Pay`, `ReturnPayment`, `EmergencyCancelPayment`, `PaySilently`,
`ReturnPaymentSilently`, `EmergencyCancelPaymentSilently`, `ReturnPaymentWithoutOrder`.
Для записи используйте
[`SetBankTransactionDetails`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IPaymentDataContext_SetBankTransactionDetails.htm),
для чтения —
[`GetBankTransactionDetails`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IPaymentDataContext_GetBankTransactionDetails.htm).

Рабочие примеры для всех сценариев ФНС (Мир, МПС, СБП, MultiQR, PayQR-сервисы) —
класс [`BankNonCashPaymentProcessorSample`](https://github.com/iiko/front.api.sdk/blob/master/sample/v10/Resto.Front.Api.SamplePaymentPlugin/BankNonCashPaymentProcessorSample.cs)
в проекте `Resto.Front.Api.SamplePaymentPlugin` SDK.

## ReturnPaymentWithoutOrder

> **Важно.**
> В сценарии частичного возврата возвратная операция не привязана к заказу.
> iikoFront сохраняет реквизиты в `CardOrderTransaction` (`transactions.db`)
> вместе с проводкой возврата (как и при любой другой оплате)
> и использует их для формирования фискального чека.
> Методы контекста, сохраняющие данные внутри заказа
> (`SetRollbackData`, `SetCustomData`, `SetInfoForReports`, `GetRollbackData`, `GetCustomData`),
> недоступны — они бросают `NotSupportedException`.
> Поддерживается только `SetBankTransactionDetails` и `GetBankTransactionDetails`.

## Доступ к реквизитам

### Через IOrder → IPaymentItem

После проведения оплаты реквизиты доступны в
[`IPaymentItem.BankTransactionDetails`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Payments_IPaymentItem_BankTransactionDetails.htm) —
это те данные, которые плагин передал через `SetBankTransactionDetails`.
Доступ через
[`IOrder.Payments`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Orders_IOrder_Payments.htm):

```csharp
var order = PluginContext.Operations.GetOrderById(orderId);
foreach (var payment in order.Payments)
{
    var details = payment.BankTransactionDetails;
    if (details == null)
        continue;
    PluginContext.Log.Info($"Rrn: {details.Rrn}, AuthCode: {details.AuthCode}");
}
```

### Через ChequeTask (ФФД 1.05, 1.1, 1.2)

Для ККТ с ФФД 1.05, 1.1 или 1.2 iikoFront формирует реквизит 1235 «Сведения об оплате безналичными»
автоматически на основе `BankTransactionDetails` и записывает результат в
[`ChequeCardPayment.FiscalTags`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Device_Tasks_ChequeCardPayment_FiscalTags.htm).
Для управления значениями тегов используются
[`BankPaymentRuExtensionKeys`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Payments_BankPaymentRuExtensionKeys.htm),
[`BankPaymentExtensionKeys`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Payments_BankPaymentExtensionKeys.htm)
и константы
[`BankPaymentRuExtensionValues`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Payments_BankPaymentRuExtensionValues.htm).

[`ChequeTask`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Device_Tasks_ChequeTask.htm)
доступен в методах
[`ICashRegister`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Devices_ICashRegister.htm)
и
[`IChequeTaskProcessor`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Devices_IChequeTaskProcessor.htm).
Пример обхода тегов — метод `DoCheque` класса
[`SampleCashRegister`](https://github.com/iiko/front.api.sdk/blob/master/sample/v10/Resto.Front.Api.SampleCashRegisterPlugin/SampleCashRegister.cs)
в проекте `Resto.Front.Api.SampleCashRegisterPlugin` SDK.

Структура тегов (пример — эквайринг Мир):

```
CardPayment.FiscalTags
└── FiscalTag(1235)          — Сведения об оплате безналичными
    ├── FiscalTag(1236, "1") — Признак способа оплаты: НПС
    ├── FiscalTag(1237, "date=2025-07-16T07:25:03+03:00&psid=22&rrn=...&mid=...&tid=...&acq=...")
    └── FiscalTag(1238, "pc=1&pt=257&auth=...&bacq=...&bpay=...")
```
