---
title: Добавлены методы методы вызываемые перед и после открытия смены на ФР
layout: default
tags: v8

---


В интерфейс [`IChequeTaskProcessor`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Devices_IChequeTaskProcessor.htm) 
добавлены методы [`BeforeOpenSession`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Devices_IChequeTaskProcessor_BeforeOpenSession.htm) 
и [`BeforeOpenSession`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Devices_IChequeTaskProcessor_BeforeOpenSession.htm).
Методы вызываются до открытия смены на Фискальном регистраторе и после, соответственно, для всех плагинов, реализующих интерфейс `IChequeTaskProcessor`.
Если один из подписчиков бросает исключение, методы для других подписчиков не вызываются и вся операция открытия смены завершается с ошибкой.