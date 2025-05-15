---
title: Возможность запретить фронту изменять переданные из АПИ значения продолжительности и зоны доставки
layout: default
tags: v9preview1 v9
---

Начиная с V9Preview1 появилась возможность запретить фронту менять рассчитанные внешним ГРиКом и переданные из АПИ значения продолжительности и зоны доставки.

В доставочный заказ [`IDeliveryOrder`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IDeliveryOrder.htm) добавлено новое поле [`FixedRestrictions`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_FixedRestrictions.htm), с помощью которого можно или разрешать фронту заменять значения продолжительности доставки [`Duration`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_Duration.htm)
 и зоны [`Zone`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_Zone.htm)
 на те, которые фронт получает из "своего" ГРиК, или, наоборот, не давать редактировать поля `Duration` и `Zone`, оставив в них полученные из АПИ данные.

Для того, чтобы воспользоваться новым функционалом, нужно при создании доставки из АПИ в аргументах метода [`IEditSession.CreateDeliveryOrder`](https://iiko.github.io/front.api.sdk/v9/html/Overload_Resto_Front_Api_Editors_IEditSession_CreateDeliveryOrder.htm) передать не пустое значение продолжительности доставки в параметре `TimeSpan? duration` и в параметре `bool fixedRestrictions` передать `true`. Если при этом нужно передать и зафиксировать зону доставки, в параметре `string zone` также должно быть не пустое значение. При `IDeliveryOrder.FixedRestrictions = true` фронт не вызывает проверку ГРиК для данной доставки и, таким образом, оставляет значения продолжительности и зоны доставки неизменными.

Значение `IDeliveryOrder.FixedRestrictions` автоматически сбрасывается фронтом на `false` только при смене режима обслуживания [`IOrderType`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Organization_IOrderType.htm).

Изменить значение поля `IDeliveryOrder.FixedRestrictions` можно с помощью нового метода [`IEditSession.ChangeDeliveryFixedRestrictions`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_ChangeDeliveryFixedRestrictions.htm).

При вызове методов редактирования доставочного заказа - изменения продолжительности доставки [`IEditSession.ChangeDeliveryDuration`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_ChangeDeliveryDuration.htm) или зоны [`IEditSession.ChangeDeliveryZone`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_ChangeDeliveryZone.htm) - фронт применит новые параметры, оставив IDeliveryOrder.FixedRestrictions без изменения.

Если доставка с `IDeliveryOrder.FixedRestrictions = true` дошла до (старого) Call Center и ее изменили так, что вызвался ГРиК, флаг `IDeliveryOrder.FixedRestrictions` сбрасывается в `false`, а поля [`IDeliveryOrder.Duration`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_Duration.htm) и [`IDeliveryOrder.Zone`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_IDeliveryOrder_Zone.htm) будут отредактированы - в них запишутся значения, которые вернул ГРИК.