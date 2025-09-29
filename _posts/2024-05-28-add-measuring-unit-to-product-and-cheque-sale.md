---
title: Расширены данные по единицам измерения в Product и ChequeSale
layout: default
tags: v9preview2 v9

---

В API V9Preview2 у интерфейса [`IProduct`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Assortment_IProduct.htm) 
свойство `MeasuringUnitName` заменено на [`MeasuringUnit`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Assortment_IProduct_MeasuringUnit.htm) 
типа [`IMeasuringUnit`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Assortment_IMeasuringUnit.htm), 
которое хранит в себе больше информации.

В класс [`ChequeSale`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_Tasks_ChequeSale.htm)
добавлено свойство [`MeasuringUnit`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_Tasks_ChequeSale_MeasuringUnit.htm) 
типа [`MeasuringUnitInfo`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_Tasks_MeasuringUnitInfo.htm). 
Это свойство может изменяться плагинами и потому не имеет поля `Id`, чтобы избежать путаницы и не связывать его с реальным `MeasureUnit`.
