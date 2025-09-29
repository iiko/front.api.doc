---
title: Возможность пропускать проверку марки
layout: default
tags: v9preview3 v9
---

Начиная с V9Preview3 появилась возможность пропускать проверку марок для блюд, у которых в коде ТН ВЭД ЕАЭС установлена галочка "Можно пропускать сканирование марки".
Для этого нужно вызвать метод
[`SkipScanningOrderItemMarkingCode`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_SkipScanningOrderItemMarkingCode.htm),
и наличие марки у маркируемого блюда проверяться не будет.
Чтобы марка у блюда снова начала проверяться, нужно вызвать метод
[`ChangeOrderItemMarkingCode`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_ChangeOrderItemMarkingCode.htm).
