---
title: Бригады официантов 
layout: default
---

В API V8Preview2 появилась возможность работать с бригадами официантов.

Был добавлен интерфейс бригады официантов [`IWaiterTeam`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_IWaiterTeam.htm).

Также в API стали доступны методы [`GetWaiterTeams`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetWaiterTeams.htm), 
который даёт возможность получить список всех бригад, и [`TryGetWaiterTeamForUser`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetWaiterTeamForUser.htm), 
позволяющий получить бригаду, в которую назначен сотрудник.

Подробнее о функционировании бригад официантов в [`документации`](https://ru.iiko.help/articles/releasenotes/2022-summer).