---
title: Доступ к ExternalData в событии KitchenOrderChanged
layout: default
tags: V9Preview7 V9
---
Добавлена возможность доступа к [`ExternalData`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_ExternalData.htm) в уведомлении [`KitchenOrderChanged`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_KitchenOrderChanged.htm).

Ранее при возникновении события `KitchenOrderChanged` объект `IKitchenOrder` не содержал внешних данных. Теперь внешние данные корректно загружаются и доступны сразу при получении уведомления.
