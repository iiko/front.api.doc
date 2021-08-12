---
title: Добавлена возможность расширения функционала экрана кассы   
layout: default
---
В API V7 добавлен метод [`AddButtonToPaymentScreen`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_AddButtonToPaymentScreen.htm), который позволяет добавить на экран кассы свою операцию (см. статью «[Экран кассы](../v7/ru/ActionOnPaymentScreenView.html)»).



Также добавлен метод [`UpdatePaymentScreenButtonState`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_UpdatePaymentScreenButtonState.htm), который позволяет обновить состояние кнопки на экране кассы, а также событие [`PaymentScreenUpdated`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_PaymentScreenUpdated.htm) для отслеживания изменений на экране кассы.

