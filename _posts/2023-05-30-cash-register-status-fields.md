---
title: Добавление новых возможностей GetCashRegisterStatus.
layout: default
---

Добавлена возможность получения дополнительных свойств с помощью [`IOperationService.GetCashRegisterStatus`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetCashRegisterStatus.htm).

Новые добавленные поля:
* [`SerialNumber`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_SerialNumber.htm) - Серийный номер ФР
* [`SessionNumber`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_SessionNumber.htm) - Номер текущей сессии
* [`RefundsCount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_RefundsCount.htm) - Количество возвратов за смену
* [`RefundsSum`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_RefundsSum.htm)- Итог возвратов за смену
* [`CancelCount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_CancelCount.htm) - Количество отмен за смену
* [`CancelSum`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_CancelSum.htm) - Итог отмен за смену
* [`SalesCount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_SalesCount.htm) - Количество продаж за смену
* [`SalesSum`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_SalesSum.htm) - Итог продаж за смену
* [`SalesSumTotal`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_SalesSumTotal.htm) - Общий итог продаж ФР
* [`CashPaymentSum`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_CashPaymentSum.htm) - Итог наличных продаж ФР за смену
* [`NonCashPaymentsSum`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_CashRegisterStatus_NonCashPaymentsSum.htm) - Итог безналичных продаж ФР за смену

Для получения данных необходимо в [`GetCashRegisterStatusTask.StatusFields`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Tasks_GetCashRegisterStatusTask_StatusFields.htm) передать дополнительные значения, соответствующие нужным данным. 
Список всех возможных значений - [`CashRegisterStatusField`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_Tasks_CashRegisterStatusField.htm).