---
title: В адрес добавлены три новых поля для упрощения поиска.
layout: default
tags: v9preview5 v9
---

Начиная с V9Preview5 в интерфейсе [`IAddress`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Brd_IAddress.htm) появились дополнительные параметры [`Title`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Title.htm), [`Subtitle`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Subtitle.htm) и [`Distance`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Distance.htm), которые можно использовать при поиске адреса в формате `Line1`.

- `Title` - основная часть подсказки;
- `Subtitle` - вспомогательная часть подсказки;
- `Distance` - расстояние до адреса от торгового предприятия.

Эти поля визуально облегчают поиск нужного адреса в окне поиска адресов с помощью внешнего сервиса. Ранее результатом поиска адреса была одна строка
([`Line1`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Line1.htm)). Теперь результат поиска можно вернуть двумя строками - основная часть адреса (`Title`) и вспомогательная (`Subtitle`).

Для переключения на адреса в формате Line1 и дальнейшего использования преимуществ новых полей необходимо убедиться в следующем:
- в настройках BackOffice выбран новый формат адреса (Администрирование -> Настройки торгового предприятия -> Формат адреса доставки -> Использовать новый формат адреса)
- установлен и корректно работает плагин `Resto.Front.Api.Delivery`
- установлен и корректно работает плагин `Resto.Front.Api.ExternalAddressService`

Далее необходимо создать доставку во фронте и в ней на вкладке "Клиент" кликнуть на поле "Адрес", после чего откроется окно "Добавить новый адрес".
При вводе адреса по центру будет выведено значение поля `Title`, если оно не равно `null`, а снизу шрифтом поменьше - значение поля `Subtitle`. 
Поле `Distance` не отображается в явном виде, но оно используется неявно при сортировке результатов поиска: на данный момент они отсортированы по возрастанию расстояния.
Отправной точкой отсчёта расстояния считается адрес торгового предприятия.

Примеры создания адреса с новыми полями можно найти в проекте SDK [SamplePlugin](https://github.com/iiko/front.api.sdk/tree/master/sample/v8) в классе [`EditorTester.cs`](https://github.com/iiko/front.api.sdk/blob/7909d838587ad7d0408b9bbe5881d566055b5ffc/sample/v8/Resto.Front.Api.SamplePlugin/EditorTester.cs): в методах [`CreateDelivery`](https://github.com/iiko/front.api.sdk/blob/7909d838587ad7d0408b9bbe5881d566055b5ffc/sample/v8/Resto.Front.Api.SamplePlugin/EditorTester.cs#L794) и [`ChangeDeliveryOrderTypeOnCourier`](https://github.com/iiko/front.api.sdk/blob/7909d838587ad7d0408b9bbe5881d566055b5ffc/sample/v8/Resto.Front.Api.SamplePlugin/EditorTester.cs#L983).