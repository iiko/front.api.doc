---
title: Обновление в методах получения списка заказов, доставок, резервов и банкетов
layout: default
---

В версии API V7 мы внесли изменения в методы получения списка заказов, доставок, резервов и банкетов. В том числе в методы получения данных сущностей по известной ревизии.


Получение полного списка всех сущностей:

- Не поменялся метод получения списка резервов / банкетов —
[`GetReserves`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetReserves.htm),
который возвращает их в любом
[статусе](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Brd_ReserveStatus.htm);
- Поменялся метод получения общего списка заказов (обычных и доставочных) —
[`GetOrders`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetOrders.htm),
у которого появились необязательные параметры:
	- `includeDeleted` — включать в результат заказы в
[статусе](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_OrderStatus.htm)
`Deleted`, которые раньше не включались;
	- `excludeDeliveryOrders` — исключать из результата доставочные заказы.
- Поменялся метод получения списка доставочных заказов (отдельно от обычных) —
[`GetDeliveryOrders`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetDeliveryOrders.htm),
у которого появился необязательный параметр:
	- `includeDeleted` — включать в результат неотмененные доставки
([статус доставки](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_DeliveryStatus.htm) != `Cancelled`) и их заказы в
[статусе](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Orders_OrderStatus.htm)
`Deleted`, которые раньше включались по умолчанию.

Поменялся принцип получения сущностей по ревизии.
Раньше можно было получить только доставочные заказы и только список объектов.
Дело в том, что помимо удаленных заказов в статусе `Deleted` бывают еще удаленные безвозвратно заказы, от которых остался только `id` и только на Главном терминале.
Такие безвозвратно удаленные заказы получаются при делении заказа на 2ФР.
Теперь при получении сущностей по известной ревизии возвращается объект
[`ChangedEntities<T>`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Common_ChangedEntities_1.htm),
в котором лежит [список измененных сущностей](https://iiko.github.io/front.api.sdk/v7/html/F_Resto_Front_Api_Data_Common_ChangedEntities_1_Entities.htm)
и [максимальная ревизия](https://iiko.github.io/front.api.sdk/v7/html/F_Resto_Front_Api_Data_Common_ChangedEntities_1_RevisionTo.htm) сущностей из списка.
Сама измененная сущность
[`ChangedEntity<T>`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Common_ChangedEntity_1.htm)
— это `id` и объект, если этот объект не был удален безвозвратно.

Получение измененных сущностей по известной ревизии:

- [`GetChangedOrders`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetChangedOrders.htm)
— получение измененных заказов;
- [`GetChangedDeliveryOrders`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetChangedDeliveryOrders.htm)
— получение измененных доставок;
- [`GetChangedReserves`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetChangedReserves.htm)
— получение измененных резервов / банкетов.