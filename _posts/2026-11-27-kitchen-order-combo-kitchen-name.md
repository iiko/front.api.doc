---
title: Название комбо для кухни в кухонном заказе (IKitchenOrderCombo.KitchenName)
layout: default
tags: v10 v10preview4
---

Начиная с API V10Preview4 в [`IKitchenOrderCombo`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrderCombo.htm) добавлено свойство [`KitchenName`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderCombo_KitchenName.htm) типа `string` — название комбо для кухни.

Название для кухни задаётся в описании [нового (RMS-)комбо]({{ site.baseurl }}{% post_url 2026-09-07-combo-definitions %}). Если оно не задано, свойство возвращает `null` или пустую строку; название комбо из меню (`Combo.Name`) вместо него не подставляется. Для комбо iikoCard свойство всегда возвращает `null`.

Значение одинаково в [`IKitchenOrder.Combos`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrder_Combos.htm) и в [`IKitchenOrderCookingItem.ComboInfo`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderCookingItem_ComboInfo.htm). Как и [`PickListLabel`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderCombo_PickListLabel.htm), оно не хранится в кухонном заказе, а берётся из справочника комбо при чтении заказа. Поэтому изменение названия в справочнике не меняет ревизию кухонного заказа, и уведомление об изменении заказа не приходит: новое название плагин получит при следующем чтении.

Свойство позволяет плагинам кухонных экранов (например, WebKDS) показывать повару название для кухни вместо названия комбо из меню.
