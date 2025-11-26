---
title: Получение точки продаж по типу места приготовления
layout: default
tags: v9preview2 v9
---

В API V9Preview2 добавлен метод получения точки продаж по типу места приготовления [`TryGetPointOfSaleByCookingPlaceType`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_TryGetPointOfSaleByCookingPlaceType.htm).
Метод принимает тип места приготовления [`ICookingPlaceType`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_ICookingPlaceType.htm) и возвращает точку продаж [`IPointOfSale`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Organization_IPointOfSale.htm).

При необходимости получения связанного с типом места приготовления фискального регистратора можно воспользоваться свойством [`CashRegister`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Organization_IPointOfSale_CashRegister.htm).


