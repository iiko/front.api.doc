---
title: Добавлена возможность выбора устройства для печати чека «Счёт‎» 
layout: default
---
Начиная с версии iiko 6.4 в API V6 добавлена возможность явно указывать, куда будет печататься чек типа «Счёт‎». 

Чек типа «Счёт‎» используется в некоторых странах, например [в Белоруссии](https://ru.iiko.help/articles/how-to-iiko/fr-belarus) и Латвии.
Печать чеков типа «Счёт‎» поддерживают не все модели фискальных регистраторов. Для устройств написанных на [API Оборудования](https://iiko.github.io/front.api.doc/v6/ru/Devices.html) поддержка печати чеков типа «Счёт‎» включается через [`CashRegisterDriverParameters`](http://iiko.github.io/front.api.sdk/v6/html/Properties_T_Resto_Front_Api_V6_Data_Device_Settings_CashRegisterDriverParameters.htm) указанием `IsBillTaskSupported = true`.
Чек типа «Счёт‎» это команда [ICashRegister.DoBillCheque()](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Devices_ICashRegister_DoBillCheque.htm).
Конфигурации `IsBillTaskSupported = true` предполагает, что номер счёта обязателен в команде чека оплаты.
Поэтому в результатах команды `DoBillCheque` обязательно к заполнению поле `CashRegisterResult.BillNumber`.

В момент [печати пречека](https://ru.iiko.help/articles/iikofront-5-4/topic-48) ядро iikoFront опрашивает подписчиков *«На какой точке продаж печатать Счёт‎ для данного заказа?»*.
Регистрация маршрутизатора печати чеков типа «Счёт‎» осуществляется методом `IOperationService.RegisterBillChequeTaskResolver()`

- Метод принимает функцию с аргументами `IOrder` *"заказ"* и `bool` *"это возврат пречека"*.
- Функция должна вернуть `IPointOfSale`: ту точку продаж, на которую будет отправлена команда для чека типа «Счёт‎».
- Если функция вернёт `null` или выкинет исключение, то команда для чека типа «Счёт‎» не будет никуда отправляться.

Пример кода для примитивного случая, когда печать счёта должна происходить на фискальном регистраторе текущей машины: 

```cs
PluginContext.Operations.RegisterBillChequeTaskResolver(
    (order, isSrorno) =>
    {
        var pos = PluginContext.Operations.GetHostTerminalPointsOfSale().FirstOrDefault();
        PluginContext.Log.Info($"Bill for {order.Number}: {pos?.Name} - {pos?.Id}");
        return pos;
    });
```


