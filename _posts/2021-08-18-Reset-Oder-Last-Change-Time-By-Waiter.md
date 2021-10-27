---
title: Возможность сброса времени последнего изменения заказа
layout: default
---

В API V7 добавлен метод [`ResetOderLastChangeTimeByWaiter()`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_ResetOderLastChangeTimeByWaiter.htm),
позволяющий сбросить время, когда официант в последний раз изменял заказ, на текущее, позволяя тем самым снять с заказа проблему _Официант не подходил к столу более N минут_.