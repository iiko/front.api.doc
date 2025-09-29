---
title: Информация о модификаторах по умолчанию
layout: default
tags: v8preview6 v8
---

В кухонном заказе версии API V8Preview6 появилась возможность узнать подробности о модификаторах, которые должны быть скрыты, и об удаленных модификаторах, которые были бы скрыты, будь они в составе блюда.

- В кухонный модификатор [`IKitchenOrderModifierItem`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Kitchen_IKitchenOrderModifierItem.htm)
было добавлено свойство [`IsHidden`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderModifierItem_IsHidden.htm),
которое означает, что модификатор не должен показываться ни в сервисном чеке, ни на кухонном экране (KDS).
У такого модификатора установлена галочка "Скрывать, если количество по умолчанию", "Количество по умолчанию" больше нуля, и в блюде модификатор добавлен как раз с количеством по умолчанию.

- В обычное блюдо, составное блюдо и компонент составного блюда был добавлен список модификаторов, которые были добавлены к блюду с отличным от нуля количеством по умолчанию, а затем были удалены из блюда (`x0` модификаторы):
	- [`IKitchenOrderProductItem.ZeroAmountModifiersData`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderProductItem_ZeroAmountModifiersData.htm)
	- [`IKitchenOrderCompoundItem.ZeroAmountCommonModifiersData`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderCompoundItem_ZeroAmountCommonModifiersData.htm)
	- [`IKitchenOrderCompoundItemComponent.ZeroAmountModifiersData`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Kitchen_IKitchenOrderCompoundItemComponent_ZeroAmountModifiersData.htm)