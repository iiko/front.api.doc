---
title: Добавлена возможность редактировать заказ при удалении оплаты через плагин
layout: default
tags: v8

---

В API V8 добавлена возможность редактировать заказ при удалении оплаты через плагин через вызов метода [`OnPaymentDeleting`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IPaymentProcessor_OnPaymentDeleting.htm).

Редактирование текущего заказа теперь возможно через аргумент `IOperationService operationService` данного метода.