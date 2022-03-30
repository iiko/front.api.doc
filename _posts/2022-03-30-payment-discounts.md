---
title: Признак скидочной оплаты и список оплатных скидок
layout: default
---

В API V8Preview1 для типа оплаты добавлено новое свойство
[`IPaymentType.IsDiscount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_IPaymentType_IsDiscount.htm),
которое показывает, является ли тип оплаты скидочным, т.е. проводящимся как скидка.

Также в заказе стал доступен список скидок
[`IOrder.PaymentDiscounts`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IOrder_PaymentDiscounts.htm),
который является результатом применения оплат заказа
[`IOrder.Payments`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IOrder_Payments.htm),
являющихся скидочными, т.е. проводящимися как скидка, к блюдам заказа.
Такие оплаты являются нефискальными и фискализуются на стороне ФР не как оплаты, а как скидки путём уменьшения стоимости блюд.