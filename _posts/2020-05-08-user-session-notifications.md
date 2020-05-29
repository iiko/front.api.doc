---
title: Добавлено уведомление об открытии и закрытии личных смен пользователей 
layout: default
---

Начиная с V7Preview2 добавлено уведомление [`UserSessionChanged`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_UserSessionChanged.htm), с помощью которого удобно отслеживать изменение свойства [`IUser.IsSessionOpen`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Security_IUser_IsSessionOpen.htm).

В некоторых сценариях личные смены могут открываться или закрываться сразу для группы пользователей, поэтому в уведомлении будет содержаться список пользователей, у которых открылась или закрылась личная смена, причём в списке одновременно могут быть и те, у кого личная смена только что открыта, и те, у кого только что закрыта.

В предыдущих версиях API для отслеживания личных смен приходилось использовать более общее уведомление [`UserChanged`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_INotificationService_UserChanged.htm), оно, как и прежде, срабатывает при любом изменении пользователя, включая открытие и закрытие личной смены.

Кстати, плагин может не только следить за личными сменами пользователей, но и [управлять]({{ site.baseurl }}/2019/12/27/open-close-personal-sessions.html) ими.