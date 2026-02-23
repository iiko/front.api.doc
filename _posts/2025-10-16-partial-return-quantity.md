---
title: Передача количества позиций при частичном возврате
layout: default
tags: V9Preview7 V9
---
Добавлена передача количества позиций в уведомлении [`PartialOrderItemsRemovalTypeSelected`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_PartialOrderItemsRemovalTypeSelected.htm).

Ранее в методе не передавалось количество возвращаемых позиций, что было необходимо для корректной работы плагинов (например, `AlcoholMarkingPlugin`) при частичном возврате заказа.

Теперь сигнатура метода включает количество для каждой позиции:

```csharp
PartialOrderItemsRemovalTypeSelected(
    Guid orderId, 
    IReadOnlyCollection<(Guid itemId, decimal amount)> returnProductIdsWithAmounts, 
    Guid removalTypeId
);
```

Это позволяет плагинам точно определить, какое количество каждой позиции возвращается, и выполнить соответствующие операции во внешних системах (например, отмену списания маркированного товара).
