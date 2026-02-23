---
title: Поддержка нескольких кодов маркировки
layout: default
tags: v9preview5 v9
---
В класс [`CashRegisterDriverParameters`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_Tasks_CashRegisterDriverParameters.htm) добавлено свойство `IsMultipleMarkingCodesPerUnitSupported`, которое показывает, поддерживает ли фискальный регистратор несколько кодов маркировки на одну позицию чека.

Это полезно для корректной работы с маркированными товарами, когда к одной единице товара можно привязать несколько кодов маркировки.

