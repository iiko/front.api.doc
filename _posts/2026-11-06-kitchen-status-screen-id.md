---
title: Передача экрана и сотрудника в события приготовления (screenId)
layout: default
tags: v10 v10preview4
---

Начиная с API V10Preview4 у перегрузок методов изменения статусов кухонного заказа, принимающих [`ICredentials`]({{ site.baseurl }}{% post_url 2026-06-26-kitchen-status-with-credentials %}), появился необязательный параметр `screenId`:

```cs
void SetKitchenOrderProcessingStatus(IKitchenOrder order, ICredentials credentials, KitchenOrderProcessingStatus? newStatus = null, Guid? screenId = null);
void SetKitchenOrderProcessingStatus(Guid kitchenOrderId, ICredentials credentials, KitchenOrderProcessingStatus? newStatus = null, Guid? screenId = null);

bool ChangeKitchenOrderItemsProcessingStatus(IKitchenOrder order, IReadOnlyList<IKitchenOrderCookingItem> cookingItems, IReadOnlyList<IKitchenOrderModifierItem> separateModifiers, KitchenOrderItemProcessingStatus newStatus, ICredentials credentials, Guid? screenId = null);
bool ChangeKitchenOrderItemsProcessingStatus(Guid kitchenOrderId, IReadOnlyList<IKitchenOrderCookingItem> cookingItems, IReadOnlyList<IKitchenOrderModifierItem> separateModifiers, KitchenOrderItemProcessingStatus newStatus, ICredentials credentials, Guid? screenId = null);
```

`screenId` — идентификатор экрана (например, экрана кухонного дисплея), с которого изменён статус. iikoFront не генерирует и не интерпретирует это значение: оно принимается от плагина как есть.

### Как используются данные

Для каждого перехода статуса iikoFront запоминает сотрудника (из `ICredentials`) и `screenId` отдельно:

* для кухонного заказа — «Ожидание», «Готовится», «Готово», «Собрано», «Подано»;
* для блюда — начало приготовления (1–4 этапы), «Готово», «Подано».

Значения не перезаписывают друг друга: у статуса «Готовится» могут быть один экран и сотрудник, у статуса «Подано» — другие. При подаче заказа или блюда эти данные передаются на сервер вместе с событиями приготовления и становятся доступны в OLAP-отчёте по продажам (поля вида `<Статус>User` и `<Статус>ScreenId` в группах полей «приготовление заказа» и «приготовление блюда»).

### Обратная совместимость

Параметр необязательный, по умолчанию `null`. Если `screenId` не передан или используется перегрузка без `ICredentials`, соответствующие поля в событиях и в отчётах остаются пустыми, а в остальном поведение не меняется.

Существующий код, вызывающий эти методы, компилируется без изменений.

В более ранних версиях API `screenId` не передаётся; сотрудника, начиная с V10Preview2, можно передать через перегрузки с `ICredentials`.
