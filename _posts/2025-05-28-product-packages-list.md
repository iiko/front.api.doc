---
title: Список фасовок продукта
layout: default
tags: V9Preview6 V9
---
Добавлена возможность получения списка фасовок продукта через Front API.

В свойствах продукта ([`IProduct`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Assortment_IProduct.htm)) теперь доступен список фасовок, указанных в настройках продукта. Реализовано на основе [`BarcodeContainers`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Assortment_IProduct_BarcodeContainers.htm).

Это позволяет плагинам получать информацию о доступных фасовках товара (например, бутылка 0.5л, 1л, 2л) и использовать эту информацию для работы со штрихкодами и учета товаров.

