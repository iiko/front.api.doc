---
title: Появилась возможность открывать и закрывать личные смены 
layout: default
---

Начиная с V7 личными сменами можно управлять через API, что позволит пользователям открывать личные смены и переключать роли прямо с мобильных терминалов.

Открытие и закрытие личной смены, как и другие привязанные к пользователю и его правам операции, подтверждаются пин-кодом (см. [`AuthenticateByPin`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_AuthenticateByPin.htm), [`ICredentials`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Security_ICredentials.htm)).

В некоторых заведениях вместо одной фиксированной должности сотрудник может в разное время работать в разных ролях. Например, отработать по расписанию одну смену как официант, а другую как хостес, бармен, кассир и т. д., при этом у него будут разные права, соответственно, и разный набор доступных операций, а также разные ставки оплаты. В таком случае при открытии личной смены необходимо указать, в какой роли будет работать сотрудник. Для смены роли необходимо закрыть текущую личную смену и открыть новую с другой ролью.

Новые методы и поля:

* [`OpenPersonalSession`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_OpenPersonalSession.htm) — открыть личную смену,
* [`ClosePersonalSession`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_ClosePersonalSession.htm) — закрыть личную смену,
* [`IRestaurant.UsePersonalRoles`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_IRestaurant_UsePersonalRoles.htm) — используются ли в ресторане роли,
* [`IUser.GetUserRoles`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_OperationArgumentExtensions_GetUserRoles.htm) — получить список ролей, доступных для пользователя в данный момент.

Пример управления личными сменами можно будет посмотреть в классе `PersonalSessionsTester` входящего в SDK для V7 плагина SamplePlugin. 