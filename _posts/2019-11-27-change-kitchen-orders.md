---
title: Добавлена возможность переключать статусы блюд кухонных заказов
layout: default
---

Начиная с V7 появится возможность переключать статусы блюд кухонных заказов. Это позволит реализовать интерактивный кухонный экран (KDS), либо альтернативное управление штатным кухонным экраном (например, голосовое — «окей, айка, пельмени для десятого заказа приготовлены»), либо автоматически переключать статусы блюд по некоему внешнему алгоритму.

Единицами приготовления на кухне являются блюда ([`IKitchenOrderCookingItem`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrderCookingItem.htm)) и готовящиеся отдельно от своих блюд модификаторы ([`IKitchenOrderModifierItem`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrderModifierItem.htm), [`IsSeparate`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderModifierItem_IsSeparate.htm)).
Задать им новый статус можно с помощью метода [`ChangeKitchenOrderItemsProcessingStatus`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_ChangeKitchenOrderItemsProcessingStatus.htm). Например, отметить блюдо приготовленным можно так:

```cs
PluginContext.Operations.ChangeKitchenOrderItemsProcessingStatus(
    kitchenOrder, // кухонный заказ, для блюд или модификаторов которого хотим указать новый статус
    new[] { cookingItem }, // список блюд, для которых хотим указать новый статус
    Array.Empty<IKitchenOrderModifierItem>(), // список модификаторов, для которых хотим указать новый статус
    KitchenOrderItemProcessingStatus.Processed); // новый статус
```

Модификаторы, готовящиеся вместе с блюдом, своего статуса не имеют, напрямую ими управлять нельзя, передавать их в метод `ChangeKitchenOrderItemsProcessingStatus` не следует, их статус будет меняться вместе со статусом блюда.