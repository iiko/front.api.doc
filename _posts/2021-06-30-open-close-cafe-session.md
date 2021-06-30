---
title: Расширены возможности для открытия и закрытия кассовой смены из API
layout: default
---

В [iikoFront версии 7.7.5 и выше](https://ru.iiko.help/articles/#!releasenotes/2021-spring)
появилась возможность открывать ([`OpenCafeSession`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_OpenCafeSession.htm))
и закрывать ([`CloseCafeSession`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_CloseCafeSession.htm))
кассовую смену любых фискальных регистраторов на любом кассовом терминале.
Раньше же такая возможность поддерживалась только для виртуальных фискальных регистраторов на главном кассовом терминале.

Функция заработает автоматически в указанной версии iikoFront на всех поддерживаемых версиях API начиная с V6.
