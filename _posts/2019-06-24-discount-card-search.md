---
title: Добавлен поиск дисконтных карт по номеру
layout: default
---

В `PluginContext.Operations` добавлен метод [`SearchDiscountCardByNumber`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_SearchDiscountCardByNumber.htm), позволяющий получить дисконтную карту по её номеру.
Кроме того, для дисконтных карт теперь доступна информация о привязке к ценовой категории ([`PriceCategory`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountCard_PriceCategory.htm)).

Раньше дисконтную карту можно было только создать ([`CreateOrUpdateDiscountCard`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_CreateOrUpdateDiscountCard.htm)), но нельзя было найти по номеру.
Был поиск по id ([`GetDiscountCardById`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_GetDiscountCardById.htm)), но это бесполезно, для карты обычно используется не id, а номер, в том числе привязка к клиенту реализована по номеру карты ([`CardNumber`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Brd_IClient_CardNumber.htm)).
Начиная с V6/V6Preview5 дисконтную карту можно найти по номеру с помощью [`SearchDiscountCardByNumber`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_SearchDiscountCardByNumber.htm).
Этот метод предназначен только для персональных дисконтных карт.
Дисконтная карта считается персональной, если одной выданной клиенту карте соответствует один объект [`IDiscountCard`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IDiscountCard.htm) в базе, номер реальной карты и номер карты в базе совпадают.
Бывают также групповые дисконтные карты, когда клиентам выдаются карты со схожими номерами (например, 777-001, 777-002, ...), и для всех них в базе создаётся общая карта, в которой номер задан маской (777-???), поиск таких карт пока недоступен.

Есть два способа снизить стоимость заказа для лояльного клиента — дать скидку, либо применить специальную ценовую категорию.
Соответственно, к дисконтной карте может быть привязана либо скидка, либо ценовая категория.
Однако, прежде в API была доступна информация только о привязанной скидке.
Начиная с V6/V6Preview5 у дисконтной карты помимо [`DiscountType`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountCard_DiscountType.htm) появилось новое свойство [`PriceCategory`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IDiscountCard_PriceCategory.htm).
Заполнено всегда только одно из этих свойств, другое всегда `null`. 