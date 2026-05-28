---
title: Изменение ИНН покупателя из плагина
layout: default
tags: v7
---

В API добавлена возможность изменения ИНН покупателя через поле `CustomerTin` в классе [`BeforeDoCheckActionResult`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Cheques_BeforeDoCheckActionResult.htm), который возвращает метод [`BeforeDoCheckAction`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IChequeTaskProcessor_BeforeDoCheckAction.htm) интерфейса [`IChequeTaskProcessor`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Devices_IChequeTaskProcessor.htm).

### Использование

```csharp
public class CustomChequeTaskProcessor : IChequeTaskProcessor
{
    public BeforeDoCheckActionResult BeforeDoCheckAction(ChequeTask chequeTask, IOrder order, 
        IOperationService operations)
    {
        return new BeforeDoCheckActionResult
        {
            CustomerTin = "1234567890", // Установка ИНН покупателя
            CashierName = "Иванов И.И.",
            Sales = chequeTask.Sales
        };
    }
}
```

### См. также

* [`IChequeTaskProcessor`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Devices_IChequeTaskProcessor.htm)
* [`BeforeDoCheckActionResult`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_BeforeDoCheckActionResult.htm)
* [`ChequeTask`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_Tasks_ChequeTask.htm)
