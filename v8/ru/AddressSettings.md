---

title: Получение настроек адреса доставки
layout: default
tags: v8
---
В API V8 появилась возможность получать настройки адресов для корректной работы с созданием доставки.

Для этого в настройки ресторана [IRestaurant](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Organization_IRestaurant.htm) было добавлено свойство [AddressShowTypeSettings](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Organization_IRestaurant_AddressShowTypeSettings.htm).

Как получить новые настройки адреса доставки:

```cs
IRestaurant restaurant = PluginContext.Operations.GetHostRestaurant();
AddressShowTypeSettings addressShowTypeSettings = restaurant.AddressShowTypeSettings;
```

В ``addressShowTypeSettings`` будут следующие поля:

- [``UseNewFormat``](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Settings_AddressShowTypeSettings_UseNewFormat.htm) - использовать ли формат адреса доставки с полями Line1 и Line2.

- [``UseLiveSearch``](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Settings_AddressShowTypeSettings_UseLiveSearch.htm) - использовать ли живой поиск (DaData) для добавления адресов доставки на iikoFront.

- [``AddressShowType``](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Settings_AddressShowTypeSettings_AddressShowType.htm) - какой тип отображения адреса доставки ипользуется в iikoFront и iikoOffice.

Типы отображения адресов:

LEGACY - Формат адреса с полями «Город», «Улица», «Дом», «Корпус»

CITY - Формат адреса с полями «Куда везти» (Line1), «Подъезд», «Этаж» и т.д.

INTERNATIONAL - Стиль адреса в Великобритании с Line1 и Line2

NOPOSTCODE - Стиль адреса ОАЭ.



Данный функционал может пригодиться для того, чтобы при создании доставки на iikoFront плагин понимал, может ли он использовать для создания адреса доставки поля Line1 и Line2 или нет.

