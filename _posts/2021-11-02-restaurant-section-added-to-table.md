---
title: В интерфейс ITable добавлена прямая ссылка на отделение, к которому принадлежит стол
layout: default
---

Ранее для того что бы найти отделение ресторана, к которому принадлежит стол требовалось запросить все отделения через метод [`GetTerminalsGroupRestaurantSections`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetTerminalsGroupRestaurantSections.htm) и перебирая столы в каждом отделении найти искомое.

Теперь же, в интерфейс [`ITable`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Organization_Sections_ITable.htm) добавлено свойство [`RestaurantSection`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_Sections_ITable_RestaurantSection.htm), возвращающая ссылку на объект отделения ресторана. Таким образом, экономится время и трудозатраты разработчика т.к. доступ к данному объекту прямой и не требует дополнительных усилий. 

