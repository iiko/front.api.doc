---
title: Добавлена возможность работы с табами
layout: default
---

Начиная с версии iikoRms 7.1.3 в режиме фастфуда появилась возможность помечать заказ как таб, дав ему особенное запоминающееся название. В связи с этим в API V7 добавлен функционал, позволяющий работать с табами.

- [`ITerminalsGroup.IsTabMode`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_ITerminalsGroup_IsTabMode.htm) — включен ли режим табов для группы.
- [`IOrder.TabName`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Orders_IOrder_TabName.htm) — название таба. Может возвращать `null`, когда заказ не помечен как таб.
- [`IEditSession.MarkOrderAsTab`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_MarkOrderAsTab.htm) — пометить заказ как таб, дав ему соответствующее название. 
Данное действие можно выполнить в рамках сессии редактирования при выполнении нескольких действий с заказом или одной строчкой вызовом [`IOperationService.MarkOrderAsTab`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_MarkOrderAsTab.htm), который создаст сессию, пометит заказ как таб и сохранит изменения за кулисами. 

Подробнее о сессиях редактирования в [соответствующем разделе]({{ site.baseurl }}/v6/ru/Data editing.html).

Подробнее о функционировании режима табов в [документации](https://ru.iiko.help/articles/#!iikofront-7-1/topic-69/q/%D1%82%D0%B0%D0%B1%D1%8B/qid/278231/qp/1).