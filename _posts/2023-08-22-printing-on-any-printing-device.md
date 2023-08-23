---
title: Печать на произвольном принтере
layout: default
---

В API V8Preview7 был добавлен новый метод [`GetPrintingDeviceInfos`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPrintingDeviceInfos.htm), который возвращает список из объектов с интерфейсом [`PrintingDeviceInfo`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_IPrintingDeviceInfo.htm).

Данный интерфейс хранит два поля: [`Id`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Common_IEntity_Id.htm) - уникальный Id устройства для печати и  [`FriendlyName`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_IPrintingDeviceInfo_FriendlyName.htm) - заданное в iikoOffice в Администирование => Настройка оборудования. [`FriendlyName`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_IPrintingDeviceInfo_FriendlyName.htm) создан для удобства разработчика плагинов, чтобы было легко определить с каким из устройств для печати ведется работа.

Список устройств, возвращаемых [`GetPrintingDeviceInfos`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPrintingDeviceInfos.htm) в себе может иметь не только принтеры, но фискальные регистраторы, имеющие возможность печати. В данном списке могут быть устройства не только из текущей группы ресторана, но также и из других, и те, которые не были определены для какой-либо определенной группы.

Печать документа на любом из этих принтеров возможна с помощью метода [`Print `](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_Print.htm).
