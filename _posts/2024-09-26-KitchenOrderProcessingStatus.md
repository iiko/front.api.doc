---
title: Статус кухонного заказа
layout: default
tags: v9preview3 v9
---

В V9Preview3 в [кухонный заказ](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrder.htm) было добавлено поле [ProcessingStatus](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_ProcessingStatus.htm), а также для этого было введено перечисление [KitchenOrderProcessingStatus](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Kitchen_KitchenOrderProcessingStatus.htm). Данное поле описывает текущий статус кухонного заказа.

В стандартном(автоматическом) режиме данное поле будет равно статусу наименее приготовленного блюда заказа. Альтернативно, данный статус можно задавать вручную. Для этого был создан API метод [SetKitchenOrderProcessingStatus](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_SetKitchenOrderProcessingStatus.htm). Для каждого кухонного заказа режим задается отдельно. Чтобы вернуть заказ в автоматический режим передайте в [SetKitchenOrderProcessingStatus](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_SetKitchenOrderProcessingStatus.htm) в качестве значения статуса `null`.

Статус кухонного заказа на данный момент не влияет на статусы блюд или [внешний вид кухонного экрана](https://ru.iiko.help/articles/#!iikofront-8-9/topic-33), но он может быть полезен при работе с заказами доставки. Статус доставки напрямую зависит от статуса соответствующего кухонного заказа, а также не стоит забывать о [процессе сборки заказа](https://ru.iiko.help/articles/iikofront-8-9/iikosouschef1/a/h2_204041478).

**Таблица соответствия статусов кухонного заказа и доставки**

| Статус кухонного заказа | Статус доставки | Статус доставки при включенной сборке|
| ----------- | ----------- | ----------- |
| KitchenOrderProcessingStatus.Idle | CookingStarted | CookingStarted |
| KitchenOrderProcessingStatus.Processing1 | CookingStarted |  CookingStarted |
| KitchenOrderProcessingStatus.Processing2 | CookingStarted |  CookingStarted |
| KitchenOrderProcessingStatus.Processing3 | CookingStarted |  CookingStarted |
| KitchenOrderProcessingStatus.Processing4 | CookingStarted |  CookingCompleted | 
| KitchenOrderProcessingStatus.Processed | CookingCompleted |  Packed |
| KitchenOrderProcessingStatus.Served | CookingCompleted | Packed |


Примечание: на UI статусы *CookingCompleted* и *Packed* отображаются как *Приготовлен* и *Собран* соответствующе.

Данное нововведение может быть полезно для случаев, когда доставочный заказ можно закрыть, пользуясь запасом приготовленных блюд, а затем спокойно приготовить кухонный заказ, который относился к текущему доставочному.

