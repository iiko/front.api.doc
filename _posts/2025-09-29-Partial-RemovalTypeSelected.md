---
title: Способ списания при полном, частичном возврате или удалении заказа
layout: default
tags: v9preview7 v9
---
В API V9Preview7 появилась возможность получить способ списания при полном, частичном возврате или удалении заказа.

Были добавлены два новых уведомления:
- [`RemovalTypeSelected`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_RemovalTypeSelected.htm) используется для уведомления плагина о причине списания заказа над которым производится полный возврат или удаление сторнированного заказа. Если один из подписавшихся плагинов бросит исключение `OperationCanceledException` дальнейшее операция будет отменена.
- [`PartialOrderItemsRemovalTypeSelected`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_INotificationService_PartialOrderItemsRemovalTypeSelected.htm) используется для уведомления плагина о причине списания когда выполняется частичный возврат позиций в заказе. Если один из подписавшихся плагинов бросит исключение `OperationCanceledException` дальнейшее операция будет отменена.