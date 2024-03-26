---
title: Изменение порядка параметра ICredentials в методах IOperationService
layout: default
tags: v8preview7 v8
---

В API V8Preview7 для унификации с [`OperationServiceExtensions`](https://iiko.github.io/front.api.sdk/v8/html/Methods_T_Resto_Front_Api_Extensions_OperationServiceExtensions.htm), где параметр типа [`ICredentials`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Security_ICredentials.htm) является последним из параметров без значения по умолчанию, и у методов интерфейса [`IOperationService`](https://iiko.github.io/front.api.sdk/v8/html/Methods_T_Resto_Front_Api_IOperationService.htm) теперь данный параметр передается последним. 

Пример изменения:
`os.DeteteOrder(auth, order)` => `os.DeteteOrder(order, auth)`