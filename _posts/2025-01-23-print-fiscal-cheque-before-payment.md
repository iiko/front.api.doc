---
title: Печать фискального чека до оплаты заказа (ФЗ-54)
layout: default
tags: v9preview4 v9
---

Начиная с V9Preview4 добавилась возможность печатать фискальный чек до оплаты заказа:
[`PrintFiscalChequeBeforePaymentOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PrintFiscalChequeBeforePaymentOrder.htm).

Для успешного выполнения печати фискального чека до оплаты, необходимо выполнение условий:
- в заказе должно быть достаточно внесенных денежных средств
- в заказе должна присутствовать хотя бы одна фискализируемая оплата, для которой и будет напечатан фискальный чек
- заказ должен относиться к отделению, с включенной настройкой *"Раздельная печать фискального чека перед оплатой"*:
[`FiscalChequeBeforePaymentEnabled`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection_FiscalChequeBeforePaymentEnabled.htm).
- заказ должен быть еще не фискализированным:
[`IsFiscalizedBeforePayment`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrder_IsFiscalizedBeforePayment.htm)` = false`.

Также печать фискального чека до оплаты заказа недоступна для доставок, кроме режима самовывоз.

При печати фискального чека до оплаты, для заказа будет выполнен пречек, однако проведение оплат происходить не будет.

В случае успеха, заказ помечается *фискализированным*: [`IsFiscalizedBeforePayment`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrder_IsFiscalizedBeforePayment.htm).
Все оплаты заказа помечаются *фискализированными*: [`IsFiscalizedLocally`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Payments_IPaymentItem_IsFiscalizedLocally.htm).

В случае возникновения ошибки, фронт выдаст исключение с описанием случившегося: 
[`PrintFiscalChequeBeforePaymentOrderFailed`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedExceptionReason.htm).

#### Закрытие фискализированного заказа

Для заказа может быть *единожды* напечатан фискальный чек до оплаты.
Далее фискализированный заказ можно закрыть: [`PayOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PayOrder.htm).
На этом этапе все непроведенные оплаты будут проведены. 
Если фискализированный заказ был изменен, тогда при выполнении `IOperationService.PayOrder` для заказа будут напечатаны:
- фискальный чек коррекции возврата и прихода (для ФФД 1.1 и выше)
- фискальный чек возврата и прихода (для ФФД 1.0 и 1.05) согласно актуальному состоянию заказа.

Также при удаленнии фискализированного заказа будет напечатан фискальный чек возврата.

Примеры вызовов [`PrintFiscalChequeBeforePaymentOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PrintFiscalChequeBeforePaymentOrder.htm) можно найти в проекте SDK SamplePaymentPlugin.