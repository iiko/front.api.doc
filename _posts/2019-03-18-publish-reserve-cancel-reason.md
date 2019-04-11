---
title: Добавлено поле с указанием причины отмены резерва  
layout: default
---
В интерфейс [`IReserve`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Brd_IReserve.htm) добавлено новое поле `CancelReason`, содержащее причину отмены резерва [`ReserveCancelReason`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Brd_ReserveCancelReason.htm) (`ClientNotAppeared`, `ClientRefused`, `Other`), либо `null`, если резерв не отменён.

Резерв можно отменить как через UI приложения iikoFront, так и через API путём вызова метода [`CancelReserve`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_CancelReserve.htm), причина отмены при этом задаётся через аргумент `reason`. Несмотря на то, что возможность отмены резерва с указанием причины доступна во всех поддерживаемых версиях API (V4+), возможность считать эту причину из объекта `IReserve` появилась только сейчас и станет доступна начиная с V6/V6Preview5.