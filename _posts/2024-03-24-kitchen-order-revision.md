---
title: Ревизия для KitchenOrder 
layout: default
tags: v8
---

В Api V8 для кухонных заказов была добавлена их ревизия -  число, которое является номером последнего изменения заказа. 

Счетчик ревизии общий для всех кухонных заказов. Таким образом, если первый кухонный заказ был изменен и его номер ревизии стал 59, то следующий измененный кухонный заказ получит номер ревизии 60.

В связи с этим был добавлен новый метод [`GetChangedKitchenOrders`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetChangedKitchenOrders.htm). В качестве входного параметра в него передается номер ревизии, все кухонные заказы с номером выше которого должны быть возвращены в виде объекта [`ChangedEntities`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Common_ChangedEntities_1.htm)<[`IKitchenOrder`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrder.htm)>, который также будет содержать в себе самую новую ревизию среди всех возвращенных заказов.

