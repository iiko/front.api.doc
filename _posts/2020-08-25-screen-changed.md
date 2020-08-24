---
title: Расширена детализация популярных экранов
layout: default
---

В V7Preview4 мы добавили больше разных экранов в событие
[`ScreenChanged`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_ScreenChanged.htm).
Актуальный список поддерживаемых экранов [здесь](https://iiko.github.io/front.api.sdk/v7/html/N_Resto_Front_Api_Data_Screens.htm).

- [`IAdditionalOperationsScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IAdditionalOperationsScreen.htm) —
экран ДОП;
- [`IOpenCafeSessionScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IOpenCafeSessionScreen.htm) —
экран открытия кассовой смены, доступен фискальный регистратор;
- [`ICloseCafeSessionScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_ICloseCafeSessionScreen.htm) —
экран закрытия кассовой смены, доступен фискальный регистратор;
- [`IOrderEditScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IOrderEditScreen.htm) —
экран редактирования заказа, доступен заказ;
- [`IClosedOrderScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IClosedOrderScreen.htm) —
экран закрытого заказа, доступен заказ;
- [`IDeliveryOrderEditScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IDeliveryOrderEditScreen.htm) —
экран редактирования доставочного заказа, доступен доставочный заказ;
- [`IUnmodifiableDeliveryOrderScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IUnmodifiableDeliveryOrderScreen.htm) —
экран неизменяемого доставочного заказа, доступен доставочный заказ;
- [`IOrderPayScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IOrderPayScreen.htm) —
экран оплаты, доступен заказ;
- [`IReserveEditScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IReserveEditScreen.htm) —
экран работы с резервом/банкетом, доступен резерв/банкет;
- [`IUnknownScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IUnknownScreen.htm) —
экран, который пока не детализирован.