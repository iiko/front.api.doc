---
title: Проверка прав при работе с клиентами доставки
layout: default
---

В API V7 для операции [`ChangeClientBlacklistInfo`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeClientBlacklistInfo.htm) добавлена проверка права [`D_AHR: Добавлять гостя в список «Высокий риск»`](https://ru.iiko.help/articles/iikooffice-8-7/topic-745).

И для операций [`SearchClients`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_SearchClients.htm) и [`TryGetClientByPhone`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetClientByPhone.htm) добавлена проверка права [`B_GUEST: Работа со справочником гостей`](https://ru.iiko.help/articles/iikooffice-8-7/topic-745).