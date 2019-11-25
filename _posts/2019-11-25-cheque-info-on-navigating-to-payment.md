---
title: Добавлена возможность выбрать способ отправки чека в соответствии с ФЗ-54
layout: default
---

Начиная с V7 при навигации на экран оплаты можно будет указать способ формирования чека в соответствии с ФЗ-54 (актуально только для России).

В событие [OnNavigatingToPaymentScreen](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_INotificationService_SubscribeOnNavigatingToPaymentScreen.htm) добавлен дополнительный параметр — контекст ([INavigatingToPaymentScreenOperationContext](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_OperationContexts_INavigatingToPaymentScreenOperationContext.htm)), позволяющий задать варианты формирования чека ([ChequeAdditionalInfo](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Payments_ChequeAdditionalInfo.htm)):

- SMS на указанный номер телефона
- Email на указанный адрес электронной почты
- Бумажный чек

После перехода на экран оплаты кассир сможет изменить заданные плагином параметры чека.