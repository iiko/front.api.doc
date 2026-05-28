---
title: Фискализация оплаты банкетных заказов через API
layout: default
tags: v9
---

Добавлена возможность фискализации и оплаты банкетных заказов через API, обеспечивая соответствие поведения API возможностям работы через UI Front.

Ранее при работе с банкетными заказами через API возникали ошибки. Теперь поведение для банкетов соответствует возможностям работы через UI Front:

* При вызове [`PrintFiscalChequeBeforePaymentOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PrintFiscalChequeBeforePaymentOrder.htm) для нефискализированного банкета с достаточной суммой оплаты заказ переходит в пречек и фискализируется
* Последующий вызов [`PayOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PayOrder.htm) приводит к закрытию заказа
* Для уже фискализированных банкетов вызов [`PayOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PayOrder.htm) успешно закрывает заказ

### См. также

* [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm)
* [IOrder](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IOrder.htm)
