---
title: Пользовательские данные в оплатах неинтегрированными банковскими картами
layout: default
tags: v9preview1 v9
---

В API V9Preview1 в класс
[`CardPaymentItemAdditionalData`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Payments_CardPaymentItemAdditionalData.htm)
добавлено новое `nullable` поле
[`CustomData`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Payments_CardPaymentItemAdditionalData_CustomData.htm),
ограниченное 5000 символов. Заполнение полей `CardPaymentItemAdditionalData` теперь происходит через
[конструктор](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Data_Payments_CardPaymentItemAdditionalData__ctor.htm)
с 2 аргументами:

```
public CardPaymentItemAdditionalData([CanBeNull] string cardNumber, [CanBeNull] string customData = null)
{...}
```

Небольшой пример заполнения и чтения `CustomData`:

```
/// <summary>
/// Добавление внешнего проведенного платежа картой.
/// </summary>
private void AddCardExternalProcessedPayment()
{
    const bool isProcessed = true;
    var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New);
    var paymentType = PluginContext.Operations.GetPaymentTypes().First(x => x.Kind == PaymentTypeKind.Card && x.Name.ToUpper() == "VISA");
    var additionalData = new CardPaymentItemAdditionalData("123456", "0987654321");
    var credentials = PluginContext.Operations.GetDefaultCredentials();
    var paymentItem = PluginContext.Operations.AddExternalPaymentItem(order.ResultSum / 2, isProcessed, additionalData, null, paymentType, order, credentials);

    MessageBox.Show(((CardPaymentItemAdditionalData)paymentItem.AdditionalData).CustomData);
}
```