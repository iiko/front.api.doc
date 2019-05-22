---
title: Добавлена возможность расширения функционала экрана закрытого заказа   
layout: default
---
В API V6 добавлен метод [`AddButtonOnClosedOrderView()`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Extensions_PluginIntegrationServiceExtensions_AddButtonOnClosedOrderView.htm), который позволяет добавить на экран закрытого заказа текущей кассовой смены свою операцию (см. статью «[Экран закрытого заказа](v6/ru/ActionOnClosedOrderView.html)»).

Также добавлен метод [`AddButtonOnPastOrderView()`](http://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Extensions_PluginIntegrationServiceExtensions_AddButtonOnPastOrderView.htm), который позволяет добавить свой обработчик на экран [возврата товаров с чеком](http://ru.iiko.help/articles/iikofront-6-1/topic-38) (закрытый заказ прошлой кассовой смены).

