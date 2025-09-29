---
title: Ревизии для IVersionedEntity
layout: default
tags: v9preview3 v9
---

В API V9Preview3 изменена работа ревизий для [`IVersionedEntity`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Common_IVersionedEntity.htm).

Ранее ревизия [`IVersionedEntity.Revision`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Common_IVersionedEntity_Revision.htm) была сквозная между терминалами одной группы. Ревизия назначалась на главной кассе и передавалась ведомым терминалам. В силу этого, для корректной работы синхронизации доступа к данным, плагины, использующие функции редактирования данных, предпочтительно было устанавливать на главную кассу. При установке на другие терминалы, в некоторых сценариях плагин мог разово получать отказы в применении изменений. 

Теперь каждый терминал фронта ведет свою ревизию объектов. Это означает, что необоснованные отказы в применении изменений по причине "архитектурной особенности" фронта устранены. 
Ревизию нельзя использовать как критерий сравнения объектов на разных терминалах.

При каждом изменении объекта назначается новая ревизия, ревизия строго и монотонно растет. Однако, монотонный рост ревизии гарантируется только в пределах одной и той же базы данных терминала фронта. Объектам может быть переназначена ревизия, в случае если произошло пересоздание фронтовой базы данных. Например, это может произойти при смене главного терминала. В связи с этим был добавлен новый метод [`GetHostDatabaseId`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetHostDatabaseId.htm), который возвращает идентификатор фронтовой базы данных. При пересоздании фронтовой БД, ей назначается новый идентификатор. Идентификатор базы данных не может меняться в процессе работы фронта, поэтому достаточно проверить его один раз при запуске. Если при очередном запуске идентификатор базы данных поменялся, следует считывать данные, начиная с нулевой ревизии: [`GetChangedOrders`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetChangedOrders.htm),[`GetChangedDeliveryOrders`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetChangedDeliveryOrders.htm),[`GetChangedKitchenOrders`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetChangedKitchenOrders.htm),[`GetChangedReserves`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetChangedReserves.htm).

В  [`SamplePlugin`](https://github.com/iiko/front.api.sdk/tree/master/sample/v9preview3/Resto.Front.Api.SamplePlugin) был добавлен [`пример`](https://github.com/iiko/front.api.sdk/blob/master/sample/v9preview3/Resto.Front.Api.SamplePlugin/SamplePlugin.VersionedEntityRevisionHelper.cs) отслеживания сброса ревизий.