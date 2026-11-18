---
title: Доставка в запросе предложения внешней курьерской службы
layout: default
tags: v10 v10preview4
---

Начиная с API V10Preview4 в метод [`RegisterExternalCourierServicesProvider`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_RegisterExternalCourierServicesProvider.htm) в обработчик расчёта предложения доставки (`getOfferCallback`) передаётся доставка, для которой запрашивается предложение:

```cs
IDisposable RegisterExternalCourierServicesProvider(
    string providerId,
    Func<(Guid serviceId, string serviceName, bool isActive, byte[] image, string additionalInfo)[]> getServicesCallback,
    Func<(DeliveryPoint deliveryPoint, Guid serviceId, IDeliveryOrder order, IViewManager vm), DeliveryOfferChooserDialogResult> getOfferCallback);
```

Раньше обработчик получал только точку доставки и идентификатор службы. Теперь по `order` можно учесть состав, сумму, время доставки и другие параметры заказа при расчёте стоимости и сроков.

`order` отражает текущее состояние доставки на экране редактирования в момент выбора внешнего курьера, в том числе ещё не сохранённые изменения.

### Совместимость

В API V10Preview4 и V10 тип параметра `getOfferCallback` изменён: в кортеж добавлен элемент `order`. Плагинам, переходящим на эти версии, нужно добавить новый элемент в обработчик. В V10Preview3 и более ранних версиях сигнатура не изменилась.

### Обработка ошибок

Начиная с iikoFront 9.8.2 для всех версий API:

* если `getServicesCallback` выбрасывает исключение, оно записывается в лог, а список служб этого поставщика считается пустым;
* если `getOfferCallback` выбрасывает исключение, оно записывается в лог, пользователю показывается сообщение о том, что получить предложение не удалось, и выбор курьера сбрасывается.
