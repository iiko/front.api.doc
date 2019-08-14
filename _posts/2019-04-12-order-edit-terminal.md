---
title: Добавлена возможность узнать терминал редактирования заказа  
layout: default
---
Начиная с V6/V6Preview5 добавлен метод [`IOperationService.GetLastChangedOrderTerminal(IOrder order)`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_IOperationService_GetLastChangedOrderTerminal.htm), который возвращает [`IHostTerminal`](http://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Data_Organization_IHostTerminal.htm). 

Данный метод может быть полезен, если вы хотите вести журнал действий по заказу в привязке с текущему терминалу.
Можно определять, было ли сохранение на текущем терминале следующим образом:
```
PluginContext.Operations.GetHostTerminal().Equals(PluginContext.Operations.GetLastChangedOrderTerminal(order))
```  