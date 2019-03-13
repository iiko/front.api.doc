---
title: Оплатные действия
layout: default
---
## Добавление оплат
Для добавления оплаты в заказ существуют методы:

- [IEditSession.AddPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/Overload_Resto_Front_Api_V6_Editors_IEditSession_AddPaymentItem.htm) &mdash; добавить оплату

- [IEditSession.AddExternalPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/Overload_Resto_Front_Api_V6_Editors_IEditSession_AddExternalPaymentItem.htm) &mdash; добавить внешнюю оплату

- [IEditSession.AddPreliminaryPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/Overload_Resto_Front_Api_V6_Editors_IEditSession_AddPreliminaryPaymentItem.htm) &mdash; добавить предварительную оплату (_осмысленно только для заказов доставки_)

Также можно использовать одноименные [методы](https://iiko.github.io/front.api.sdk/v6/html/Methods_T_Resto_Front_Api_V6_Extensions_OperationServiceExtensions.htm) сервиса операций&ndash;расширений, в которых неявно создаваётся [сессия редактирования](https://iiko.github.io/front.api.doc/v6/ru/Data%20editing.html)
(_отличие в необходимости выполнения нескольких действий на заказом.
Если помимо добавления оплаты требуется, например, добавить гостя к заказу, то нужно использовать методы в рамках сессии редактирования_).
Для настройки и регистрации внешних типов оплаты см. статью [Интеграция с внешними типами оплаты](PaymentProcessor.html).

##### Ограничения добавления оплат:
Платеж может быть добавлен в заказ только если заказ находится в статусе новый (`New`) или пречек (`Bill`), иначе метод выбрасывает исключение [`ConstraintViolationException`](http://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Exceptions_ConstraintViolationException.htm).
Кроме того нельзя добавить в заказ несколько непроведенных элементов оплаты одного типа
(_NOTE: планируется разрешить добавлять несколько непроведенных элементов оплаты в заказ_).

##### Примеры

- Добавление в заказ оплаты наличными
```cs
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == orderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x => x.Kind == .Cash);
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddPaymentItem(100m, null, paymentType, order);
```
- Добавление в доставочный заказ оплаты картой
```cs
var deliveryOrder = PluginContext.Operations.GetDeliveryOrders().Last(o => o.Status == OrderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x => x.Kind == PaymentTypeKind.Card && x.Name.ToUpper() == "DINERS");
var additionalData = new CardPaymentItemAdditionalData { CardNumber = "123456" };
PluginContext.Operations.AddPreliminaryPaymentItem(150, additionalData, paymentType, deliveryOrder, PluginContext.Operations.GetCredentials());
```
- Добавить в заказ внешнюю непроведенную оплату
```cs
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == orderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x => x.Kind == PaymentTypeKind.Card && x.Name.ToUpper() == "DINERS");
var additionalData = new CardPaymentItemAdditionalData { CardNumber = "123456" };
PluginContext.Operations.AddExternalPaymentItem(150, false, additionalData, paymentType, order, PluginContext.Operations.GetCredentials());
```

![card](../../img/payment/api_cardExternal.png)

Комментарии:
- В примерах используется выражение `PluginContext.Operations.GetOrders().Last(...)` &mdash; получение последнего попавшегося заказа из списка.
Для решения бизнес&ndash;задач следует использовать соответствующий критерий отбора.
- `PluginContext.Operations.GetCredentials()` &mdash; здесь и далее в примерах приводится метод&ndash;расширение, [реализованный](https://github.com/iiko/front.api.sdk/blob/master/sample/Resto.Front.Api.SamplePlugin/OperationServiceExtensions.cs) в примере проекта SamplePlugin.

## Оплата заказа
Для оплаты заказа существуют методы:

- [IOperationService.PayOrder](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_PayOrder.htm)

- [IOperationService.PayOrderAndPayOutOnUser](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_PayOrderAndPayOutOnUser.htm)

также сущестует метод, с помощью которого можно превратить элемент оплаты в предоплату iikoFront
- [IOperationService.ProcessPrepay](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_ProcessPrepay.htm)

### Оплата заказа, в котором достаточно внесенных денежных средств
Пусть существует заказ IOrder order, который необходимо закрыть в iikoFront и в заказ уже внесено достаточно проведенных оплат
(*проведенные элементы оплаты это либо предоплаты, внесенные на экране кассы iikoFront, либо оплаты, добавленные по инициативе плагина методом `AddExternalPaymentItem` с флагом `isProcessed` равным `true`*).
Для такого заказа можно вызвать метод:
```cs
operationService.PayOrder(credentials, order);
```
В результате на главной кассе (в кассовую смену главной кассы) заказ закроется, распечатаются все необходимые квитанции и фискальный чек, а сам заказ окажется в закрытых в iikoFront.

![payOrder](../../img/payment/api_payOrder.png)

### Оплата стандартным типом оплаты
Пусть существует заказ `IOrder order`, который необходимо оплатить наличными на всю сумму заказа и закрыть в iikoFront.
Для этого нужно выбрать соответствующий paymentType.
Затем вызывается метод `IOperationService.PayOrderAndPayOutOnUser`.
Здесь заказ оплачивается наличными на всю сумму заказа:
```cs
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New || o.Status == OrderStatus.Bill);
var credentials = PluginContext.Operations.AuthenticateByPin("654");
var paymentType = operationService.GetPaymentTypesToPayOutOnUser().First(x => x.IsCash);
PluginContext.Operations.PayOrderAndPayOutOnUser(credentials, order, paymentType, order.ResultSum);
```
В результате на главной кассе (в кассовую смену главной кассы) заказ закроется, распечатаются все необходимые квитанции и фискальный чек, а сам заказ окажется в закрытых в iikoFront.

### Оплата плагинным типом оплаты
Для оплаты заказа плагинным типом оплаты сначала требуется выбрать соответствующий тип.

```cs
var orderId = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New).Id;
var paymentType = PluginContext.Operations.GetPaymentTypes().Single(i => i.Id == Guid.Parse("fabcf499-9485-4f6f-af0c-d09bed6d96ba"));
var credentials = PluginContext.Operations.GetCredentials();

var order = PluginContext.Operations.GetOrders().Single(o => o.Id == orderId);
PluginContext.Operations.PayOrderAndPayOutOnUser(credentials, order, paymentType, order.ResultSum);
```

Комментарии:
- На пользователя, от чьего имени была выполнена операция оплаты `IOperationService.PayOrder` или `IOperationService.PayOrderAndPayOutOnUser`, оформляется фискальное изъятие, т.к. оплата была произведена фискальным типом.

Возврат оплаты и возврат заказов через по инициативе плагина не предусмотрен, он должен выполняться со стационарных терминалов iikoFront

### Проведение оплаты

#### Добавление в заказ оплаты, проведенной на внешней стороне
В некоторых случаях требуется добавить такой элемент оплаты в заказ, обработка которого уже выполнена вне iikoFront.
Для этого используется метод `AddExternalPaymentItem`, которому в параметре `isProcessed` передается значение `true`.
В данном случае iikoFront считает, что необходимые транзакции, связанные с элементом оплаты, были выполнены вовне.
Поэтому со своей стороны не предпринимает действий по обработке и помечает данный элемент оплаты проведенным.

##### Пример
```cs
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == orderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x => x.Kind == PaymentTypeKind.Cash);
PluginContext.Operations.AddExternalPaymentItem(150, true, null, paymentType, order, PluginContext.Operations.GetCredentials());
```

![cash](../../img/payment/api_cashExternalProcessed.png)

#### Добавление в заказ проведенной оплаты и превращение ее в предоплату iikoFront

##### Пример
```cs
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x > x.Kind == PaymentTypeKind.Card && x.Name.ToUpper() == "DINERS");
var additionalData = new CardPaymentItemAdditionalData { CardNumber  "123456" };
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddExternalPaymentItem(150, true, additionalData, paymentType, order, credentials);
order = PluginContext.Operations.GetOrderById(order.Id);
PluginContext.Operations.ProcessPrepay(credentials, order, paymentItem);
```
![card](../../img/payment/api_cardExternalPrepay.png)

## Удаление оплат

- [IEditSession.DeletePaymentItem](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_DeletePaymentItem.htm) - удалить оплату

- [IEditSession.DeleteExternalPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_DeleteExternalPaymentItem.htm) - удалить внешнюю оплату

- [IEditSession.DeletePreliminaryPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_DeletePreliminaryPaymentItem.htm) - удалить предварительную оплату _(имеет смысл только для доставочного заказа)_

##### Пример

Удаление всех внешних элементов оплаты из заказа
```cs
var paymentItems = operationService.GetPaymentsByOrder(order).Where(i => .IsExternal);
foreach (var paymentItem in paymentItems)
    operationService.DeleteExternalPaymentItem(paymentItem, order, сredentials);
```

Больше примеров можно найти в проекте SDK SamplePaymentPlugin.