---
title: IOperationService в AfterDoFfd11CorrectionOnPaymentOrderAction
layout: default
tags: V9Preview6 V9
---
Добавлен параметр [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm) в метод [`AfterDoFfd11CorrectionOnPaymentOrderAction`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Data_Cheques_IChequeTaskProcessor_AfterDoFfd11CorrectionOnPaymentOrderAction.htm) интерфейса [`IChequeTaskProcessor`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Cheques_IChequeTaskProcessor.htm), по аналогии с [`AfterDoCheckAction`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Data_Cheques_IChequeTaskProcessor_AfterDoCheckAction.htm).

Это позволяет внешним плагинам корректно работать с операциями в контексте коррекции ФФД 1.1 при оплате заказа. Использование [`PluginContext.Operations`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_PluginContext_Operations.htm) в этом методе могло приводить к [`EntityInUseException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_EntityInUseException.htm) при сохранении данных в [`ExternalData`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrder_ExternalData.htm), так как метод вызывается в ограниченном контексте после [`PayOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PayOrder.htm) из [`ExecuteContinuousOperation`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_ExecuteContinuousOperation.htm).

