---
title: Смена текста на прогрессбаре
layout: default
tags: v9 v9preview2

---

В API V9Preview2 добавлена возможность менять текст на прогрессбаре 
- При выполнении [операций внешнего фискального регистратора](https://iiko.github.io/front.api.doc/v6/ru/CashRegisters.html):
  - [`DoOpenSession`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoOpenSession.htm): срабатывает при открытии кассовой смены;
  - [`DoXReport`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoXReport.htm): срабатывает при открытии кассовой смены и при печати Х-отчета;
  - [`DoZReport`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoZReport.htm): срабатывает при закрытии кассовой смены;
  - [`DoCheque`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoCheque.htm): срабатывает при печати чека, в том числе во время закрытия кассовой смены, если есть открытые заказы и их требуется закрыть. Во время оплаты курьеру и при смене типа оплаты заказа. Так же во время всяких предоплат и сторнирования;
  - [`DoPayIn`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoPayIn.htm) и [`DoPayOut`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoPayOut.htm): изъятие и внесение денежных средств;
  - [`OpenDrawer`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_OpenDrawer.htm): открытие денежного ящика;
  - [`DoBillCheque`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Devices_ICashRegister_DoBillCheque.htm): печать пречека, если он печатается фискальным регистратором.
- В [расширениях для фискального регистратора](https://iiko.github.io/front.api.doc/v6/ru/ChequeTaskProcessor.html): все методы [`IChequeTaskProcessor`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Devices_IChequeTaskProcessor.htm).


Теперь во все эти методы передается [`IViewManager`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_UI_IViewManager.htm) с опцией вызвать метод [`ChangeProgressBarMessage`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ChangeProgressBarMessage.htm).