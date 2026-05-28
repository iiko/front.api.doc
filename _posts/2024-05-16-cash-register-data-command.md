---
title: Команда GetCashRegisterData и статус NearPaperEnd
layout: default
tags: v9 v9preview3
---

В Front API добавлена команда [`GetCashRegisterData`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetCashRegisterData.htm) для получения статуса кассового аппарата без выполнения операций печати.

Также добавлен статус [`NearPaperEnd`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_Tasks_CashRegisterStatusField.htm) в [`CashRegisterStatusField`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_Tasks_CashRegisterStatusField.htm) - индикатор приближающегося окончания бумаги.

```csharp
// Получение статуса кассового аппарата
var cashRegisterData = PluginContext.Operations.GetCashRegisterData(cashRegister);

if (cashRegisterData.Status.Contains(CashRegisterStatusField.NearPaperEnd))
{
    // Предупредить пользователя о необходимости замены рулона
}
```

### См. также

* [`ICashRegister`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Devices_ICashRegister.htm)
