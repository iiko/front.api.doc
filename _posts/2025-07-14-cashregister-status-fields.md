---
title: Поля статуса ККТ и фискального накопителя
layout: default
tags: V9
---
Добавлены и уточнены поля в [`CashRegisterStatusField`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_CashRegisterStatusField.htm) для более точного представления информации о ККТ и фискальном накопителе.

**Новые поля, относящиеся к ККТ:**

- [`SerialNumber`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_CashRegisterStatusField_SerialNumber.htm) — серийный (заводской) номер ККТ, присваивается производителем. Остаётся постоянным на протяжении всего срока службы устройства
- [`RegistrationNumber`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_CashRegisterStatusField_RegistrationNumber.htm) — регистрационный номер ККТ, присваивается при постановке на учёт в налоговом органе. Может изменяться при перерегистрации
- [`FiscalModuleSerialNumber`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_CashRegisterStatusField_FiscalModuleSerialNumber.htm) — серийный номер фискального накопителя (ФН), присваивается производителем криптографического устройства
- [`FiscalModuleActivationDate`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_CashRegisterStatusField_FiscalModuleActivationDate.htm) — дата активации текущего фискального модуля (обычно соответствует дате фискализации)
- [`FiscalModuleExpirationDate`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_CashRegisterStatusField_FiscalModuleExpirationDate.htm) — дата окончания срока действия фискального модуля
- [`FiscalModuleWarnings`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_CashRegisterStatusField_FiscalModuleWarnings.htm) — список предупреждений о состоянии ФН (не блокирующих работу), см. [`FiscalModuleWarningCode`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_FiscalModuleWarningCode.htm)
- [`FiscalModuleErrors`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_CashRegisterStatusField_FiscalModuleErrors.htm) — список ошибок состояния ФН (блокирующих дальнейшую работу), см. [`FiscalModuleErrorCode`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_FiscalModuleErrorCode.htm)

Это позволяет интеграторам получать полную и однозначную информацию о статусе ККТ и фискального накопителя для сервисного обслуживания, диагностики и соблюдения требований налогового законодательства.

