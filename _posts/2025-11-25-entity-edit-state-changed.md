---
title: Добавлено событие EntityEditStateChanged
layout: default
tags: v9preview8
---

В [`INotificationService`](https://iiko.github.io/front.api.sdk/v9/html/Properties_T_Resto_Front_Api_INotificationService.htm) добавлено событие [`EntityEditStateChanged`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_EntityEditStateChanged.htm).

Сигнатура события:

```csharp
IObservable<IEntityEditStateChangedInfo> EntityEditStateChanged { get; }
```

Событие уведомляет об изменении состояния редактирования сущностей.

Параметр уведомления [`IEntityEditStateChangedInfo`](https://iiko.github.io/front.api.sdk/v9/html/Properties_T_Resto_Front_Api_Data_Common_IEntityEditStateChangedInfo.htm) содержит следующие свойства:

- `EntityIdAndTypes` — последовательность идентификаторов и типов сущностей. Каждый элемент [`IEntityIdAndType`](https://iiko.github.io/front.api.sdk/v9/html/Properties_T_Resto_Front_Api_Data_Common_IEntityIdAndType.htm) содержит:
  - `Id` — идентификатор сущности;
  - `Type` — тип сущности ([`EditStateChangedEntityType`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Common_EditStateChangedEntityType.htm)): `Order` (заказ), `Delivery` (доставка) или `Reserve` (резерв или банкет);
- `IsEditing` — `true`, если сущности редактируются, иначе `false`;
- `LockedUserId` — идентификатор пользователя, который начал редактирование сущности, или `Guid.Empty`, если редактирование завершено;
- `LockedTerminalId` — идентификатор терминала, на котором началось редактирование сущности, или `Guid.Empty`, если редактирование завершено.
