---
title: Работа с фискальным регистратором из API V8Preview6
layout: default
---

В API V8Preview6 добавлены методы для работы непостредственно с ФР

Открытие кассовой смены на ФР
[`OpenCashRegisterSession`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_OpenCashRegisterSession.htm)
Поддерживается только при наличии в лицензии модуля 21052601. Для корректной работы устройство должно быть запущено и смена на устройстве должна быть закрыта.
Для выполнения операции пользователь должен обладать разрешением CAN_EXECUTE_FISCAL_REGISTER_COMMANDS.

Закрытие кассовой смены на ФР(печать Z отчета)
[`DoZReport`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_DoZReport.htm)
Поддерживается только при наличии в лицензии модуля 21052601. Для корректной работы устройство должно быть запущено и смена на устройстве должна быть закрыта.
Для выполнения операции пользователь должен обладать разрешением CAN_EXECUTE_FISCAL_REGISTER_COMMANDS.
Если параметр [`printCashRegisterTape`] ежедневный журнал будет напечатан вместе с Z-отчетом.

Открытие денежного ящика 
[`CashRegisterOpenDrawer`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CashRegisterOpenDrawer.htm)
Для выполнения операции пользователь должен обладать разрешением CAN_EXECUTE_FISCAL_REGISTER_COMMANDS.
В данной версии поддерживается только открытие денежного ящика подключенного к ФР, работа с внешним денежным ящиком не поддерживается.

Получение текущего статуса ФР 
[`GetCashRegisterStatus`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetCashRegisterStatus.htm)
Для выполнения операции пользователь должен обладать разрешением CAN_EXECUTE_FISCAL_REGISTER_COMMANDS.
Метод принимает список [`CashRegisterStatusField`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_Tasks_CashRegisterStatusField.htm)
и заполняет свойства возвращаемого объекта [`CashRegisterStatus`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_Results_CashRegisterStatus.htm) соответствующие переданным в списке.
При передаче пустого списка возвращается дефолтный объект [`CashRegisterStatus`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_Results_CashRegisterStatus.htm)
 
Возвращает дополнительные поддерживаемые операции
[`GetQueryInfo`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetQueryInfo.htm)
Возвращает дополнительные поддерживаемые операции [`QueryInfoResult.SupportedCommands`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Results_QueryInfoResult_SupportedCommands.htm)
которые могут быть вызваны  спомощью метода [`CashRegisterDirectIO`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CashRegisterDirectIO.htm)

Выполнение дополнительной операции
[`CashRegisterDirectIO`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CashRegisterDirectIO.htm)
Для выполнения операции пользователь должен обладать разрешением CAN_EXECUTE_FISCAL_REGISTER_COMMANDS.
Позволяет выполнить дополнительную операцию, нужно передать в параметре [`CommandExecute`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_Tasks_CommandExecute.htm)
название дополнительной операции [`Name`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Tasks_CommandExecute_Name.htm) и значения параметров [`Parameters`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Tasks_CommandExecute_Parameters.htm)
Этот метод используется для выполнения операций специфических для конкретной модели ФР, не соответствующих какому либо методу общего интерфейса[`ICashRegister `](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Devices_ICashRegister.htm)
 
Запуск ФР
[`CashRegisterStart`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CashRegisterStart.htm)
 
Остановка ФР
[`CashRegisterStop`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CashRegisterStop.htm)

Проверка кода маркировки 
[`CheckFfd12Marking`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CheckFfd12Marking.htm)
Для выполнения операции пользователь должен обладать разрешением CAN_EXECUTE_FISCAL_REGISTER_COMMANDS.
Проверяет код маркировки в формате ФФД 1.2 позиции чека [`ChequeSale`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_Tasks_ChequeSale.htm)
У параметра должно быть не пустым свойство [`Ffd12`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_Tasks_ChequeSale_Ffd12.htm)