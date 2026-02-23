---
title: Свойство PayableAmount сделано internal в API V9
layout: default
tags: v9
---
Свойство `PayableAmount` в классе [`PastOrderItem`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_PastOrderItem.htm) изменено с public на internal в API V9.

Это поле вычисляется автоматически на основе цены и количества, поэтому его публичная доступность для изменения могла приводить к некорректному поведению. Свойство остается доступным для внутреннего использования, но больше не является частью публичного API.
