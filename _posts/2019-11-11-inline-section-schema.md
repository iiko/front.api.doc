---
title: Схема отделения стала частью отделения
layout: default
---
Начиная с V7 графическая схема отделения ([`ISectionSchema`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Organization_Sections_ISectionSchema.htm)) становится дочерним объектом отделения ([`IRestaurantSection`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection.htm)). При изменении схемы будет сгенерировано общее уведомление [`RestaurantSectionChanged`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_RestaurantSectionChanged.htm). Получить схему для отделения, как и прежде, можно с помощью метода [`restaurantSection.TryGetSectionSchema()`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Data_Organization_Sections_RestaurantSectionExtensions_TryGetSectionSchema.htm). Удалены отдельные методы `GetSectionSchemas`, `GetSectionSchemaById` и т. п.

Ранее, до V6 включительно, схема отделения была самостоятельной сущностью, со своим идентификатором, и возможности отслеживать изменения схем не было.