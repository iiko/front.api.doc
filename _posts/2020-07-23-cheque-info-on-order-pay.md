---
title: Добавлена возможность указать способ отправки чека при оплате заказа в соответствии с ФЗ-54
layout: default
---

С версии V7Preview4 можно будет указать способ отправки чека для методов оплаты заказа: 
[`PayOrder`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_PayOrder.htm) и 
[`PayOrderAndPayOutOnUser`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_PayOrderAndPayOutOnUser.htm).

Указанные методы теперь принимают необязательный параметр 
[`ChequeAdditionalInfo`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Payments_ChequeAdditionalInfo.htm) `chequeAdditionalInfo`, 
позволяющий задать варианты формирования чека:

- SMS на указанный номер телефона
- Email на указанный адрес электронной почты
- Бумажный чек