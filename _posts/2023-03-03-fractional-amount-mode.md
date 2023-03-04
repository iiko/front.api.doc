---
title: Доработки для дробного количества товаров
layout: default
---

Добавлена возможность получения настроек, связанных с весовыми товарами.

В продукт было добавлено новое свойство
[`IProduct.UseBalanceForSell`](https://iiko.github.io/front.api.sdk/v8/html/Properties_T_Resto_Front_Api_Data_Assortment_IProduct.htm),
которое показывает, доступна ли продажа данного товара на вес.

В ресторан было добавлено новое свойство
[`IRestaurant.FractionalAmoutMode`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Organization_IRestaurant.htm),
которое отображает настройку торгового предприятия: ввод дробного количества товаров.