---
title: Ссылки на OrderItemId в ChequeSale
layout: default
tags: v9preview5 v9
---
Добавлено свойство [`OrderItemIds`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Cheques_ChequeSale_OrderItemIds.htm) в класс [`ChequeSale`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Cheques_ChequeSale.htm).

Свойство содержит список идентификаторов позиций заказа, связанных со строкой чека. Может содержать несколько элементов, если несколько строк в заказе объединяются в одну строку в чеке. Остается пустым для чеков, не привязанных к заказам, а также для чеков аванса.

```csharp
public class ChequeSale
{
    /// <summary>
    /// Список идентификаторов позиций заказа.
    /// Может содержать несколько элементов, если несколько строк в заказе объединяются в одну строку в чеке.
    /// Остаётся пустым для чеков, не привязанных к заказам, а также для чеков аванса.
    /// </summary>
    List<Guid> OrderItemIds { get; }
}
```

