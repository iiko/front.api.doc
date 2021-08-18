---
title: Добавлены методы для проверки и запроса прав пользователя  
layout: default
---
В API V7 добавлены методы для проверки прав пользователя ([`CheckPermission`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_CheckPermission.htm), [`CheckPermissions`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_CheckPermissions.htm)) и методы для запроса прав ([`ShowCheckPermissionPopup`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_UI_IViewManager_ShowCheckPermissionPopup.htm), [`ShowCheckPermissionsPopup`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_UI_IViewManager_ShowCheckPermissionsPopup.htm)) (см. статью «[Проверка и запрос прав]({{ site.baseurl }}/v7/ru/CheckingPermissions.html)»).


Для удобства работы добавлены методы для получения текущего пользователя [`GetCurrentUser`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetCurrentUser.htm) и текущей роли [`GetStrictAccordanceToScheduleUserRole`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetStrictAccordanceToScheduleUserRole.htm).