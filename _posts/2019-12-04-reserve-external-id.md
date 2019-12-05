---
title: При создании резерва появилась возможность указать для него идентификатор 
layout: default
---

Начиная с V7 методы [`CreateReserve`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_CreateReserve.htm), [`CreateBanquet`](https://iiko.github.io/front.api.sdk/v7/html/Overload_Resto_Front_Api_Editors_IEditSession_CreateBanquet.htm) и их перегрузки позволяют задать внешний идентификатор ([`ExternalId`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Brd_IReserve_ExternalId.htm)) для создаваемого объекта ([`IReserve`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Brd_IReserve.htm)). Такой идентификатор удобен для синхронизации со внешней системой. Получить резерв по его внешнему идентификатору можно с помощью метода [`TryGetReserveByExternalId`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_TryGetReserveByExternalId.htm).