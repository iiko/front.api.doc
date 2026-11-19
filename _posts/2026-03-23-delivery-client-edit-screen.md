---
title: Экран редактирования клиента доставки (IDeliveryClientEditScreen)
layout: default
tags: v10 v10preview1
---

Начиная с API V10Preview1 добавлен тип экрана [`IDeliveryClientEditScreen`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Screens_IDeliveryClientEditScreen.htm) — экран редактирования данных клиента доставки.

На экране редактирования доставки есть две вкладки: «Заказ» и «Клиент». Раньше нотификация [`ScreenChanged`]({{ site.baseurl }}{% post_url 2020-08-25-screen-changed %}) срабатывала только при открытии доставки и всегда передавала `IDeliveryOrderEditScreen`, а переключение между вкладками не отслеживалось.

Теперь `ScreenChanged` срабатывает при переключении вкладок:

* вкладка «Клиент» — `IDeliveryClientEditScreen`;
* вкладка «Заказ» — `IDeliveryOrderEditScreen`.

При открытии доставки передаётся экран, соответствующий текущей вкладке.

`IDeliveryClientEditScreen`, как и `IDeliveryOrderEditScreen`, наследуется от `IScreenWithDelivery`, поэтому доставку, открытую на экране, можно получить через свойство `Order`.

```cs
PluginContext.Notifications.ScreenChanged.Subscribe(screen =>
{
    if (screen is IDeliveryClientEditScreen clientScreen)
        PluginContext.Log.Info($"Открыта вкладка клиента доставки {clientScreen.Order.Number}");
});
```
