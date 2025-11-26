---
title: Способ отправки чека
layout: default
tags: v8
---
Начиная с версии V8, можно установить способ отправки чека заказа - [`ChequeAdditionalInfo`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Payments_ChequeAdditionalInfo.htm), который передается в качестве аргумента - [`SetChequeAdditionalInfo`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_SetChequeAdditionalInfo.htm).

- [`ChequeAdditionalInfo`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Payments_ChequeAdditionalInfo.htm) - информация о чеке.
- [`IOrder`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Orders_IOrder.htm) - заказ, у которого необходимо установить иформацию о чеке.
- [`ICredentials`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Security_ICredentials.htm) - данные для аутентификации.

Пример:
```cs
Operations.AddButtonToPaymentScreen("Add Cheque", false, true, x =>
{
    var isChecked = !x.state.isChecked;
    var caption = isChecked ? "Added Cheque" : "Add Cheque";

    var chequeAdditionalInfo = new ChequeAdditionalInfo(false, "+79998887766", "mail@mail.com", "");

    x.os.SetChequeAdditionalInfo(chequeAdditionalInfo, x.order, x.os.GetDefaultCredentials());
    x.os.UpdatePaymentScreenButtonState(x.state.buttonId, caption, isChecked);
}, IikoIcon);
```