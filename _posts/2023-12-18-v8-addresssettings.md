---
title: API V8 Получение настроек адреса доставки.
layout: default
---

В API V8 появилась возможность получать настройки адресов для корректной работы с созданием доставки.<br>

Как получить настройки:<br>
1 [IRestaurant](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Organization_IRestaurant.htm) restaurant = PluginContext.Operations.[GetHostRestaurant](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetHostRestaurant.htm) ();<br>
2 [AddressShowTypeSettings](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Settings_AddressShowTypeSettings.htm) addressShowTypeSettings = restaurant.[AddressShowTypeSettings](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Settings_AddressShowTypeSettings.htm);<br>

В **addressShowTypeSettings** будут следующие поля:<br>
[`UseNewFormat`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Settings_AddressShowTypeSettings_UseNewFormat.htm) - использовать ли формат адреса доставки с полями Line1 и Line2.<br>
[`UseLiveSearch`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Settings_AddressShowTypeSettings_UseLiveSearch.htm) - использовать ли живой поиск (DaData) для добавления адресов доставки на iikoFront.<br>
[`AddressShowType`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Settings_AddressShowTypeSettings_AddressShowType.htm) - Какой тип отображения адреса доставки ипользуется на iikoFront и iikoOffice.<br>

Типы отображения адресов:<br>
LEGACY - Формат адреса с полями «Город», «Улица», «Дом», «Корпус»<br>
CITY - формат адреса с полями «Куда везти»(line1), «Подъезд», «Этаж» и т.д.<br>
INTERNATIONAL -Стиль адреса в Великобритании с Line1 и Line2<br>
NOPOSTCODE - Стиль адреса ОАЭ.<br>

Для чего может пригодиться данный функционал:<br>
Плагин создаёт доставку на iikoFront и ему нужно понимать, может ли он использовать для создания адреса доставки поля Line1 и Line2 или нет. <br>
Также, для удобства разработчика и реализации каких-то других схем, плагин может получать поля настроек.