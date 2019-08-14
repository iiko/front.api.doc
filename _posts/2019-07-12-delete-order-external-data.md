---
title: Добавлена возможность удаления данных плагина из заказа
layout: default
---
К методам [`AddOrderExternalData`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderExternalData.htm) и [`TryGetOrderExternalDataByKey`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_TryGetOrderExternalDataByKey.htm), позволявшим сохранять произвольные данные в составе заказа и, соответственно, считывать их оттуда, добавили метод [`DeleteOrderExternalData`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_Editors_IEditSession_DeleteOrderExternalData.htm), позволяющий удалить из заказа ставшие ненужными внешние данные.