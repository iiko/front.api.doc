---
title: Добавлена возможность получить данные о кассовой смене 
layout: default
---
В API V6 добавлен метод `IOperationService.GetCafeSessionByCashRegister()`, который позволяет по кассовому регистратору ([`ICashRegister`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Devices_ICashRegister.htm)) получить данные о текущей открытой кассовой смене: её номер и время открытия.

