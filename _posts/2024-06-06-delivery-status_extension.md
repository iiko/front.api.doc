---
title: Новые статусы доставки в API
layout: default
tags: v9
---

В [`DeliveryStatus`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Brd_DeliveryStatus.htm) добавлены новые статусы:

* **CookingStarted** - приготовление начато
* **CookingCompleted** - приготовлено
* **Packed** - собрано

Добавлено свойство [`PackedStatusOnCookingEnabled`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Organization_IRestaurant_PackedStatusOnCookingEnabled.htm) в [`IRestaurant`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Organization_IRestaurant.htm) для проверки включения процесса сборки.

```csharp
var delivery = order as IDeliveryOrder;
if (delivery != null)
{
    switch (delivery.DeliveryStatus)
    {
        case DeliveryStatus.CookingStarted:
            // Обработка начала приготовления
            break;
        case DeliveryStatus.Packed:
            // Обработка статуса сборки
            break;
    }
}
```

### См. также

* [`IDeliveryOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm)
        case DeliveryStatus.Packed:
            // Обработка сборки заказа
            break;
    }
}
```

### См. также

* [`DeliveryStatus`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Brd_DeliveryStatus.htm)
* [`IDeliveryOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm)
* [`IRestaurant`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Organization_IRestaurant.htm)
