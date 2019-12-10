---
title: Для столов добавлены название, количество мест и признак активности 
layout: default
---

Для удобства онлайн-бронирования информацию о столиках теперь можно сопроводить не только номером, но и текстовым названием (описанием) и количеством посадочных мест. Кроме того, устранена досадная оплошность, из-за которой действующий столик нельзя было отличить от неактивного (помеченного удалённым).


Тип [`ITable`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Organization_Sections_ITable.htm) обзавёлся новыми полями:

* [`Name`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_Sections_ITable_Name.htm) — название,
* [`SeatingCapacity`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_Sections_ITable_SeatingCapacity.htm) — количество мест,
* [`IsActive`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_Sections_ITable_IsActive.htm) — является ли стол действующим.