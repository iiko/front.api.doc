---
title: Получение данных об организации по идентификатору.
layout: default
---
В V9 добавлена возможность получения данных организации по Id для Польше.

- В [`IOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IOrder.htm) добавлено новое свойство [`EInvoiceOrganizationId`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IOrder_EInvoiceOrganizationId.htm) - Id организации, на которую будет создан инвойс.
- Добавлен новый метод [`GetOrganizationDetailsById`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetOrganizationDetailsById.htm), который принимает Id организации и возвращает данные организации [`OrganizationDetailsInfo`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Payments_OrganizationDetailsInfo.htm).
