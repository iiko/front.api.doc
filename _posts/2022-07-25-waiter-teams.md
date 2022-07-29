---
title: Бригады официантов 
layout: default
---

В API V8Preview2 появилась возможность работать с бригадами официантов.

Был добавлен интерфейс бригады официантов [`IWaiterTeam`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_IWaiterTeam.htm).

Также в API стали доступны методы [`GetWaiterTeams`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetWaiterTeams.htm), 
который даёт возможность получить список всех бригад, и [`TryGetWaiterTeamForUser`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetWaiterTeamForUser.htm), 
позволяющий получить бригаду, в которую назначен сотрудник.

Подробнее о функционировании бригад официантов в [`документации`](https://ru.iiko.help/articles/#!releasenotes/2022-summer/q/%25D0%2591%25D1%2580%25D0%25B8%25D0%25B3%25D0%25B0%25D0%25B4%25D0%25B0%2520%25D0%25BE%25D1%2584%25D0%25B8%25D1%2586%25D0%25B8%25D0%25B0%25D0%25BD%25D1%2582%25D0%25BE%25D0%25B2/qid/1169616/qp/1).