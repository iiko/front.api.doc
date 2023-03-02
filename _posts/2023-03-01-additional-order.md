---
title: Добавлена возможность объединять заказы в дозаказ через API
layout: default
---

В API V8 добавлен метод [`MarkOrderAsAdditional`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_MarkOrderAsAdditional.htm) , который позволяет назначить
заказ [`current`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Editors_Stubs_IOrderStub.htm) дозаказом к заказу [`parent`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Editors_Stubs_IOrderStub.htm),

Заказ current не может быть null, parent может быть null если нужно отменить объединение заказов в доазаказ.
Заказ current должен быть открытым, parent может быть открым или закрытым заказом.
Оба заказа current и parent не могут быть доставочными заказами.