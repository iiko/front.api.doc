---
title: Смена комментария у отпечатанного блюда
layout: default
tags: v8
---

В Api V8 добавлена возможность изменять комментарии у отпечатанных блюд.

Для этого можно использовать операцию: [`ChangeOrderItemComment`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeOrderItemComment.htm).

Для удаления комментария у отпечатанного блюда была добавлена операция [`DeletePrintedOrderItemComment`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_DeletePrintedOrderItemComment.htm).

Чтобы использовать данные возможности необходимо иметь новое право F_CCCP (CAN_CHANGE_COMMENT_PRINTED) - изменять комментарий для отпечатанных блюд.
