---
title: Закрывать заказы с silent-оплатами прямо из API
layout: default
---

В недавнем релизе [iikoFront 7.4.6](https://ru.iiko.help/articles/releasenotes/releasenotes-2020/a/h3__1723080526) появилась возможность закрывать заказы с оплатами, поддерживающими тихое проведение (silent-оплаты), прямо из API, не входя на экран кассы. Данный функционал поддерживается в указанной версии iikoFront на всех доступных версиях API: V5, V6, V7Preview3, V7Preview4, V7.

Раньше тихое проведение плагинной оплаты в заказе поддерживал только метод [`ProcessPrepay`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_ProcessPrepay.htm). Но превращение оплаты в предоплату — это лишние движения по проводкам и свои особенности учёта. Теперь же такой заказ можно оплатить и закрыть вызовом метода [`PayOrder`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_PayOrder.htm). Необходимым условием является то, что все непроведённые оплаты, содержащиеся в заказе, должны поддерживать тихую оплату.

#### Пример
```cs
/// <summary>
/// Дистанционная оплата заказа существующими в заказе платежами.
/// </summary>
private void PayOrderWithExistingPayments()
{
	const bool isProcessed = false;
	var credentials = PluginContext.Operations.GetCredentials();

	var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New);
	var paymentType = PluginContext.Operations.GetPaymentTypes().First(x => x.Kind == PaymentTypeKind.External && x.Name == "SampleApiPayment");
	var additionalData = new ExternalPaymentItemAdditionalData { CustomData = Serializer.Serialize(new PaymentAdditionalData { SilentPay = true }) };
	// Добавление плагинной оплаты на полную сумму
	PluginContext.Operations.AddExternalPaymentItem(order.ResultSum, isProcessed, additionalData, null, paymentType, order, credentials);

	order = PluginContext.Operations.GetOrderById(order.Id);
	// Закрытие заказа существующими оплатами
	PluginContext.Operations.PayOrder(credentials, order);
}
```