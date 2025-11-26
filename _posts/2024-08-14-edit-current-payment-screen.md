---
title: Экран оплаты заказа (экран кассы) позволяет вносить изменения по инициативе плагина
layout: default
tags: v9preview3 v9
---

Начиная с V9Preview3 плагин может редактировать через API текущий заказ, открытый на кассе, не получая
[`EntityAlreadyInUseException`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Exceptions_EntityAlreadyInUseException.htm) :-)

Ранее в V7Preview5 была добавлена возможность редактировать открытый на экране редактирования заказ в любой момент, когда не выполняются другие операции
([подробности]({{ site.baseurl }}{% post_url 2020-10-20-edit-current-order %})).

Для внесения изменений в заказ, открытый на экране оплаты, плагину необходимо вызвать метод
[`TryEditCurrentPaymentScreen`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_TryEditCurrentPaymentScreen.htm)
и передать в него ссылку на callback, который iikoFront вызовет, как только появится такая возможность.
При бездействии это произойдёт немедленно, а если в этот момент выполняются другие операции, то callback будет вызван сразу по их завершении.
В любом случае, метод `TryEditCurrentPaymentScreen` вернёт управление после вызова callback'а.
Если callback выбросит исключение, оно вылетит из `TryEditCurrentPaymentScreen`.
В случае, если в момент вызова `TryEditCurrentPaymentScreen` выполнялась другая операция, которая в итоге привела к выходу с экрана оплаты заказа,
callback не удастся вызвать ни сразу, ни отложенно, а метод `TryEditCurrentPaymentScreen` сгенерирует исключение `OperationCanceledException`.

На время выполнения callback'а показывается прогрессбар.
В callback будут переданы:

- текущий заказ,
- контекст о состоянии экрана кассы [`IPaymentScreenUpdatedContext`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_OperationContexts_IPaymentScreenUpdatedContext.htm),
- локальная версия [`IOperationService`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_IOperationService.htm) для редактирования текущего заказа,
- [`IViewManager`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_UI_IViewManager.htm) с возможностью показывать диалоговые окна и
[менять текст](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_UI_IViewManager_ChangeProgressBarMessage.htm) на прогрессбаре.

У callback'а есть возвращаемое значение, которое для большинства пользователей должно быть `null`.

Пример:
```
private void EditPayScreen()
{
    PluginContext.Operations.TryEditCurrentPaymentScreen(x =>
    {
        // В режиме по сумме (режим пока недоступен для большинства пользователей) добавляем в заказ нового гостя,
        // отнимаем у существующих гостей из результирующей суммы по 10, складываем и добавляем новому гостю.
        if (x.context.PaymentSplitMode == PaymentSplitMode.SplitByPrice)
        {
            var guestsSums = new List<(Guid, decimal)>();
            var newGuest = x.os.AddOrderGuest($"Guest {x.context.PaymentSplitGuestInfos.Count + 1}", x.order, x.os.GetDefaultCredentials());

            var newGuestResultSum = 0m;
            foreach (var guestInfo in x.context.PaymentSplitGuestInfos)
            {
                if (guestInfo.ResultSum > 10)
                {
                    guestsSums.Add((guestInfo.GuestId.Value, guestInfo.ResultSum - 10));
                    newGuestResultSum += 10;
                }
                else
                {
                    guestsSums.Add((guestInfo.GuestId.Value, guestInfo.ResultSum));
                }
            }
            guestsSums.Add((newGuest.Id, newGuestResultSum));
            // Возвращаем распределение сумм по гостям в режиме по сумме.
            return guestsSums;
        }

        // В режиме по блюдам (режим пока недоступен для большинства пользователей) добавляем новое блюдо последнему гостю.
        if (x.context.PaymentSplitMode == PaymentSplitMode.SplitByDish)
        {
            var product = x.os.GetActiveProducts().Single(p => p.Name == "Флаерное блюдо");
            x.os.AddOrderProductItem(1m, product, x.order, x.order.Guests.Last(), null, x.os.GetDefaultCredentials());
            // Возвращаем null, т.к. распределение сумм по гостям в режиме по блюдам недоступно.
            return null;
        }

        // В режиме целиком (по умолчанию) добавляем в заказ оплату типом VISA на полную сумму.
        if (x.context.PaymentSplitMode == PaymentSplitMode.WholeOrder)
        {
            x.os.AddPaymentItem(x.context.PaymentSplitGuestInfos.Single().ResultSum, null, x.os.GetPaymentTypes().First(p => p.Name.ToUpper() == "VISA"), x.order, x.os.GetDefaultCredentials());
            // Возвращаем null, т.к. распределение сумм по гостям в режиме целиком недоступно.
            return null;
        }

        throw new InvalidEnumArgumentException(nameof(x.context.PaymentSplitMode), (int)x.context.PaymentSplitMode, typeof(PaymentSplitMode));
    });
}
```