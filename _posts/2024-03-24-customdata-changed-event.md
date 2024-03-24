---
title: Событие об изменении произвольных данных плагинов
layout: default
---

В API V8 добавлено событие об изменении произвольных данных плагинов [`CustomDataChanged`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_CustomDataChanged.htm). 

Параметр уведомления [`CustomDataChangedEventArgs`](https://iiko.github.io/front.api.sdk/v8/html/Properties_T_Resto_Front_Api_Data_Common_CustomDataChangedEventArgs.htm) состоит из нескольких полей:

- `Key` — ключ элемента произвольных данных;
- `Value` — значение элемента произвольных данных;
- `EventType` — тип события. Может иметь значение создан, обновлён или удалён.

Плагины при подписке на событие получают уведомления только о произвольных данных, которые были записаны/обновлены/удалены ими же или на других терминалах плагинами с тем же `moduleId`. В случае, если два разных плагина с одним `moduleId` будут работать с произвольными данными, то уведомления будут приходить обоим.