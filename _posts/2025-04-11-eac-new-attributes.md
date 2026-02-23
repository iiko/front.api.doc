---
title: Справочник ТН ВЭД — новые признаки
layout: default
tags: v9preview7 v9
---
Добавлены новые признаки в справочник ТН ВЭД (Товарная Номенклатура Внешнеэкономической Деятельности) в Front API.

Для разных товарных категорий применяются разные правила работы с маркированным товаром. Добавлены новые настройки в [`IOuterEconomicActivityNomenclatureCode`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Device_IOuterEconomicActivityNomenclatureCode.htm):

- [`PermissiveMode`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_IOuterEconomicActivityNomenclatureCode_PermissiveMode.htm) (Разрешительный режим) — признак, позволяющий настроить поведение при работе с маркировкой
- [`ByInstanceAccounting`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Device_IOuterEconomicActivityNomenclatureCode_ByInstanceAccounting.htm) (Поэкземплярный учет) — признак учета товара по экземплярам

Эти настройки предназначены для использования в плагинах `AlcoholMarkingPlugin` и `OnlineVerificationMarkingPlugin` для настройки желаемого поведения номенклатуры.

