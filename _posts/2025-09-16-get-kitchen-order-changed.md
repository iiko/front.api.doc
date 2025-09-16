---
title: Улучшения для события KitchenOrderChanged
layout: default
tags: v9preview7 v9
---

Для разработчиков плагинов появилась возможность напрямую получать [`ExternalData`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_ExternalData.htm) в объекте [`IKitchenOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrder.htm) при срабатывании события KitchenOrderChanged, которое теперь переименовано в [`GetKitchenOrderChanged`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_INotificationService_GetKitchenOrderChanged.htm).

Если требуется сохранить прежнее поведение уведомления, достаточно передать опциональный флаг `false` в аргумент `includeExternalData` метода.

Теперь разработчики могут получать данные из [`IKitchenOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrder.htm).[`ExternalData`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_ExternalData.htm) сразу, без дополнительных запросов к API. Это повышает производительность за счёт сокращения числа вызовов и упрощает работу с [`ExternalData`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_ExternalData.htm).