---
title: Список фасовок без привязки к штрихкодам
layout: default
tags: V9Preview7 V9
---
Добавлено свойство `Containers` в интерфейс [`IProduct`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Assortment_IProduct.htm) для работы с фасовками без обязательной привязки к штрихкодам.

Ранее в API был доступен только [`BarcodeContainers`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Assortment_IProduct_BarcodeContainers.htm), который содержал только фасовки с привязкой к штрихкодам. Теперь через свойство [`Containers`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Assortment_IProduct_Containers.htm) доступны все фасовки продукта, независимо от наличия штрихкода.

Это позволяет более удобно обрабатывать фасовки в случаях частичного выбытия товара и корректно рассчитывать проверку МРЦ (максимальной розничной цены) в плагинах разрешительного режима маркировки.

