---
title: Признак принадлежности к текущему департаменту для IUser 
layout: default
---

Начиная с API V8PreviewV7:
1. Метод получения всех пользователей [`IOperationService.GetUsers`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetUsers.htm) по умолчанию возвращает только сотрудников текущего предприятия. Чтобы получить всех пользователей iikoChain нужно передать параметр `fromAllDepartments = true`.
1. Добавлено свойство [`IUser.AssignedToCurrentDepartment`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Security_IUser_AssignedToCurrentDepartment.htm) — свойство "принадлежит ли пользователей текущему предприятию".