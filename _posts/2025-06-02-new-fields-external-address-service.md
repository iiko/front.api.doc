---
title: В плагин ExternalAddressService добавлены новые поля (Title, Subtitle и Distance)
layout: default
tags: v9preview5 v9
---

Начиная с V9Preview5 в новом формате адреса появились новые параметры.
['Title'](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Title.htm), ['Subtitle'](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Subtitle.htm) и ['Distance'](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Distance.htm).
Эти поля нужны для облегчения поиска нужного адреса, более информативный вывод по сравнению с тем, что ранее выводилось только ['Line1'](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Line1.htm).

Для переключения на новые адреса и дальнейшее использование преимуществ новых полей необходимо убедиться в следующем:
- в настройках бэка выбран новый формат адреса (администрирование-настройки торгового предприятия-формат адреса доставки-использовать новый формат адреса)
- установлен и корректно работает плагин Resto.Front.Api.Delivery
- установлен и корректно работает плагин Resto.Front.Api.ExternalAddressService

Далее необходимо создать доставку во фронте и далее доставка-клиент-адрес-добавить адрес.
При вводе адреса по центру будет выведено значение поля ['Title'](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Title.htm), если оно не равно null, а снизу шрифтом поменьше - значение поля ['Subtitle'](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Subtitle.htm). 
Поле ['Distance'](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Brd_IAddress_Distance.htm) на данный момент не выводится в явном виде, преимущественно из-за проблем с локализацией (метры/километры необходимо перевести на разные языки).
Но оно используется неявно при сортировке результатов поиска: на данный момент результаты отсортированы по возрастанию расстояния.
Отправной точкой считается адрес торгового предприятия.


Примеры создания адреса можно найти в проекте SDK SamplePlugin в классе EditorTester.cs: CreateDelivery и ChangeDeliveryOrderTypeOnCourier.