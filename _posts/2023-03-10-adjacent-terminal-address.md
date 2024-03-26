---
title: Адрес соседнего терминала 
layout: default
tags: v8preview2 v8
---

В API V8Preview2 появилась возможность узнать адрес соседнего терминала.

Был добавлен метод [`TryGetTerminalAddress`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetTerminalAddress.htm), который возвращает адрес заданного терминала. Возвращаемое значение может быть адресом IPv4/IPv6, доменным или NetBIOS именем.