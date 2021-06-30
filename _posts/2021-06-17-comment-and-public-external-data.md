---
title: Добавлены поля Comment и изменена сигнатура метода  AddOrderExternalData
layout: default
---

В API V7Preview7 в заказ добавлено поле [`Comment`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IOrder_Comment.htm), для изменения значения используется метод [`IEditSession.ChangeOrderComment`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_ChangeOrderOriginName.htm).

Изменена сигнатура метода [`AddOrderExternalData`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderExternalData.htm) — добавлен флаг `isPublic`.

Данные, записанные с помощью метода `AddOrderExternalData` с флагом `isPublic`, равным `true`, станут доступны в iikoRMS для выгрузки в OLAP-отчете по продажам. Если при вызове метода `AddOrderExternalData` передавать флаг `isPublic` равным `false`, то такие данные, как и прежде, сохраняются только в iikoFront и не будут доступны снаружи.
