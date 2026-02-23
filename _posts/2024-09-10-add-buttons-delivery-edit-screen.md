---
title: Добавление кнопок на экран редактирования доставки
layout: default
tags: v9preview4 v9
---
Добавлена возможность добавлять кастомные кнопки на экран редактирования доставочного заказа.

Перед отправкой в плагин доставочный заказ и доставка сохраняются в БД. Плагин может вносить изменения через стандартные методы [`IEditSession`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Editors_IEditSession.htm) (например, [`AddOrderProductItem`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderProductItem.htm)) и сохранить их через [`SubmitChanges`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_SubmitChanges.htm). При возврате управления изменения будут отображены на экране.

