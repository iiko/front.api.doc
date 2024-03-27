---
title: Печать товарного чека по PastOrder
layout: default
tags: v9preview1 v9
---

В Api V9Preview1 была добавлена возможность печатать товарный чек по [`PastOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_PastOrder.htm).

Для этого в класс [`PastOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_PastOrder.htm) было добавлено поле [`CafeSessionId`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_PastOrder_CafeSessionId.htm) и в [`PastOrderItem`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_PastOrderItem.htm) были добавлены поля [`VatRate`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_PastOrderItem_VatRate.htm) и [`VatSum `](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_PastOrderItem_VatSum.htm).

Для того, чтобы распечатать товарный чек можно воспользоваться новой операцией [`PrintCashMemoCheque`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_PrintCashMemoCheque.htm). В случае если нужно просто получить разметку чека, с учетом настроек выбранного устройства для печати(если такое задано), то можно воспользоваться операцией [`GetCashMemoMarkup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetCashMemoMarkup.htm).


