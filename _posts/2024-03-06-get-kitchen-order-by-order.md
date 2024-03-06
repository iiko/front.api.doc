---
title: Получение кухонного заказа по обычному заказу
layout: default
---

В API V9Preview1 добавлен метод [`TryGetKitchenOrderByOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_TryGetKitchenOrderByOrder.htm) позволяющий вернуть кухонный заказ для обычного заказа. В случае, если кухонный заказ не был создан для этого заказа, будет возвращено значение `null`.