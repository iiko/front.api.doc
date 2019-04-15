---
title: Изменение в IViewManager и IProgressBar 
layout: default
---
Начиная с V6/V6Preview5 объект типа [`IProgressBar`](https://iiko.github.io/front.api.sdk/v5/html/T_Resto_Front_Api_V5_UI_IProgressBar.htm) замещается методом `IViewManager.ChangeProgressBarMessage(string message)`.

Как следствие этого, в те операции, в которые ранее передавался `IProgressBar`, сейчас будет передаваться `IViewManager`.
Во всех операциях, приведенных ниже, станет возможно взаимодействие с пользователем в стандартном UI iikoFront:

Операции с возможностью отмены действия:
- [`INotificationService.SubscribeOnBeforeServiceCheque`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_INotificationService_SubscribeOnBeforeServiceCheque.htm)
- [`INotificationService.SubscribeOnBeforeOrderBill`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_INotificationService_SubscribeOnBeforeOrderBill.htm) 
- [`INotificationService.SubscribeOnBeforeDeletePrintedIte`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_INotificationService_SubscribeOnBeforeDeletePrintedItem.htm)
- [`INotificationService.SubscribeOnBeforeDeleteOrder`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_INotificationService_SubscribeOnBeforeDeleteOrder.htm)


Операции-наблюдатели:
- [`INotificationService.SubscribeOnNavigatingToPaymentScreen`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_INotificationService_SubscribeOnNavigatingToPaymentScreen.htm)
- [`INotificationService.SubscribeOnCafeSessionOpening`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_INotificationService_SubscribeOnCafeSessionOpening.htm)
- [`INotificationService.SubscribeOnCafeSessionClosing`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_INotificationService_SubscribeOnCafeSessionClosing.htm)

Кнопки:
- [`Button`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_UI_Button__ctor.htm)
- [`ButtonOnClosedOrderView `](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_UI_ButtonOnClosedOrderView__ctor.htm)
- [`ButtonOnPastOrderView `](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_UI_ButtonOnPastOrderView__ctor.htm)
