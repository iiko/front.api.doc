---
title: Цвет отделения для кухонного экрана (IRestaurantSection.KitchenColor)
layout: default
tags: v10 v10preview2
---

Начиная с API V10Preview2 в [`IRestaurantSection`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection.htm) добавлено свойство [`KitchenColor`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection_KitchenColor.htm) типа [`Color?`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_View_Color.htm) — цвет отделения, которым оно выделяется на кухонных экранах.

Цвет задаётся в настройках отделения в iikoOffice. Если цвет не задан, свойство возвращает `null`. Прозрачность (`A`) у заданного цвета всегда равна 255.

Свойство позволяет плагинам кухонных экранов (например, WebKDS) отображать заказы разных отделений так же, как это делает встроенный кухонный экран iikoFront.
