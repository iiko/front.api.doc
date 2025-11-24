---
title: Добавлен метод TryStartDeliveryEditing
layout: default
tags: v9preview8
---

Начиная с версии V9Preview8, в [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/Methods_T_Resto_Front_Api_IOperationService.htm) добавлен метод [`TryStartDeliveryEditing`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_TryStartDeliveryEditing.htm).

Сигнатура метода:

```csharp
bool TryStartDeliveryEditing(Guid deliveryOrderId);
```

Метод пытается начать редактирование заказа доставки. Возвращает `true`, если редактирование заказа доставки началось, иначе `false`. Доставка может не начать редактироваться в том случае, если редактирование заблокировано. Причина блокировки — доставка в данный момент редактируется на терминале или другим плагином.

**Важно:** метод может использоваться только внутри [`ExecuteContinuousOperation`](https://iiko.github.io/front.api.sdk/v9/html/Overload_Resto_Front_Api_Extensions_OperationServiceExtensions_ExecuteContinuousOperation.htm).

Параметры:
- `deliveryOrderId` — идентификатор заказа доставки.

Исключения:
- `EntityNotFoundException` — заказ доставки с указанным `deliveryOrderId` не найден;
- `InvalidOperationException` — метод `TryStartDeliveryEditing` может использоваться только с методом `ExecuteContinuousOperation`.
