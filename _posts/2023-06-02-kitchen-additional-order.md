---
title: Дозаказ для кухонных заказов
layout: default
tags: v8preview6 v8
---

В Api V8Preview6 для кухонных заказов была добавлена формировать дозаказ для кухонных заказов. 

Формирование кухонного дозаказа происходит после создания соответствующего [`дозаказа`](https://ru.iiko.help/articles/iikofront-8-0/topic-48/a/h2_1) к закрытому заказу на официантской станции. Т.е., если на официантской станции создается дозаказ, то при его печати созданный кухонный заказ также будет являться дозаказом к кухонному заказу, к официантской части которого и сделан был дозаказ.

Для этого в [`IKitchenOrder`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrder.htm) добавлено поле [`GroupKitchenOrderId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_GroupKitchenOrderId.htm), которое имеет id кухонного заказа, к которому данный заказ является дозаказом.

Альтернативно пометить заказ дозаказом можно с помощью операции [`MarkOrderAsAdditional`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_MarkOrderAsAdditional.htm). Имеющиеся кухонные заказы получат такую же связь как и их официантские части.
