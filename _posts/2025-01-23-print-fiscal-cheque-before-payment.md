---
title: Печать фискального чека до оплаты заказа (ФЗ-54)
layout: default
tags: v9preview4 v9
---

Начиная с V9Preview4 добавилась возможность печатать фискальный чек до оплаты заказа:
[`PrintFiscalChequeBeforePaymentOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PrintFiscalChequeBeforePaymentOrder.htm).

Для успешного выполнения печати фискального чека до оплаты, необходимо выполнение условий:
- в заказе должно быть достаточно внесенных денежных средств
- в заказе должна присутствовать хотя бы одна фискализируемая оплата, для которой и будет распечатан фискальный чек
- заказ должен относиться к отделению, с включенной настройкой *"Раздельная печать фискального чека перед оплатой"*:
[`FiscalChequeBeforePaymentEnabled`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection_FiscalChequeBeforePaymentEnabled.htm).
- заказ должен быть еще не фискализированным:
[`IsFiscalizedBeforePayment`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrder_IsFiscalizedBeforePayment.htm)` = false`.

Также печать фискального чека до оплаты заказа недоступна для доставок, кроме режима самовывоза.

Перед оплатой заказа [`PayOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PayOrder.htm) или перед печатью фискального чека до оплаты заказа [`PrintFiscalChequeBeforePaymentOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PrintFiscalChequeBeforePaymentOrder.htm) сработает уведомление [`BeforeProceedOrderPayment`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_BeforeProceedOrderPayment.htm). Если один из подписавшихся плагинов бросит исключение `OperationCanceledException` добавление платежа будет отменено.

При печати фискального чека до оплаты, для заказа будет распечатан пречек, однако проведение оплат происходить не будет.

В случае успеха, заказ помечается *фискализированным*: [`IsFiscalizedBeforePayment`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrder_IsFiscalizedBeforePayment.htm).
Все оплаты заказа помечаются *фискализированными*: [`IsFiscalizedLocally`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Payments_IPaymentItem_IsFiscalizedLocally.htm).

В случае возникновения ошибки, фронт выдаст исключение с описанием ошибки: 
[`PrintFiscalChequeBeforePaymentOrderFailed`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedExceptionReason.htm).

#### Закрытие фискализированного заказа

Для заказа может быть *единожды* распечатан фискальный чек до оплаты.
Далее фискализированный заказ можно закрыть: [`PayOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PayOrder.htm).
На этом этапе все непроведенные оплаты будут проведены. 
Если фискализированный заказ был изменен, тогда при выполнении `IOperationService.PayOrder` для заказа будут распечатаны:
- чек коррекции возврата прихода и чек коррекции прихода (для ФФД 1.1 и выше)
- чек возврата прихода и чек прихода согласно актуальному состоянию заказа (ФФД 1.05).

#### Чек коррекции
Фискализированный заказ считается измененным, если выполнено хотя бы одно из условий:
- произошла отмена пречека фискализированного заказа. Т.е. для заказа был распечатан фискальный чек до оплаты, а затем отменен пречек. 
- изменение одной или несколько сумм по чеку: наличными / электронными (безналичными) / предоплатой / постоплатой (в кредит) / встречным предоставлением. Например, при смене одной электронной оплаты на другую электронную оплату той же суммы, чек коррекции печататься не будет, т.к. с точки зрения фискального чека это не является изменением. 

Для отслеживания фискальной операции чек коррекции (для ФФД 1.1 и выше), которая происходит при оплате измененного фискализированного заказа, используйте:
- [`BeforeDoFfd11CorrectionOnPaymentOrderAction`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_IChequeTaskProcessor_BeforeDoFfd11CorrectionOnPaymentOrderAction.htm) - команда, которая выполняется перед операцией чек коррекции. Здесь можно проверить возможность выполнения операции, а также добавить в чек дополнительную информацию.
- [`AfterDoFfd11CorrectionOnPaymentOrderAction`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_IChequeTaskProcessor_AfterDoFfd11CorrectionOnPaymentOrderAction.htm) - команда, которая выполняется после операции чек коррекции. Основное ее назначение — выполнить завершающие действия после печати чека коррекции, где аргумент [`result`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_Results_PostResult.htm) описывает результат выполнения операции на ФР.

#### Удаление фискализированного заказа
При удаленнии фискализированного заказа будет распечатан фискальный чек возврата.

Примеры вызовов [`PrintFiscalChequeBeforePaymentOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PrintFiscalChequeBeforePaymentOrder.htm) можно найти в проекте SDK SamplePaymentPlugin.