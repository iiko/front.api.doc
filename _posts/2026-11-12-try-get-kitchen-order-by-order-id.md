---
title: Получение кухонного заказа по Id заказа (TryGetKitchenOrderByOrderId)
layout: default
tags: v10 v10preview2
---

Начиная с API V10Preview2 ([перевыпуск]({{ site.baseurl }}{% post_url 2026-11-16-v10preview2-rerelease %}), пакет 9.7.7022-alpha) в [`IOperationService`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_IOperationService.htm) добавлен метод [`TryGetKitchenOrderByOrderId`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_TryGetKitchenOrderByOrderId.htm):

```cs
[CanBeNull]
IKitchenOrder TryGetKitchenOrderByOrderId(Guid orderId);
```

Метод возвращает кухонный заказ, созданный для заказа с указанным идентификатором, либо `null`, если такого заказа нет или для него ещё не создан кухонный заказ.

Метод аналогичен существующему [`TryGetKitchenOrderByOrder`]({{ site.baseurl }}{% post_url 2024-03-06-get-kitchen-order-by-order %}), но принимает только идентификатор заказа. Если у плагина уже есть `Id` заказа (например, из нотификации), нет необходимости предварительно получать `IOrder`: это избавляет от лишнего запроса и передачи объекта заказа между процессами плагина и iikoFront.

Поведение `TryGetKitchenOrderByOrder` не изменилось: для `null` по-прежнему возвращается `null`.

### См. также

* [Кухонные заказы]({{ site.baseurl }}{% post_url 2019-11-27-change-kitchen-orders %})
