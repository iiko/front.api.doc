---
title: Возможность создать доставку без клиента
layout: default
---
Начиная с V7 добавлена возможность создать доставку без клиента.

В версиях до V7Preview1 включительно в методе [`CreateDeliveryOrder`](http://iiko.github.io/front.api.sdk/v6/html/Overload_Resto_Front_Api_Editors_IEditSession_CreateDeliveryOrder.htm) и сущности [`DeliveryOrder`](http://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm) [`Сlient`](http://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Data_Brd_IClient.htm) был обязателен. 
Начиная с V7 в доставке [`DeliveryOrder`](http://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm) клиент стал необязательным полем, а в методе [`CreateDeliveryOrder`](http://iiko.github.io/front.api.sdk/v7/html/Overload_Resto_Front_Api_Editors_IEditSession_CreateDeliveryOrder.htm) появляется возможность не задавать клиента при создании доставки.
Номер телефона анонимного клиента соответствует телефону из доставки [`Phone`](http://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_Phone.htm).
В [`DeliveryOrder`](http://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm) добавлено новое свойство [`ClientName`](http://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_ClientName.htm) - имя клиента. 
Данное поле является необязательным и используется, только если не задан клиент.
Для изменения [`ClientName`](http://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_ClientName.htm) добавлен новый метод [`ChangeDeliveryClientName`](http://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_ChangeDeliveryClientName.htm).
