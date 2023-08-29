---
title: Аутентификация пользователя без PIN-кода
layout: default
---

В API V8Preview7 теперь можно подтверждать действия пользователям без ПИН-кода. Но для этого понадобится специальная лицензия.

Каждый экземпляр плагина должен иметь свой уникальный `ClientId` типа `Guid`.
При старте плагин должен захватить слот лицензии с модулем `21057201`,
вызвав метод [`ILicensingService.AcquireSlot`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_ILicensingService_AcquireSlot.htm)
и передав в него свой `ClientId`.
Результат выполнения метода должен запоминаться плагином и диспоузиться при завершении работы плагина.
Более подробно такая схема лицензирования описана в статье [*"Лицензирование"*]({{ site.baseurl }}/v6/ru/Licensing.html), раздел *"Плата за внешнее подключение к плагину"*.

Далее для аутентификации без ПИН-кода нужно вызвать метод
[`IOperationService.AuthenticateByUser`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AuthenticateByUser.htm),
передав в него пользователя [`IUser`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Security_IUser.htm)
и `ClientId` данного экземпляра плагина, использовавшегося для захвата лицензии с модулем `21057201`.
Данный метод возвратит объект [`ICredentials`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Security_ICredentials.htm),
с которым можно продолжать работу как и раньше
(аналогично методу [`IOperationService.AuthenticateByPin`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AuthenticateByPin.htm)).

Таким образом клиенту нужно выдавать столько слотов на модуль `21057201`, сколько у него экземпляров плагинов (плагины могут быть разные), которые используют аутентификацию пользователем без ПИН-кода.
