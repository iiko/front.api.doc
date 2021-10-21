---
title: Уведомление об удалении неотпечатанных блюд и текущий пользователь
layout: default
---

В версии API V7 мы добавили уведомление об удалении неотпечатанных блюд
[`BeforeDeleteNonPrintedItems`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_BeforeDeleteNonPrintedItems.htm),
а также пробросили текущего пользователя, ответственного за выполняемую операцию, в некоторые события.

Удаление неотпечатанных блюд можно прервать выбросом `OperationCanceledException` в обработчике.
Уведомление генерируется как при попытке удалить блюдо из UI iikoFront, так и при попытке удаления из API.

Уведомления и методы, которые стали принимать на вход текущего
[пользователя](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Security_IUser.htm),
выполняющего ту или иную операцию:

- [`BeforeOrderBill`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_BeforeOrderBill.htm)
— пречек, печать дубликата пречека заказа;
- [`OrderBillCancelled`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_OrderBillCancelled.htm)
— отмена пречека заказа;
- [`BeforeDeleteOrder`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_BeforeDeleteOrder.htm)
— удаление заказа;
- [`OrderSplittedByCashRegisters`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_OrderSplittedByCashRegisters.htm)
— разделение заказа на несколько ФР;
- [`OrderStorned`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_OrderStorned.htm)
— сторнирование заказа;
- [`BeforeDeletePrintedItems`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_BeforeDeletePrintedItems.htm)
— удаление отпечатанных блюд в заказе;
- [`BeforeDeleteNonPrintedItems`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_BeforeDeleteNonPrintedItems.htm)
— удаление неотпечатанных блюд в заказе;
- [`ICashRegister.DoZReport`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Devices_ICashRegister_DoZReport.htm)
— печать Z-отчёта во время закрытия кассовой смены на плагинном ФР;
- [`ICashRegister.DoXReport`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Devices_ICashRegister_DoXReport.htm)
— печать X-отчёта на плагинном ФР;
- [`ICashRegister.DoOpenSession`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Devices_ICashRegister_DoOpenSession.htm)
— открытие кассовой смены на плагинном ФР;
- [`ICashRegister.OpenDrawer`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Devices_ICashRegister_OpenDrawer.htm)
— открытие денежного ящика на плагинном ФР.