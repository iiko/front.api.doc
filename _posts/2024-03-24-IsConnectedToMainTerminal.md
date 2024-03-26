---
title: Получение статуса подключения к ГТ
layout: default
---

В Api V8Preview7 был добавлен метод [`IsConnectedToMainTerminal`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_IsConnectedToMainTerminal.htm) для получения статуса подключения к Главному терминалу.

Данный метод является альтернативой для нотификации  [`ConnectionToMainTerminalChanged`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_ConnectionToMainTerminalChanged.htm). Он сделан для случаев, когда плагины не успевают включиться к моменту получения нотификации о подключении терминала к ГТ, чтобы они могли самостоятельно проконтролировать статус подключения.