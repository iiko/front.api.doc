---
title: Экран закрытого заказа 
layout: default
---
# Расширение функционала экрана закрытого заказа #

На экран закрытого заказа текущей кассовой смены и на экран возврата товаров по чеку можно добавить свои команды, которые могут выполнять операции, используя объект закрытого заказа. 

## Как это выглядит в iikoFront?

### 1. На экране закрытого заказа текущей кассовой смены

Например, вот так выглядит кнопка *«SamplePlugin: Show OK popup»*, добавляемая плагином SamplePlugin из SDK.

![ButtonOnClosedOrder](../../img/actionOnClosedOrderView/buttonOnClosedOrder.png) 


Допустим, плагин показывает окно с сообщением (см. статью [*API диалоговые окна*](ViewManager.html "Диалоговые окна")).

![ActionOnClosedOrderView](../../img/actionOnClosedOrderView/actionOnClosedOrderView.png) 

Плагин может добавить сразу несколько кнопок на экран закрытого заказа.


Например, с помощью SDK SamplePlugin были добавлены 2 кнопки: *«SamplePlugin: Show OK popup»* и *«SamplePlugin: Show input dialog»*.
Тогда на экране закрытого заказа появится кнопка *«Дополнения»*.

![ButtonsOnClosedOrder](../../img/actionOnClosedOrderView/buttonsOnClosedOrder.png) 

Кнопка *«Дополнения»* также появляется, если несколько плагинов добавят по одной кнопке на экран закрытого заказа.

По нажатию на *«Дополнения»* будет выведен список всех кнопок, добавленных плагинами. 

![ActionsOnClosedOrderView](../../img/actionOnClosedOrderView/actionsOnClosedOrderView.png) 


### 2. На экране возврата товаров с чеком (закрытого заказа прошлой кассовой смены)

См. [документацию](http://ru.iiko.help/articles/iikofront-6-1/topic-38) по возврату товаров с чеком (заказы из прошлых кассовых смен).

![ButtonOnPastOrderView](../../img/actionOnClosedOrderView/buttonOnPastOrderView.png) 

## Как добавить свои расширения?

##### Шаг 1: Зарегистрировать обработчик для нужного типа экрана закрытого заказа:
 
```cs
subscriptions = new CompositeDisposable
{
	// Регистрация действия на экране закрытого заказа текущей кассовой смены
	Integration.AddButtonOnClosedOrderView("SamplePlugin: Show ok popup", ShowOkPopupOnClosedOrderScreen),
	
	// Регистрация действия на экране закрытого заказа прошлой кассовой смены
	Integration.AddButtonOnPastOrderView("SamplePlugin: Show ok popup", ShowOkPopupOnPastOrderScreen),
};
``` 

Функция регистрации операции на экран закрытого заказа **текущей** кассовой смены [`AddButtonOnClosedOrderView()`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_Extensions_PluginIntegrationServiceExtensions_AddButtonOnClosedOrderView.htm) принимает на вход 2 аргумента:

- `string` — название кнопки, отображается на UI.
- `Action<IOrder, ICashRegisterInfo, IViewManager>` — функция, которая будет вызвана при нажатии на кнопку.

Функция регистрации операции на экран закрытого заказа **прошлой** кассовой смены [`AddButtonOnPastOrderView()`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_Extensions_PluginIntegrationServiceExtensions_AddButtonOnPastOrderView.htm).

Заказы закрытых кассовых смен iikoFront не хранит, поэтому в методе [`AddButtonOnPastOrderView()`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_Extensions_PluginIntegrationServiceExtensions_AddButtonOnPastOrderView.htm) по идентификатору заказа не получится получить заказ [`IOrder`](http://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Data_Orders_IOrder.htm). 
Идентификатор заказа прошлой кассовой смены будет полезен плагину или внешнему сервису, если он сам ведет свое хранилище.

##### Шаг 2. Описать обработчик добавляемой кнопки:

```cs
private void ShowOkPopupOnClosedOrderScreen(IOrder closedOrder, ICashRegisterInfo cashRegister, IViewManager viewManager)
{
	viewManager.ShowOkPopup("Тестовое окно", "Сообщение показано с помощью SamplePlugin.");
}
```

```cs
private void ShowOkPopupOnPastOrderScreen(Guid pastOrderId, ICashRegisterInfo cashRegister, IViewManager viewManager)
{
	viewManager.ShowOkPopup("Тестовое окно", "Сообщение показано с помощью SamplePlugin.");
}
```
 
Примеры реализации можно посмотреть в проекте SDK SamplePlugin класс `ButtonsTester`.