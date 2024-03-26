---
title: Получение подробной информации о скидках
layout: default
tags: v9preview1 v9
---

В API V9Preview1 у скидки появился признак, определяющий что скидка является лояльностью (скидкой по iikoCard или подобной)
[`IDiscountType.IsCardLoyalty`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IDiscountType_IsCardLoyalty.htm).
Также теперь можно получить подробную информацию по скидкам лояльности через  [`IOperationService.GetCardLoyaltyDiscounts`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetCardLoyaltyDiscounts.htm). Информацию можно получить только для открытых заказов. После оплаты метод всегда будет возвращать пустую коллекцию.

Кроме того, метод [`IEditSession.AddIikoCardDiscounts`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_AddIikoCardDiscounts.htm) был переименован в [`IEditSession.AddCardLoyaltyDiscounts`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_AddCardLoyaltyDiscounts.htm).