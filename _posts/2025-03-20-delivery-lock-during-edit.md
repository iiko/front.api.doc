---
title: Блокировка доставки во время редактирования из плагина
layout: default
tags: v9
---

Добавлена возможность блокировки доставки на время редактирования из плагина для предотвращения конфликтов при одновременном редактировании через Front и веб Call-центр.

### Возможности

* Взятие блокировки через [`TryStartDeliveryEdititng`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_TryStartDeliveryEdititng.htm)
* Блокировка действует для всех терминалов группы
* Индикация в UI Front о блокировке плагином
* Автоматическое снятие при выходе из [`ExecuteContinuousOperation`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_ExecuteContinuousOperation.htm)

### Использование

Метод `TryStartDeliveryEdititng` можно использовать только внутри `ExecuteContinuousOperation`. Блокировка автоматически снимается при выходе из `ExecuteContinuousOperation`.

```csharp
PluginContext.Operations.ExecuteContinuousOperation(os =>
{
    var delivery = os.GetDeliveryOrders().Last();
    if (os.TryStartDeliveryEdititng(delivery.Id))
    {
        // Доставка заблокирована, можно редактировать
        var editSession = os.CreateEditSession();
        // Внести изменения
        os.SubmitChanges(editSession);
    }
    else
    {
        // Обработка ситуации, когда доставка уже заблокирована
    }
});
```

### См. также

* [`IOperationService.TryStartDeliveryEdititng`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_TryStartDeliveryEdititng.htm)
* [`IOperationService.ExecuteContinuousOperation`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_ExecuteContinuousOperation.htm)
* [`IDeliveryOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm)
