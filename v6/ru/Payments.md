---
title: Оплата заказа
layout: default
---
## Добавление оплат
Для добавления оплаты в заказ существуют методы

- [IEditSession.AddPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/Overload_Resto_Front_Api_V6_Editors_IEditSession_AddPaymentItem.htm) - добавить оплату

- [IEditSession.AddPreliminaryPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/Overload_Resto_Front_Api_V6_Editors_IEditSession_AddPreliminaryPaymentItem.htm) - добавить предварительную оплату в доставочный заказ

- [IEditSession.AddExternalPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/Overload_Resto_Front_Api_V6_Editors_IEditSession_AddExternalPaymentItem.htm) - добавить внешнюю оплату

Также можно использовать одноименные [методы](https://iiko.github.io/front.api.sdk/v6/html/Methods_T_Resto_Front_Api_V6_Extensions_OperationServiceExtensions.htm) сервиса операций-расширений, в которых неявно создаваётся сессия редактирования.

Отличие в необходимости выполнения нескольких действий на заказом. Если помимо добавления оплаты требуется, например, добавить гостя к заказу, то нужно использовать методы в рамках сессии редактирования.

###### Ограничения добавления оплат:
Платеж может быть добавлен в заказ только если заказ находится в статусе новый(`New`) или пречек(`Bill`), иначе метод выбрасывает исключение `ConstraintViolationException`. Кроме того нельзя добавить в заказ несколько оплат одного типа.

##### Примеры

1. Добавить в заказ оплату наличными
```cs
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == rderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x => x.Kind == aymentTypeKind.Cash);
var credentials = PluginContext.Operations.GetCredentials();
var paymentItem = PluginContext.Operations.AddPaymentItem(100m, null, paymentType, order);
```
2. Добавить в доставочный заказ оплату наличными
```cs
var deliveryOrder = PluginContext.Operations.GetDeliveryOrders().Last(o => o.Status== OrderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x => x.Kind == aymentTypeKind.Card && x.Name.ToUpper() == "DINERS");
var additionalData = new CardPaymentItemAdditionalData { CardNumber = "123456" };
PluginContext.Operations.AddPreliminaryPaymentItem(150, additionalData, paymentType, deliveryOrder, PluginContext.Operations.GetCredentials());
```
3. Добавить в заказ внешнюю непроведенную оплату
```cs
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == rderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x => x.Kind == aymentTypeKind.Card && x.Name.ToUpper() == "DINERS");
var additionalData = new CardPaymentItemAdditionalData { CardNumber = "123456" };
PluginContext.Operations.AddExternalPaymentItem(150, false, additionalData, paymentType, order, PluginContext.Operations.GetCredentials());
```

### Проведение оплаты

#### Добавление в заказ оплаты, проведенной на внешней стороне

В некоторых случаях требуется добавить такую оплату в заказ, обработка которой уже выполнена вне iikoFront. Для этого используется метод `AddExternalPaymentItem`, которому в параметре isProcessed передается значение `true`. В данном случае iikoFront не предпринимает действий по обработке оплаты и помечает, что данная оплата проведена.

                        **TODO** скриншот

##### Пример
```cs
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == rderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().Last(x => x.Kind == aymentTypeKind.Cash);
PluginContext.Operations.AddExternalPaymentItem(150, true, null, paymentType, order, PluginContext.Operations.GetCredentials());
```

#### Добавление в заказ непроведенной оплаты и ее проведение


```cs

```

## Оплата заказа

### Оплата стандартным типом оплаты
Пусть, существует `IOrder order`, который необходимо оплатить наличными на всю сумму заказа и закрыть заказ в iikoFront. 
Для этого нужно выбрать соответствующий paymentType. Затем вызывается метод `IOperationService.PayOrderAndPayOutOnUser`. Здесь заказ оплачивается наличными на всю сумму заказа:
```cs
var paymentType = operationService.GetPaymentTypesToPayOutOnUser().First(x => x.IsCash);
operationService.PayOrderAndPayOutOnUser(credentials, order, paymentType, order.ResultSum);
```
В результате на главной кассе (в кассовую смену главной кассы) заказ закроется, распечатаются все необходимые квитанции и фискальный чек, а сам заказ окажется в закрытых в iikoFront.

### Оплата плагинным типом оплаты

Для оплаты заказа плагинным типом оплаты требуется выбрать соответствующий тип

## Удаление оплат

- [IEditSession.DeletePaymentItem](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_DeletePaymentItem.htm) - удалить оплату

- [IEditSession.DeletePreliminaryPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_DeletePreliminaryPaymentItem.htm) - удалить предварительную оплату доставочного заказа

- [IEditSession.DeleteExternalPaymentItem](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_DeleteExternalPaymentItem.htm) - удалить внешнюю оплату

##### Пример

Удалить все внешние оплаты из заказа
```cs
priviate void DeleteExternalPaymentItems()
{
    var paymentItems = operationService.GetPaymentsByOrder(order).Where(i => i.IsExternal);
    foreach (var paymentItem in paymentItems)
        operationService.DeleteExternalPaymentItem(paymentItem, order, сredentials);
}
```

Больше примеров можно найти в проекте SDK SamplePlugin.