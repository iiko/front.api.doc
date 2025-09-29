---
title: Возможность произвольного округления суммы заказа
layout: default
---

В API V7 добавлен новый метод, [`IOperationService.RegisterCustomRoundingHandler`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_RegisterCustomRoundingHandler.htm), позволяющий регистрировать обработчик применения округления к заказу во фронте. 

Пример использования:

```
var toDispose =  PluginContext.Operations.RegisterCustomRoundingHandler(order =>
{
    // Можно придумать какое-то другое округление, например, чтобы округлялось до десятков копеек, или сумма всегда была кратна 5.
    // https://docs.microsoft.com/en-us/dotnet/api/system.math.round?view=netframework-4.7.2

    // Отбрасываем копейки всегда.
    int roundedResultSum = (int)order.ResultSum;
    decimal roundSum = roundedResultSum - order.ResultSum;
    return roundSum;
});
```
Если сумма возвращаемого округления равна 0, никакое округление не должно примениться.

Если в обработчике выкинуть какое-либо исключение, то применится округление, настроенное в беке.