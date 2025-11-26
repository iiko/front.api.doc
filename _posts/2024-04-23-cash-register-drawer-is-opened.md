---
title: Статус открытости денежного ящика.
layout: default
tags: v8
---

В API V8 появился новый метод
[`CashRegisterDrawerIsOpened()`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CashRegisterDrawerIsOpened.htm) 
для получения статуса открытости денежного ящика переданного в метод [`ICashRegisterInfo`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_ICashRegisterInfo.htm). 

Команда возвращает `true` когда денежный ящик открыт, `false` - когда закрыт.