---
title: Тип оплаты "Без выручки" стал поддерживать тихую оплату
layout: default
---

В iikoFront версии 8.4.4 и выше появилась возможность закрывать заказ, содержащий в себе оплату типом "Без выручки", дистанционно с помощью метода
[`PayOrder`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_PayOrder.htm).

Также в API V8 в
[`WriteoffPaymentItemAdditionalData`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Payments_WriteoffPaymentItemAdditionalData.htm)
было добавлено новое поле
[`AuthorizationUser`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Payments_WriteoffPaymentItemAdditionalData_AuthorizationUser.htm) —
"Сотрудник или гость, на которого производится списание".
Это поле нужно заполнять в случае, если в настройках типа оплаты "Без выручки" выбрана авторизация сотрудником или гостем.
У передаваемого юзера в персональной карточке должна стоять галочка напротив "Гость" и/или "Сотрудник" в зависимости от настройки в типе оплаты.
Если авторизация в типе оплаты не требуется, `AuthorizationUser` можно не указывать.

У сотрудника, чьи
[`ICredentials`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Security_ICredentials.htm)
мы передаем в метод добавления оплаты в заказ, должно быть право F_COTH (Закрывать заказы за счет заведения).

Пример использования:

```
// Сотрудник, у которого будет проверяться право F_COTH (Закрывать заказы за счет заведения).
var credentials = PluginContext.Operations.AuthenticateByPin("777");
var order = PluginContext.Operations.GetOrders().Last(o => o.Status == OrderStatus.New);
var paymentType = PluginContext.Operations.GetPaymentTypes().First(x => x.Kind == PaymentTypeKind.Writeoff);
var additionalData = new WriteoffPaymentItemAdditionalData
{
    Ratio = 1,
    Reason = "Списание",
    // Сотрудник или гость, на которого производится списание.
    AuthorizationUser = PluginContext.Operations.GetUsers().SingleOrDefault(user => user.Name == "Гость Григорий")
};
// Добавление внешнего непроведенного платежа без выручки.
PluginContext.Operations.AddExternalPaymentItem(order.ResultSum, false, additionalData, null, paymentType, order, credentials);
// Или же добавление обычного платежа без выручки.
// PluginContext.Operations.AddPaymentItem(order.ResultSum, additionalData, paymentType, order, credentials);

order = PluginContext.Operations.GetOrderById(order.Id);
// Дистанционная оплата заказа существующими в заказе платежами локально.
PluginContext.Operations.PayOrder(credentials, order, true);
```

Документация, которая может быть полезна:

- [Оплатные действия]({{ site.baseurl }}/v6/ru/Payments).