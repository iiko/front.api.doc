---
title: CashChequePrinting при сторнировании
layout: default
---

Уведомление о печати чека при оплате
[`CashChequePrinting`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_CashChequePrinting.htm),
позволяющее расширить разметку чека в шапке и подвале, начиная с версии iikoFront 8.5.1 будет генерироваться также и при сторнировании (возврате) заказа.

Пример:
```
public sealed class CashChequePrintingHandler : IDisposable
{
    private readonly IDisposable subscription;

    public CashChequePrintingHandler()
    {
        subscription = PluginContext.Notifications.CashChequePrinting.Subscribe(OnCashChequePrinting);
    }

    private static CashCheque OnCashChequePrinting(Guid orderId)
    {
        PluginContext.Log.Info("On cash cheque printing subscription.");

        var order = PluginContext.Operations.GetOrderById(orderId);
        var message = order.Status == OrderStatus.Closed
            ? $"Order #{order.Number} storno."
            : $"Order #{order.Number} pay.";
        
        return new CashCheque
        {
            BeforeCheque = new XElement(Tags.Center, message),
            AfterCheque = new XElement(Tags.QRCode, message)
        };
    }

    public void Dispose()
    {
        try
        {
            subscription.Dispose();
        }
        catch (RemotingException)
        {
            // nothing to do with the lost connection
        }
    }
}
```