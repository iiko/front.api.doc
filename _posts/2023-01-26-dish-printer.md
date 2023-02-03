---
title: Добавлена возможность выбора принтера блюд
layout: default
---

Начиная с API V8 появилась возможность получить принтер блюд.

Принтер блюд можно получить через [`IOperationService`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_IOperationService.htm), используя метод [`TryGetDishPrinter`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetDishPrinter.htm).

Для каждого отделения ([`IRestaurantSection`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Organization_Sections_IRestaurantSection.htm)) можно получить свой отдельный принтер блюд. 
Если не указать отделение, для которого нужно получить принтер блюд, то будет попытка получить принтер блюд для отделения ресторана стола по умолчанию.
Если указать флаг *checkIsConfigured = true*, то будет возвращён только установленный в настройках iikoOffice принтер.
При флаге *checkIsConfigured = false* в любом случае будет возвращен принтер блюд, даже если он ещё не добавлен в отделение ресторана, но выполнить печать на нём не удастся.