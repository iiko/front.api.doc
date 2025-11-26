---
title: Учётная запись по умолчанию для плагинов Front API
layout: default
tags: v8
---

В API V8 появился новый метод
[`GetDefaultCredentials()`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetDefaultCredentials.htm)
для получения учётных данных, связанных с новым пользователем ("Пользователь Front.Api").

Таким образом нет необходимости пользоваться встроенными учётками или создавать новою учётку, пытаясь получить `ICredentials`
[по ПИН-коду](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AuthenticateByPin.htm),
если плагину не нужно выполнять операции из-под конкретного пользователя.
