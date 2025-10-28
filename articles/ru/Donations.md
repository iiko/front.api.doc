---
title: Чаевые и пожертвования
layout: default
---
## Добавление чаевых
Для добавления чаевых в заказ существует метод:

[IOperationService.AddDonation](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_AddDonation.htm)
```cs
IPaymentItem AddDonation([NotNull] ICredentials credentials, [NotNull] IOrder order, [NotNull] IDonationType donationType, [NotNull] IPaymentType paymentType, [CanBeNull] IPaymentItemAdditionalData additionalData, bool isProcessed, decimal donationSum);
```

- В качестве параметра передается тип чаевых [IDonationType](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Data_Payments_IDonationType.htm). Список типов чаевых, доступных для конкретного заказа, можно получить вызовом метода [IOperationService.GetDonationTypesCompatibleWith](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_GetDonationTypesCompatibleWith.htm) и передачей в него заказа в качестве параметра.
- Также одним из параметров является тип оплаты [IPaymentType](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Data_Payments_IPaymentType.htm), с помощью которого чаевые будут проведены. Список доступных типов оплат для выбранного типа чаевых можно узнать из выбранного ранее типа чаевых [IDonationType.PaymentTypes](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_Data_Payments_IDonationType_PaymentTypes.htm).
- Параметр `isProcessed` указывает на то, нужно ли проводить чаевые через iikoFront, или же они уже проведены вовне. 

##### Примеры

- Добавление в открытый заказ чаевых наличными.
```cs
const bool isProcessed = true;
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New);
var donationType = PluginContext.Operations.GetDonationTypesCompatibleWith(order).Last(dt => dt.PaymentTypes.Any(pt => pt.Kind == PaymentTypeKind.Cash));
var paymentType = donationType.PaymentTypes.First(x => x.Kind == PaymentTypeKind.Cash);
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddDonation(credentials, order, donationType, paymentType, null, isProcessed, order.ResultSum / 10);
order = PluginContext.Operations.GetOrderById(order.Id);
Debug.Assert(order.Donations.Contains(paymentItem));
```

- Добавление в закрытый заказ чаевых картой.
```cs
const bool isProcessed = true;
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.Closed);
var donationType = PluginContext.Operations.GetDonationTypesCompatibleWith(order).First(dt => dt.PaymentTypes.Any(pt => pt.Kind == PaymentTypeKind.Card));
var paymentType = donationType.PaymentTypes.First(x => x.Kind == PaymentTypeKind.Card && x.Name.ToUpper() == "VISA");
var additionalData = new CardPaymentItemAdditionalData { CardNumber = "123456" };
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddDonation(credentials, order, donationType, paymentType, additionalData, isProcessed, order.ResultSum / 4);
order = PluginContext.Operations.GetOrderById(order.Id);
Debug.Assert(order.Donations.Contains(paymentItem));
```

- Добавление в открытый заказ чаевых плагинным типом оплаты.
```cs
const bool isProcessed = true;
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New);
var donationType = PluginContext.Operations.GetDonationTypesCompatibleWith(order).First(dt => dt.PaymentTypes.Any(pt => pt.Kind == PaymentTypeKind.External));
var paymentType = donationType.PaymentTypes.First(x => x.Kind == PaymentTypeKind.External && x.Name == "SampleApiPayment");
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddDonation(credentials, order, donationType, paymentType, null, isProcessed, order.ResultSum / 3);
order = PluginContext.Operations.GetOrderById(order.Id);
Debug.Assert(order.Donations.Contains(paymentItem));
```

- Добавление в открытый заказ чаевых наличными, которые будут проводиться на стороне iikoFront.
```cs
const bool isProcessed = false;
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New);
var donationType = PluginContext.Operations.GetDonationTypesCompatibleWith(order).Last(dt => dt.PaymentTypes.Any(pt => pt.Kind == PaymentTypeKind.Cash));
var paymentType = donationType.PaymentTypes.First(x => x.Kind == PaymentTypeKind.Cash);
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddDonation(credentials, order, donationType, paymentType, null, isProcessed, order.ResultSum / 10);
order = PluginContext.Operations.GetOrderById(order.Id);
Debug.Assert(order.Donations.Contains(paymentItem));
```

- Добавление в закрытый заказ чаевых картой, проведение осуществляется на стороне iikoFront.
```cs
const bool isProcessed = false;
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.Closed);
var donationType = PluginContext.Operations.GetDonationTypesCompatibleWith(order).First(dt => dt.PaymentTypes.Any(pt => pt.Kind == PaymentTypeKind.Card));
var paymentType = donationType.PaymentTypes.First(x => x.Kind == PaymentTypeKind.Card && x.Name.ToUpper() == "VISA");
var additionalData = new CardPaymentItemAdditionalData { CardNumber = "123456" };
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddDonation(credentials, order, donationType, paymentType, additionalData, isProcessed, order.ResultSum / 4);
order = PluginContext.Operations.GetOrderById(order.Id);
Debug.Assert(order.Donations.Contains(paymentItem));
```

