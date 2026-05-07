---
title: Новые методы MoveOrderItemsToAnotherGuest и MoveOrderItemsToAnotherOrder в API V10 preview 2
layout: default
tags: v10preview2 v10
---

Начиная с API V10Preview2 в `IEditSession` и `IOperationService` добавлены новые методы для переноса **комбо** между гостями и заказами:

- `MoveOrderItemsToAnotherGuest(IReadOnlyList<IOrderRootItem> products, IOrderGuestItem destinationGuest, IOrder order, ...)`
- `MoveOrderItemsToAnotherOrder(IReadOnlyList<IOrderRootItem> orderItems, IOrder sourceOrder, IOrderGuestItem destinationGuest, IOrder destinationOrder, ...)`

Существующие методы `MoveOrderItemToAnotherGuest` и `MoveOrderItemToAnotherOrder` ([подробности]({{ site.baseurl }}{% post_url 2018-07-20-splite-and-move-order-items %})) переносят блюда по одному и **не поддерживают перенос комбо** — при попытке перенести блюдо, входящее в состав комбо, будет выброшено исключение.

Новые методы принимают список блюд, что позволяет передать все блюда комбо за один вызов и корректно перенести комбо целиком. Одиночные блюда (не входящие в состав комбо) также можно переносить через новые методы.