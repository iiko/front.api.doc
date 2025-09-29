---
title: Доработки для дробного количества товаров
layout: default
tags: v8
---

Добавлена возможность получения настроек, связанных с весовыми товарами.

В продукт было добавлено новое свойство
[`IProduct.UseBalanceForSell`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Assortment_IProduct_UseBalanceForSell.htm),
которое показывает, доступна ли продажа данного товара на вес.

В ресторан было добавлено новое свойство
[`IRestaurant.FractionalAmountMode`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Organization_IRestaurant_FractionalProductAmountMode.htm),
которое отображает настройку торгового предприятия: ввод дробного количества товаров.