- Добавление в открытый заказ чаевых плагинным непроведенным типом оплаты. Стоит обратить внимание, что для непроведенного типа оплаты плагин должен поддерживать Silent-оплату.
```cs
const bool isProcessed = false;
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New);
var donationType = PluginContext.Operations.GetDonationTypesCompatibleWith(order).First(dt => dt.PaymentTypes.Any(pt => pt.Kind == PaymentTypeKind.External));
var paymentType = donationType.PaymentTypes.First(x => x.Kind == PaymentTypeKind.External && x.Name == "SampleApiPayment");
var additionalData = new ExternalPaymentItemAdditionalData { CustomData = Serializer.Serialize(new PaymentAdditionalData { SilentPay = true }) };
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddDonation(credentials, order, donationType, paymentType, additionalData, isProcessed, order.ResultSum / 2);
order = PluginContext.Operations.GetOrderById(order.Id);
Debug.Assert(order.Donations.Contains(paymentItem));
```

- Добавление чаевых чаевых во время проведения оплаты внешним плагинным типом. В данном примере требуется изменить реализацию метода [IExternalPaymentProcessor.Pay](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IExternalPaymentProcessor_Pay.htm).
```cs
public void Pay(decimal sum, [NotNull] IOrder order, Guid paymentTypeId, Guid transactionId, [NotNull] IPointOfSale pointOfSale, [NotNull] IUser cashier,
    [NotNull] IOperationService operations, IReceiptPrinter printer, IViewManager viewManager, IPaymentDataContext context)
{
	var donationType = operations.GetDonationTypesCompatibleWith(order).FirstOrDefault(dt => dt.PaymentTypes.Any(pt => pt.Kind == PaymentTypeKind.External));
	if (donationType != null)
	{
		var paymentType = donationType.PaymentTypes.First(x => x.Kind == PaymentTypeKind.External && x.Name == "SampleApiPayment");
		var additionalData = new ExternalPaymentItemAdditionalData { CustomData = Serializer.Serialize(new PaymentAdditionalData { SilentPay = true }) };
		var credentials = operations.GetCredentials();

		operations.AddDonation(credentials, order, donationType, paymentType, additionalData, false, order.ResultSum / 2);
	}
}
```

Комментарии:

- В примерах используется выражение `PluginContext.Operations.GetOrders().Last(...)` &mdash; получение последнего попавшегося заказа из списка. Аналогичные выражения используются для получения типов чаевых и оплат. Для решения бизнес&ndash;задач следует использовать соответствующий критерий отбора.
- `PluginContext.Operations.GetCredentials()` &mdash; здесь и далее в примерах приводится метод&ndash;расширение, [реализованный](https://github.com/iiko/front.api.sdk/blob/master/sample/v6/Resto.Front.Api.SamplePlugin/OperationServiceExtensions.cs) в примере проекта SamplePlugin.
- `Debug.Assert(order.Donations.Contains(paymentItem))` &mdash; лишь демострация того, что недавно добавленные чаевые должны присутствовать в списке чаевых в заказе (если, конечно, за время между добавлением и проверкой кто-то не успел их удалить).

**Дополнительно:**

- Silent-оплата заказа см. в разделе [Внешние типы оплаты](PaymentProcessor.html).
- Подробнее об оплатах, предварительных оплатах и предоплатах см. в разделе [Оплатные действия](Payments.html).

## Удаление чаевых
Для удаления ранее добавленных чаевых из заказа существует метод:

[IOperationService.DeleteDonation](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_DeleteDonation.htm)
```cs
void DeleteDonation([NotNull] ICredentials credentials, [NotNull] IOrder order, [NotNull] Data.Payments.IPaymentItem paymentItem);
```

- Одним из параметров является элемент оплаты (чаевые) [IPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Data_Payments_IPaymentItem.htm), который необходимо удалить. 
- Список внесенных в заказ чаевых можно получить из [IOrder.Donations](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_Data_Orders_IOrder_Donations.htm). 

##### Примеры

- Попытка удаления чаевых из заказа
```cs
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New || o.Status == OrderStatus.Bill || o.Status == OrderStatus.Closed);
var donationItem = order.Donations.LastOrDefault();
if (donationItem != null)
{
    PluginContext.Operations.DeleteDonation(PluginContext.Operations.GetCredentials(), order, donationItem);
}
```
