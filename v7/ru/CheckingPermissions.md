---
title: Проверка и запрос прав
layout: default
---
# Проверка и запрос прав #

Действия, которые выполняются с помощью плагина, могут требовать проверки или запроса прав. Для проверки прав пользователя есть методы [`CheckPermission`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_CheckPermission.htm) и [`CheckPermissions`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_CheckPermissions.htm). Для запроса прав можно показать диалоговые окна с помощью методов [`ShowCheckPermissionPopup`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_UI_IViewManager_ShowCheckPermissionPopup.htm) и [`ShowCheckPermissionsPopup`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_UI_IViewManager_ShowCheckPermissionsPopup.htm). Текущего пользователя можно узнать с помощью метода [`GetCurrentUser`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetCurrentUser.htm), а его текущую роль - с помощью [`GetStrictAccordanceToScheduleUserRole`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetStrictAccordanceToScheduleUserRole.htm).

## Как это выглядит в iikoFront?

Например, плагин добавляет кнопку *«SamplePlugin: Show OK popup»* на «[экран кассы](ActionOnPaymentScreenView.html)». Пример реализации можно посмотреть в проекте SDK SamplePlugin в классе `ButtonsTester`.

![ButtonOnPaymentScreenView](../../img/actionOnPaymentScreenView/buttonOnPaymentScreen.png)

Пусть кнопка будет доступна для нажатия только пользователям с определёнными правами. Это можно сделать несколькими способами.
Для начала зарегистрируем кнопку:

```cs
// Регистрация действия на экране кассы
subscription = PluginContext.Operations.AddButtonToPaymentScreen("SamplePlugin: Show ok popup", false, true, ShowOkPopupOnPaymentScreen);
``` 

В результате выполнения метода регистрации можно получить идентификатор кнопки - *subscription.buttonId*. В дальнейшем будет использоваться этот идентификатор.

### Вариант 1: Отключение кнопки для всех пользователей, у кого нет прав на её нажатие.

Можно включать и выключать ранее добавленную кнопку на экран кассы с помощью метода [`UpdatePaymentScreenButtonState`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_UpdatePaymentScreenButtonState.htm), передавая параметр *isEnabled*. Здесь удобнее всего будет воспользоваться событием [`CurrentUserChanged`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_CurrentUserChanged.htm), чтобы узнать, какой пользователь сейчас работает.
Подпишемся на событие и проверим, обладает ли пользователь нужным правом (например, право печати Х-отчёта "F_XR")

```cs
// Подписка на событие изменения текущего пользователя
PluginContext.Notifications.CurrentUserChanged.Subscribe(OnCurrentUserChanged);
``` 

```cs
// Подписка на событие изменения текущего пользователя
PluginContext.Notifications.CurrentUserChanged.Subscribe(user =>
{
    if(user == null)//Находимся на экране логина
        return;
    var isButtonEnabled = PluginContext.Operations.CheckPermission(user, "F_XR");
    PluginContext.Operations.UpdatePaymentScreenButtonState(subscription.buttonId, isEnabled: isButtonEnabled);
});
``` 

Таким образом, при изменении текущего пользователя, в зависимости от наличия права "F_XR", кнопка будет выключаться или включаться.
Метод [`CheckPermission`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_CheckPermission.htm) принимает на вход 3 аргумента:

- [`IUser`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Security_IUser.htm) `user` — пользователь, для которого проверяется право.
- `string permissionCode` — право, которое должно быть у пользователя. 
- [`IRole`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Security_IRole.htm) `role` — необязательный параметр. Роль пользователя. Используется, если терминал работает в режиме "Строгое соответствие расписанию".


Точно так же можно проверить несколько прав, воспользовавшись методом [`CheckPermissions`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_CheckPermissions.htm). Он принимает на вход 4 аргумента:

- [`IUser`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Security_IUser.htm) `user` — пользователь, для которого проверяются права.
- `string[] permissionCodes` — права, которые проверяются у пользователя.
- [`PermissionsCheckMode`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_PermissionsCheckMode.htm) `checkMode` - Проверять наличие всех прав (`PermissionsCheckMode.All`), или хотя бы одного (`PermissionsCheckMode.Any`).
- [`IRole`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Security_IRole.htm) `role` — необязательный параметр. Роль пользователя. Используется, если терминал работает в режиме "Строгое соответствие расписанию".

### Вариант 2: Скрытие кнопки для всех пользователей, у кого нет прав на её нажатие.
### Вариант 3: Проверка возможности выполнения операции в момент нажатия на кнопку.
#### Вариант 3.1: Если у пользователя нет прав, то кнопку нажать нельзя.
#### Вариант 3.2: Если у пользователя нет прав, то можно запросить права.
#### Вариант 3.3: Запрашивать права в любом случае, даже если у пользователя они есть.

