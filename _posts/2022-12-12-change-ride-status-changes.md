Автоматическое закрытие доставочного заказа при завершении поездки.
-------

Начиная с API V8Preview3 при завершении поездки (вызов метода [`ChangeRideStatus`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeRideStatus.htm) со статусом [`DeliveredFinish`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Brd_RideStatus.htm)) также закрывается связанная с этой поездкой доставка.

Также, изменено поведение метода [`SetDeliveryDelivered`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_SetDeliveryDelivered.htm). 

Теперь, при вызове этого метода, в фактическое время доставки [`ActualDeliverTime`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_ActualDeliverTime.htm) записывается текущее время.

Для изменения [`ActualDeliverTime`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_ActualDeliverTime.htm) после вызова [`SetDeliveryDelivered`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_SetDeliveryDelivered.htm) нужно вызвать метод [`ChangeDeliveryActualDeliverTime`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeDeliveryActualDeliverTime.htm) с указанием требуемого времени завершения доставки.

