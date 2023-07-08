---
title: Новый метод RegisterExternalCompanyInfoSearchProvider
layout: default
---

Начиная с версии API V8Preview5, добавлен новый метод [`RegisterExternalCompanyInfoSearchProvider`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_RegisterExternalCompanyInfoSearchProvider.htm), с помощью которого можно зарегистрировать провайдер поиска организации по ИНН через внешний сервис.

Предполагается, что в callback-методе getCompanyInfoCallback разработчиками плагина будет вызываться сторонний сервис поиска компании по ИНН, чтобы получить или обновить данные о клиенте-организации в iikoFront в окне "Реквизиты организации".

Для передачи информации об организации из плагина в iikoFront добавлен класс [`ExternalCompanyInfo`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Brd_ExternalCompanyInfo.htm).

В аргументах RegisterExternalCompanyInfoSearchProvider передается callback-метод Func<string, ExternalCompanyInfo> getCompanyInfoCallback, принимающий на вход строку с ИНН искомой организации, и возвращающий информацию об организации в dto типа ExternalCompanyInfo. 

Для уже существующей в iikoFront организации метод getCompanyInfoCallback будет вызываться в окне "Реквизиты организации" по кнопке "Обновить", принимая на вход значение из поля "ИНН".

Для добавляемой в iikoFront новой организации метод getCompanyInfoCallback будет вызываться после нажатия в окне "Реквизиты организации" кнопки "Внешний поиск", по кнопке "Искать" в открывшемся диалоговом окне "Найти и добавить новую организацию", принимая на вход введенное в строку поиска значение.

Возвращенные методом getCompanyInfoCallback данные об организации будут отображены в окне "Реквизиты организации".