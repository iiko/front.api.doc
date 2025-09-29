---
title: Возможность добавления кнопок на экран доставочных заказов 
layout: default
tags: v9preview4 v9

---

В API V9Preview4 появилась возможность добавления кнопок на экран доставочных заказов, с помощью которых плагины могут отображать собственные окна. 


Добавлен метод [`AddButtonToDeliveriesScreen`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_AddButtonToDeliveriesScreen.htm) со следующими параметрами:

* `string caption` — название кнопки,
* `bool isChecked` — выделена ли кнопка,
* `bool isEnabled` — доступна ли кнопка для нажатия,
* `Action<(IViewManager vm, (Guid , string , bool , string ) state)> callback` — обработчик нажатия на кнопку, в котором возможно отображение диалоговых окон и внесение изменений,
* `iconGeometry` — иконка в формате [Path Markup](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/graphics-multimedia/path-markup-syntax?view=netframeworkdesktop-4.8) (необязательный аргумент).

Обработчик нажатия на кнопку принимает экземпляр [`IViewManager`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_UI_IViewManager.htm) для отображения окон, а также текущее состояние кнопки - `(Guid buttonId, string caption, bool isChecked, string iconGeometry) state`.