---
title: Штрихкоды
layout: default
---

В API V7 добавлены механизмы работы с штрихкодами продуктов. Теперь можно найти продукт по штрихкоду с помощью метода [`IOperationService.GetProductByBarcode`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetProductByBarcode.htm).  
Также можно получить список всех штрихкодов, которые используются продуктом. Для этого в интерфейс [`IProduct`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Assortment_IProduct.htm) добавлен список фасовок [`IProduct.BarcodeContainers`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Assortment_IProduct_BarcodeContainers.htm), из которых можно узнать штрихкоды с помощью свойства [`IBarcodeContainer.Barcode`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Assortment_IBarcodeContainer_Barcode.htm).