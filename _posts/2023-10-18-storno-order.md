---
title: Возврат заказа (сторнирование)
layout: default
tags: v8preview7 v8
---

Теперь появилась возможность делать возврат заказов не только из [UI iikoFront](https://ru.iiko.help/articles/#!iikofront-8-6/topic-78/a/h2__1472503195),
но и из API V8Preview7. Для этого необходимо вызвать метод [`StornoOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_StornoOrder.htm).

Таким образом, мы замкнули контур оплат из API, в котором теперь доступен полный набор действий:

- Внесение предоплаты: [`ProcessPrepay`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_ProcessPrepay.htm)
- Возврат предоплаты / проведенной оплаты: [`UnprocessPayment`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_UnprocessPayment.htm)
- Оплата заказа: [`PayOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_PayOrder.htm), [`PayOrderAndPayOutOnUser`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_PayOrderAndPayOutOnUser.htm)
- Возврат оплаты заказа / сторнирование: [`StornoOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_StornoOrder.htm)

Для возврата заказа необходимо, чтобы плагин поддерживал оплатные операции.
У сотрудника, чьи
[`ICredentials`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Security_ICredentials.htm)
мы передаем в метод сторнирования заказа, должно быть право F_STRN (Производить возврат оплаты).
Кассовая смена, в которой заказ оплачивался, должна быть открыта и принадлежать текущему терминалу, т.к. сторнирование производится локально.
Наличности в кассе должно хватать, если при оплате заказа была оплата наличными.
Все оплаты, подлежащие возврату, должны поддерживать тихую оплату.

Подробности о неуспешном сторнировании, в случае которого может быть выброшен [`PaymentActionFailedException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedException.htm),
были объединены с [подробностями о неуспешной оплате]({{ site.baseurl }}/2023/08/28/more-info-about-pay-fail.html),
соответственно, поле [`PaymentActionFailedException.Reason`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Exceptions_PaymentActionFailedException_Reason.htm)
заполняется теперь и в методе `StornoOrder`.
Список [`PaymentActionFailedExceptionReason`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedExceptionReason.htm)
пополнился на пункты:

- `SomeOfCafeSessionsIsClosed`,
- `StornoOrderFailed`,
- `StornoNotSupported`,
- `OrderStatusIsNotClosed`,
- `OrderCloseAndStornoOnDifferentTerminalNotSupported`,
- `DeliveryOrderStatusIsCanceled`

Из которых

- `PaymentsProcessingCanceled`,
- `PaymentsProcessingFailed`,
- `BeforeDoChequeOperationFailed`,
- `ChequeTaskProcessorFailed`,
- `CashRegisterOperationFailed`

имеют указанное свойство [`PaymentActionFailedException.Details`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Exceptions_PaymentActionFailedException_Details.htm),
в котором будет сообщение эксепшена, генерируемое другим плагином в

- [`IPaymentProcessor.ReturnPaymentSilently`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IPaymentProcessor_ReturnPaymentSilently.htm),
- [`INotificationService.BeforeDoCheque`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_BeforeDoCheque.htm),
- [`IChequeTaskProcessor.BeforeDoCheckAction`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Devices_IChequeTaskProcessor_BeforeDoCheckAction.htm),
- [`ICashRegister.DoCheque`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Devices_ICashRegister_DoCheque.htm).

Причина неудачного сторнирования ([`PaymentActionFailedException.Reason`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Exceptions_PaymentActionFailedException_Reason.htm))
`CashForChangeNotEnough` была переименована в `CashNotEnough`.

Также хочется отметить, что теперь есть возможность удалить оплаченный заказ. Примерная схема вызовов для закрытого заказа будет выглядеть так:

```
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.Closed);
var credentials = PluginContext.Operations.AuthenticateByPin("777");

// Сторнируем заказ, возвращаем оплаты
order = PluginContext.Operations.StornoOrder(order, credentials);

// Возвращаем предоплаты, если они были в заказе
foreach (var orderPayment in order.Payments)
{
    PluginContext.Operations.UnprocessPayment(order, orderPayment, credentials);
    order = PluginContext.Operations.GetOrderById(order.Id);
}

// Удаляем отпечатанные позиции заказа
if (order.Items.Count > 0)
{
    PluginContext.Operations.DeletePrintedOrderItems(
        "reason",
        WriteoffOptions.WriteoffToCafe(PluginContext.Operations.GetActiveRemovalTypes().First(rt => rt.WriteoffType.HasFlag(WriteoffType.Cafe))),
        order,
        order.Items,
        credentials);
    order = PluginContext.Operations.GetOrderById(order.Id);
}

// Удаляем заказ
PluginContext.Operations.DeleteOrder(order, credentials);
```