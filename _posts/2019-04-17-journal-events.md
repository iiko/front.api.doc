---
title: Добавлена возможность создавать внешние события для журнала событий
layout: default
---
Начиная с V6/V6Preview4 добавлена возможность создавать внешние события для журнала событий. Добавлены методы:

- [`IEditSession.CreateJournalEvent()`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_CreateJournalEvent.htm) - создаёт внешнее событие с указанным источником события (`sender`), важностью (`severity`) и подтипом (`eventType`). Опционально можно указать дату события (`dateTime`).
- [`IEditSession.SetJournalEventAttribute()`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_SetJournalEventAttribute.htm) - задаёт событию атрибуты. Плагин может использовать стандартные атрибуты для отображания в журнале событий или создавать кастомные атрибуты, которые будут доступны через API iiko.biz (/api/0/events/events).
- [`IEditSession.AttachToJournalEvent()`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_AttachToJournalEvent.htm) - проставляет в событие стандартные атрибуты заказа. Если заказ доставочный, то кроме атрибутов заказа проставляет и стандартные атрибуты доставки.
