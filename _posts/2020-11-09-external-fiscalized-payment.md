---
title: Появилась возможность добавлять и удалять платеж, фискализованный на внешней кассе
layout: default
---

В V7Preview4 стало возможным работать с платежами, фискализованными на внешней кассе. Они актуальны, когда предоплата принимается на сайте, и фискальный чек печатается на облачном принтере сайта. При проведении такой оплаты в iikoFront создадутся все транзакции, соответствующие проведению внешнего фискального платежа, но фискального чека напечатано не будет, т.к. чек уже был отпечатан ранее на внешней кассе.

#### Добавлены методы:

- [`AddExternalFiscalizedPaymentItem`](https://iiko.github.io/front.api.sdk/v7/html/Overload_Resto_Front_Api_Editors_IEditSession_AddExternalFiscalizedPaymentItem.htm) — добавляет фискализованный на внешней кассе платеж в заказ
- [`DeleteExternalFiscalizedPaymentItem`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_DeleteExternalFiscalizedPaymentItem.htm) — удаляет такой платеж из заказа

#### Пример
```cs
var order = PluginContext.Operations.GetOrders().Last(o => (o.Status == OrderStatus.New));
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x => x.Kind == PaymentTypeKind.Card && x.Name.ToUpper() == "DINERS");
var additionalData = new CardPaymentItemAdditionalData { CardNumber = "123456" };
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddExternalFiscalizedPaymentItem(50, additionalData, paymentType, order, credentials);
// Для превращения такого платежа в предоплату с немедленным созданием соответствующих транзакций на iikoFront,
// можно вызвать метод IOperationService.ProcessPrepay
order = PluginContext.Operations.GetOrderById(order.Id);
PluginContext.Operations.ProcessPrepay(credentials, order, paymentItem);
```