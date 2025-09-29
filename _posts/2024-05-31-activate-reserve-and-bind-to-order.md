---
title: Метод ActivateReserve переименован в ActivateReserveAndBindToOrder, а также изменена логика работы.
layout: default
---

В API V9Preview2 метод ActivateReserve переименован в [`ActivateReserveAndBindToOrder`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_ActivateReserveAndBindToOrder.htm).
Кроме того, была изменена логика метода: после активации резерва он связан с заказом, а заказ связан с резервом. Если количество гостей в заказе меньше, чем указано в резерве, то недостающее количество гостей добавляется в заказ.
