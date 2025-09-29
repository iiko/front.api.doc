---
title: Прерывание проведения плагинной оплаты так, чтобы она не удалялась из заказа
layout: default
tags: v8
---

На данный момент есть возможность прервать оплату заказа плагинным типом путем выброса исключения в методе
[`Pay`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IPaymentProcessor_Pay.htm) и
[`PaySilently`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IPaymentProcessor_PaySilently.htm).

- Выброс [`PaymentActionCancelledException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionCancelledException.htm)
отменит оплату заказа тихо без окон.
- Выброс [`PaymentActionFailedException`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Exceptions_PaymentActionFailedException.htm)
(или любого другого) покажет окно с ошибкой на UI.

После этого плагинная оплата пометится статусом `FAILED` и удалится.

В API V8 у указанных исключений появились перегрузки
([#1](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Exceptions_PaymentActionCancelledException__ctor_2.htm),
[#2](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Exceptions_PaymentActionFailedException__ctor_2.htm)),
позволяющие создать исключение с выставленным в `true` флажком `bool keepInOrder`, которые в результате оставят оплату, при проведении которой было выброшено исключение, в заказе, если есть такая возможность (касается только оплат; предоплаты и чаевые будут вести себя по-старому).