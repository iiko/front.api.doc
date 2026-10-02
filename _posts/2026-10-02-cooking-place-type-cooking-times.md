---
title: Нормы приготовления в типе места приготовления (ICookingPlaceType)
layout: default
tags: v10 v10preview2
---

Начиная с API V10Preview2 в [`ICookingPlaceType`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Orders_ICookingPlaceType.htm) добавлены свойства с нормами приготовления, заданными для типа места приготовления:

* [`CookingTimeNormal`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Orders_ICookingPlaceType_CookingTimeNormal.htm) — нормальное (стандартное) время приготовления;
* [`CookingTimePeak`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Orders_ICookingPlaceType_CookingTimePeak.htm) — время приготовления в час пик.

Оба свойства имеют тип `TimeSpan?`. Каждое свойство возвращает `null`, если соответствующая норма для типа места приготовления не задана.

Нормы приготовления блюда могут быть заданы как в карточке блюда, так и через карту приготовления отделения. Новые свойства позволяют получить нормы по умолчанию, заданные для типа места приготовления.
