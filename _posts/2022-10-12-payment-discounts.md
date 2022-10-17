---
title: Оплаты, проводящиеся или фискализирующиеся как скидка
layout: default
---

В API V8 появилась возможность различать скидочные оплаты.

Ранее мы писали
[заметку]({{ site.baseurl }}/2022/03/30/payment-discounts.html)
об оплатах, проводящихся как скидка.
Теперь появились оплаты, которые фискализируются как скидка.
Такие оплаты также являются нефискальными и фискализуются на стороне ФР не как оплаты, а как скидки путём уменьшения стоимости блюд.
Но в OLAP-отчетах сервера они по-прежнему отображаются не как скидки, а как обычные нефискальные оплаты
(тогда как оплаты, проводящиеся как скидка, притворяются скидками и в OLAP-отчетах тоже).

Таким образом, наше API претерпело такие изменения:

- Свойство типа оплаты `IPaymentType.IsDiscount` было удалено. Вместо него было добавлено 2 свойства:
	- [`IPaymentType.ProcessAsDiscount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_IPaymentType_ProcessAsDiscount.htm)
— является ли тип оплаты проводящимся как скидка.
	- [`IPaymentType.FiscalizeAsDiscount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_IPaymentType_FiscalizeAsDiscount.htm)
— является ли тип оплаты фискализирующимся как скидка.
- В элемент оплаты заказа `IPaymentItem` было добавлено 2 свойства:
	- [`IPaymentItem.IsProcessedAsDiscount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_IPaymentItem_IsProcessedAsDiscount.htm)
— была ли данная оплата проведена как скидка. Данное свойство имеет смысл только для предоплат:
[`IPaymentItem.IsPrepay`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_IPaymentItem_IsPrepay.htm).
Для обычных оплат необходимо воспользоваться соответствующим свойством типа оплаты: 
[`IPaymentType.ProcessAsDiscount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_IPaymentType_ProcessAsDiscount.htm).
	- [`IPaymentItem.IsFiscalizedAsDiscount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_IPaymentItem_IsFiscalizedAsDiscount.htm)
— была ли данная оплата фискализирована как скидка. Данное свойство имеет смысл только для предоплат:
[`IPaymentItem.IsPrepay`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_IPaymentItem_IsPrepay.htm).
Для обычных оплат необходимо воспользоваться соответствующим свойством типа оплаты: 
[`IPaymentType.FiscalizeAsDiscount`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_IPaymentType_FiscalizeAsDiscount.htm).
- В элемент скидки заказа `IDiscountItem` было добавлено новое свойство
[`IDiscountItem.DiscountPaymentItem`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IDiscountItem_DiscountPaymentItem.htm)
— элемент оплаты из списка
[`IOrder.Payments`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IOrder_Payments.htm), 
проводящийся или фискализирующийся как скидка.
Если скидка не является оплатной, данное свойство равно `null`.
- Список оплатных скидок по-прежнему находится в
[`IOrder.PaymentDiscounts`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IOrder_PaymentDiscounts.htm).