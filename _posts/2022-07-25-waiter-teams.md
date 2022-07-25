---
title: Бригады официантов 
layout: default
---

В API V8Preview2 был добавлен интерфейс бригады официантов [`IWaiterTeam`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_IWaiterTeam.htm).

Также в API стали доступны методы [`GetWaiterTeams()`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetWaiterTeams.htm), который даёт возможность получить список всех бригад и [`TryGetWaiterTeamForUser(IUser user)`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetWaiterTeamForUser.htm), позволяющий получить бригаду, к которой привязан работник.