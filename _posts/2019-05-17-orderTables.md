---
title: Перенос заказа на другой стол 
layout: default
---
Начиная с V6 появится возможность перенести заказ на другой стол.

С помощью метода [`ChangeOrderTables`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_ChangeOrderTables.htm) осуществляется перенос заказа на другой стол или столы.
В случае, если заказ — это резерв, то следует поменять также столы резерва, вызвав метод  [`ChangeReserveTables`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_ChangeReserveTables.htm) в рамках одной сессии редактирования.
