---
title: Несколько однотипных предварительных и внешних оплат банковскими картами
layout: default
---

Теперь, начиная с версии API V7Preview5, в заказ можно добавлять несколько предварительных и внешних оплат одним и тем же типом банковских карт.

Изначально множественные элементы оплаты однотипными банковскими картами [появились на кассе](https://ru.iiko.help/articles/#!releasenotes/releasenotes-6-4/a/h2_2065680182) в iikoFront версии 6.4.
Тогда же в API эту возможность поддержали в методе [`AddPaymentItem`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_AddPaymentItem.htm).
С версии iikoFront 7.5 множественные однотипные оплаты банковскими картами поддерживаются в окне предварительных платежей доставки, а также в методах API:

* [`AddPreliminaryPaymentItem`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_AddPreliminaryPaymentItem.htm)
* [`AddExternalPaymentItem`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_AddExternalPaymentItem.htm)
* [`AddExternalFiscalizedPaymentItem`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_Editors_IEditSession_AddExternalFiscalizedPaymentItem.htm)
