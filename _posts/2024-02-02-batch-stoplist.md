---
title: Пакетный стоп-лист
layout: default
tags: v9 v9preview2
---

Расширены команды [`AddProductToStopList`](https://iiko.github.io/front.api.sdk/v9/html/Overload_Resto_Front_Api_IOperationService_AddProductToStopList.htm) и [`RemoveProductFromStopList`](https://iiko.github.io/front.api.sdk/v9/html/Overload_Resto_Front_Api_IOperationService_RemoveProductFromStopList.htm) для возможности передачи списков продуктов и выполнения операций в рамках одной транзакции.

Преимущества:

* Значительное ускорение операций при работе с большими списками продуктов
* Уменьшение нагрузки на систему за счёт группировки операций
* Атомарность изменений

### См. также

* [`IStopList`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Assortment_IStopList.htm)
