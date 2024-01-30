---
title: ФИО для IUser
layout: default
---

В Api V8 была добавлена возможность получить ФИО пользователя, заданное в iikoOffice. 

Для этого в Api была добавлена структура [`UserFullName`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Users_UserFullName.htm), в составе которой присутствуют 3 поля:

- string [`FirstName`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Users_UserFullName_FirstName.htm) - Имя сотрудника;
- string [`MiddleName`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Users_UserFullName_LastName.htm) - Фамилия сотрудника;
- string [`LastName`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Users_UserFullName_MiddleName.htm) - Отчество сотрудника.

Также в Api был добавлен новый метод [`GetUserFullName`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetUserFullName.htm) - чтобы получить с его помощью ФИО нужно передать объект пользователя [`IUser`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Security_IUser.htm).
