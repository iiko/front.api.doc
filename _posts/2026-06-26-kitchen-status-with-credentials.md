---
title: Изменение статусов кухонного заказа от имени пользователя
layout: default
tags: v10 v10preview2
---

Начиная с API V10Preview2 у методов изменения статусов кухонного заказа появились перегрузки, принимающие [`ICredentials`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Security_ICredentials.htm). Такие методы выполняют операцию от имени авторизованного сотрудника, а не от имени системы.

```cs
void SetKitchenOrderProcessingStatus(IKitchenOrder order, ICredentials credentials, KitchenOrderProcessingStatus? newStatus = null);
void SetKitchenOrderProcessingStatus(Guid kitchenOrderId, ICredentials credentials, KitchenOrderProcessingStatus? newStatus = null);

bool ChangeKitchenOrderItemsProcessingStatus(IKitchenOrder order, IReadOnlyList<IKitchenOrderCookingItem> cookingItems, IReadOnlyList<IKitchenOrderModifierItem> separateModifiers, KitchenOrderItemProcessingStatus newStatus, ICredentials credentials);
bool ChangeKitchenOrderItemsProcessingStatus(Guid kitchenOrderId, IReadOnlyList<IKitchenOrderCookingItem> cookingItems, IReadOnlyList<IKitchenOrderModifierItem> separateModifiers, KitchenOrderItemProcessingStatus newStatus, ICredentials credentials);
```

Обратите внимание: в `SetKitchenOrderProcessingStatus` параметр `credentials` идёт вторым, а в `ChangeKitchenOrderItemsProcessingStatus` — последним.

### Права

Сотрудник, от имени которого выполняется операция, должен иметь право `CAN_CREATE_KITCHEN_ORDERS` — то же, что требуется для создания кухонного заказа. Если права нет, будет выброшено исключение [`PermissionDeniedException`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Exceptions_PermissionDeniedException.htm). Подробнее о проверке прав — в статье [Проверка прав]({{ site.baseurl }}/articles/ru/CheckingPermissions.html).

`ICredentials` можно получить, например, методом `AuthenticateByPin`.

### Зачем это нужно

Сотрудник, изменивший статус, сохраняется в iikoFront и передаётся в события изменения статусов приготовления. Это позволяет кухонным экранам (например, WebKDS) фиксировать, кто именно взял блюдо в работу, приготовил или подал его.

Старые перегрузки без `ICredentials` по-прежнему доступны и работают как раньше: права не проверяются, сотрудник не фиксируется.

### См. также

* [Кухонные заказы]({{ site.baseurl }}{% post_url 2019-11-27-change-kitchen-orders %})
* [Передача экрана и сотрудника в события приготовления]({{ site.baseurl }}{% post_url 2026-11-06-kitchen-status-screen-id %})
