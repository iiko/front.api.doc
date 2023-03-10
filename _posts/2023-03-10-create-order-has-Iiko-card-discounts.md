---
title: В метод CreateOrder добавлено необязательное поле hasIikoCardDiscounts, позволяющее указать, что у заказа есть предрассчитанные iikoCard-скидки
layout: default
---

В API V8 в метод [`CreateOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_CreateOrder.htm) добавлено необязательное поле hasIikoCardDiscounts, которое является признаком того, что у заказа есть предрассчитанные скидки iikoCard. Значение по умолчанию - false.