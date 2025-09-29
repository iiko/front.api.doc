---
title: Получения полной ExternalData обычного\кухонного заказа
layout: default
tags: v8
---

В Api V8 было добавлено две новые операции: [`GetOrderAllExternalData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetOrderAllExternalData.htm) и [`GetKitchenOrderAllExternalData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetKitchenOrderAllExternalData.htm). Данные операции позволяют получить всю ExternalData у обычного и кухонного заказа соответственно.

Параметр в операциях `isPublicOnly` - определяет какой список мы хотим получить: `false` - полный список ExternalData, `true` - список из публичных ExternalData (`isPublic = true`).