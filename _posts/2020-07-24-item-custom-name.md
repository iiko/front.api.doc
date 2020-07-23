---
title: Добавлена возможность задавать произвольное название для позиций заказа
layout: default
---

С версии V7Preview4 можно будет указать и получить произвольное название для позиции заказа, в которой есть ссылка на `IProduct`:

Доступные свойства для чтения произвольных названий:

- [`IOrderProductItem.ProductCustomName`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IOrderProductItem_ProductCustomName.htm) - 
обычное блюдо
- [`IOrderCompoundItemComponent.ProductCustomName`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IOrderCompoundItemComponent_ProductCustomName.htm) - 
компонент составного блюда
- [`IOrderServiceItem.ServiceCustomName`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IOrderServiceItem_ServiceCustomName.htm) - 
услуга
- [`IOrderModifierItem.ProductCustomName`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IOrderModifierItem_ProductCustomName.htm) - 
модификатор обычного блюда, составного блюда или компонента составного блюда
- [`IOrderServiceItemPeriod.ServiceCustomName`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IOrderServiceItemPeriod_ServiceCustomName.htm) - 
тариф повременной услуги

Доступные методы для записи произвольных названий:

- Для обычного блюда
	- [`IEditSession.SetProductItemCustomName`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_SetProductItemCustomName.htm)
	- [`OperationServiceExtensions.SetProductItemCustomName`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_SetProductItemCustomName.htm)
- Для компонента составного блюда
	- [`IEditSession.SetCompoundItemComponentCustomName`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_SetCompoundItemComponentCustomName.htm)
	- [`OperationServiceExtensions.SetCompoundItemComponentCustomName`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_SetCompoundItemComponentCustomName.htm)
- Для услуги
	- [`IEditSession.SetServiceItemCustomName`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_SetServiceItemCustomName.htm)
	- [`OperationServiceExtensions.SetServiceItemCustomName`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_SetServiceItemCustomName.htm)
- Для модификатора обычного блюда, составного блюда или компонента составного блюда
	- [`IEditSession.SetOrderModifierItemCustomName`](https://iiko.github.io/front.api.sdk/v7/html/Overload_Resto_Front_Api_Editors_IEditSession_SetOrderModifierItemCustomName.htm)
	- [`OperationServiceExtensions.SetOrderModifierItemCustomName`](https://iiko.github.io/front.api.sdk/v7/html/Overload_Resto_Front_Api_Extensions_OperationServiceExtensions_SetOrderModifierItemCustomName.htm)
- Для тарифа повременной услуги
	- [`IEditSession.SetServiceItemPeriodCustomName`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_SetServiceItemPeriodCustomName.htm)
	- [`OperationServiceExtensions.SetServiceItemPeriodCustomName`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_SetServiceItemPeriodCustomName.htm)

Произвольные названия отображаются в составе заказа и в журнале событий, а также печатаются на чеках.