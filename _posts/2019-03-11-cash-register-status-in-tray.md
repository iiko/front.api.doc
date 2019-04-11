---
title: Добавлен параметр фискального регистратора  
layout: default
---
В [`CashRegisterDriverParameters`](http://iiko.github.io/front.api.sdk/v6/html/Properties_T_Resto_Front_Api_V6_Data_Device_Settings_CashRegisterDriverParameters.htm) добавлено свойство `IsRegisterStatusSupported`.
Если задать `IsRegisterStatusSupported = true`, то iikoFront будет периодически вызывать [`ICashRegister.GetCashRegisterStatus()`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Devices_ICashRegister_GetCashRegisterStatus.htm) с [полями](http://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Device_Tasks_CashRegisterStatusField.htm) `SessionStatus` и `RestaurantMode`.
Результаты вызова демонстрироваться в трее iikoFront.