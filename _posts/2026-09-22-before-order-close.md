---
title: Нотификация перед закрытием заказа (BeforeOrderClose)
layout: default
tags: v10 v10preview3
---

Начиная с API V10Preview3 в [`INotificationService`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_INotificationService.htm) добавлена нотификация [`BeforeOrderClose`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_INotificationService_BeforeOrderClose.htm):

```cs
INotification<(IOrder order, IReadOnlyCollection<IPaymentItem> paymentItems, IOperationService os, IViewManager vm)> BeforeOrderClose { get; }
```

Нотификация вызывается после проведения оплат, но до закрытия заказа. Она позволяет плагину сохранить в заказе данные, полученные при проведении оплат, — например, записать [`ExternalData`]({{ site.baseurl }}{% post_url 2024-03-24-get-all-external-data %}) с результатами работы платёжной системы.

### Зачем это нужно

В режиме «фискализация до оплаты» нотификация [`BeforeDoCheque`]({{ site.baseurl }}{% post_url 2022-10-12-cancel-before-do-cheque %}) вызывается до печати фискального чека, то есть до проведения оплат. В ранних версиях iikoFront она вызывалась повторно после оплат, и плагины использовали этот вызов, чтобы дополнить заказ. Начиная с iikoFront 9.5 повторного вызова нет, и записать в заказ данные о проведённых оплатах было нельзя. `BeforeOrderClose` решает эту задачу.

### Порядок вызова

При закрытии заказа:

1. проводятся оплаты;
2. вызывается `BeforeDoCheque` (кроме режима «фискализация до оплаты» — в нём `BeforeDoCheque` вызывается раньше, перед печатью фискального чека);
3. **вызывается `BeforeOrderClose`**;
4. печатается чек и заказ закрывается.

`BeforeOrderClose` вызывается в обоих режимах фискализации ровно один раз при закрытии заказа. При печати фискального чека до оплаты нотификация не вызывается.

### Изменение заказа

В переданном `IOperationService` разрешено создавать сессию редактирования. Перед вызовом заказ сохраняется, а после выполнения обработчиков перечитывается, поэтому изменения, внесённые плагином, попадают в закрытый заказ.

```cs
PluginContext.Notifications.BeforeOrderClose.Subscribe(x =>
{
    x.os.AddOrderExternalData("payment-info", new ExternalDataItem("...", false), x.order, x.os.GetDefaultCredentials());
});
```

### Отмена

Чтобы прервать закрытие заказа, выбросьте `OperationCanceledException`. Обработчики остальных плагинов всё равно будут вызваны, сообщения всех отказавших плагинов будут показаны пользователю, а операция закрытия будет отменена.

`vm` может быть `null`, если закрытие заказа выполняется без участия пользователя. Проверяйте `vm` перед показом диалогов.
