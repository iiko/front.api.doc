---
title: Признак, позволяющий отличить округление от обычных скидок
layout: default
---

В API V7 добавлен признак, позволяющий отличить округление от обычной скидки. Если скидка [`IAppliedDiscountItem.IsRounding == true`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IAppliedDiscountItem_IsRounding.htm), значит это служебная скидка для округления заказа.