---
title: Полнотекстовый поиск по справочнику улиц 
layout: default
---
Добавлена [функция](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_SearchStreets.htm) поиска [улиц](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Data_Brd_IStreet.htm) по названию или внешнему ключу ([ExternalId](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_Data_Brd_IStreet_ExternalId.htm)) с возможностью ограничить область поиска конкретным городом или списком городов.

Методы получения всех улиц ([GetAllStreets](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_GetAllStreets.htm)/[GetActiveStreets](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_GetActiveStreets.htm)) объявлены устаревшими, не рекомендуется их использовать для фильтрации или поиска на стороне плагина, поскольку это может негативно сказаться на производительности при большом размере справочника улиц.

Кстати, аналогичная [функция](https://iiko.github.io/front.api.sdk/v5/html/M_Resto_Front_Api_V5_IOperationService_SearchClients.htm) полнотекстового поиска начиная с V5 доступна и для справочника [клиентов](https://iiko.github.io/front.api.sdk/v5/html/T_Resto_Front_Api_V5_Data_Brd_IClient.htm).