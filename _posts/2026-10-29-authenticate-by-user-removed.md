---
title: Прекращение поддержки метода AuthenticateByUser
layout: default
tags: v8 v9 v10 v10preview1 v10preview2
---

Метод [`IOperationService.AuthenticateByUser`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_AuthenticateByUser.htm),
добавленный в API V8Preview7 (см. новость [*"Аутентификация пользователя без PIN-кода"*]({{ site.baseurl }}{% post_url 2023-08-28-auth-without-pin %})),
больше не поддерживается.

- В ранее выпущенных версиях API (V8, V9, V10Preview1, V10Preview2) начиная с iikoFront 9.7.7 и 9.8.1
  вызов метода завершается исключением [`AuthenticationException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_AuthenticationException.htm).
- В API V10 метод удалён.

Для получения учётных данных используйте:
- [`IOperationService.AuthenticateByPin`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_AuthenticateByPin.htm) — аутентификация сотрудника по PIN-коду;
- [`IOperationService.GetDefaultCredentials`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetDefaultCredentials.htm) — учётные данные, привязанные к плагину.

Разработчикам плагинов, использующих `AuthenticateByUser`, необходимо перейти на один из этих методов.
