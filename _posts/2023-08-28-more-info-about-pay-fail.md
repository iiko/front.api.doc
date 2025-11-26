---
title: Больше подробностей о неуспешной оплате
layout: default
tags: v8preview7 v8
---

В API V8Preview7 стало еще удобнее анализировать ошибки оплаты.

Методы [`PayOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_PayOrder.htm) и [`PayOrderAndPayOutOnUser`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_PayOrderAndPayOutOnUser.htm)
могут генерировать эксепшн [`PaymentActionFailedException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedException.htm)
в случае, если при обработке оплаты возникла ошибка.
При этом в распоряжении разработчиков плагинов было только сообщение об ошибке
[`Exception.Message`](https://learn.microsoft.com/en-us/dotnet/api/system.exception.message),
с которым неудобно работать и классифицировать.

В новой версии в [`PaymentActionFailedException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedException.htm)
было добавлено свойство [`Reason`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Exceptions_PaymentActionFailedException_Reason.htm)
— классифицируемая причина ошибки, которая не может быть `null`, если эксепшн был выброшен из методов `PayOrder` или `PayOrderAndPayOutOnUser`.
При этом [`Reason`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Exceptions_PaymentActionFailedException_Reason.htm)
может принимать такие значения [`PaymentActionFailedExceptionReason`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedExceptionReason.htm):

```
/// <summary>
/// Reason for throwing <see cref="PaymentActionFailedException"/>.
/// </summary>
[PublicAPI]
public enum PaymentActionFailedExceptionReason
{
 OrderNotFound,
 CannotLockOrder,
 OrderStatusIsNotOpened,
 BanquetOrderNotSupported,

 DeliveryOrderStatusIsUnconfirmed,
 DeliveryOrderHasPurchases,
 DeliveryOrderPrepayAndCloseOnDifferentTerminalNotSupported,

 PayInTypeIsIncorrect,
 PayOutTypeIsIncorrect,
 PayOutOnUserFailed,

 CafeSessionNotFound,
 CashRegisterNotFound,
 OnlyVirtualCashRegisterForPurchasesSupported,

 UserNotFound,
 UserPersonalSessionNotOpened,
 NoUserPermissionsToPayAsWaiter,
 NoUserPermissionsToPayOthersOrder,
 NoUserPermissionsToApprovePointsAccural,
 UserCashDrawerNotFound,

 PaymentTypeNotSpecified,
 PaymentTypeNotConfigured,
 UncombinablePaymentTypes,
 UncombinablePaymentTypesFiscalNonFiscal,
 AutomaticPaymentTypeNotFound,
 NotProcessedNotSilentPaymentsNotSupported,
 PayOrderFailed,
 CannotPrintOrder,
 CannotEditStopList,
 OrderBillOperationFailed,
 PaymentsProcessingCanceled,
 PaymentsProcessingFailed,
 BeforeDoChequeOperationFailed,
 ChequeTaskProcessorFailed,
 CashRegisterOperationFailed,

 MoreThanOnePaymentsWithChange,
 ChangeSumEqualToPaymentsWithChangeSum,
 ChangeSumGreaterThanPaymentsWithChangeSum,

 PaymentSumNotEnough,
 PaymentSumNotIntegral,
 PaymentSumTooLarge,
 CashForChangeNotEnough,

 BillOrderBeforePayment,
 SplitOrderBeforePayment,

 CookingPlacesWithEmptyStores,
 TimePayProductsInOrder,

 ChequeSmsSendingNotSupported,
 ChequeEmailSendingNotSupported,
 ChequeSettlementPlaceNotSupported,
}
```

Из которых только

- `OrderBillOperationFailed`,
- `PaymentsProcessingCanceled`,
- `PaymentsProcessingFailed`,
- `BeforeDoChequeOperationFailed`,
- `ChequeTaskProcessorFailed`,
- `CashRegisterOperationFailed`

имеют указанное новое свойство [`PaymentActionFailedException.Details`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Exceptions_PaymentActionFailedException_Details.htm),
в котором будет сообщение эксепшена, генерируемое другим плагином в

- [`INotificationService.BeforeOrderBill`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_BeforeOrderBill.htm),
- [`IPaymentProcessor.PaySilently`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IPaymentProcessor_PaySilently.htm),
- [`INotificationService.BeforeDoCheque`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_BeforeDoCheque.htm),
- [`IChequeTaskProcessor.BeforeDoCheckAction`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Devices_IChequeTaskProcessor_BeforeDoCheckAction.htm),
- [`ICashRegister.DoCheque`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Devices_ICashRegister_DoCheque.htm).
