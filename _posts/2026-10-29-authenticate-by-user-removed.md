---
title: Прекращение поддержки метода AuthenticateByUser
layout: default
tags: v8 v9 v10 v10preview1 v10preview2 v10preview3
---

Метод [`IOperationService.AuthenticateByUser`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_AuthenticateByUser.htm),
добавленный в API V8Preview7 (см. новость [*"Аутентификация пользователя без PIN-кода"*]({{ site.baseurl }}{% post_url 2023-08-28-auth-without-pin %})),
выводится из API.

- В ранее выпущенных версиях API (V8, V9, V10Preview1, V10Preview2) начиная с iikoFront 9.7.7 и 9.8.1
  вызов метода будет завершаться исключением [`AuthenticationException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_AuthenticationException.htm).
- Начиная с API V10Preview3 метод удалён.

Для получения учётных данных можно использовать:
- [`IOperationService.AuthenticateByPin`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_AuthenticateByPin.htm) — аутентификация сотрудника по PIN-коду;
- [`IOperationService.GetDefaultCredentials`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetDefaultCredentials.htm) — учётные данные служебного пользователя плагина.

Разработчикам плагинов, использующих `AuthenticateByUser`, необходимо заранее отказаться от его использования.
