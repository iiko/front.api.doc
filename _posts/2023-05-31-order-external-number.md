---
title: Новое свойство заказа ExternalNumber
layout: default
---

Начиная с версии API V8Preview4, в заказ добавлено новое свойство [`IOrder.ExternalNumber`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IOrder_ExternalNumber.htm), в котором хранится номер заказа во внешней системе. 
Изменить значение данного свойства можно при помощи нового метода [`IEditSession.ChangeOrderExternalNumber`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeOrderExternalNumber.htm).

Свойство ExternalNumber теперь можно использовать для построения OLAP-отчетов по продажам для заказов, пришедших во фронт из внешних систем. Значение ExternalNumber выводится в Отчете по продажам в колонке "Внешний номер заказа".