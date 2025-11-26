---
title: Возможность удалить купон и очистить ручные скидки iikoCard в заказе
layout: default
tags: v9preview3 v9
---

Начиная с V9Preview3 появилась возможность удалить купон и очистить ручные скидки iikoCard в заказе.

Для удаления купона следует использовать метод [`ChangeOrderIikoCard5Coupon`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_ChangeOrderIikoCard5Coupon.htm) с 'null' в качестве второго аргумента.

Для удаления ручной скидки следует использовать метод  [`ChangeOrderAppliedIikoCard5ManualConditions`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Extensions_OperationServiceExtensions_ChangeOrderAppliedIikoCard5ManualConditions.htm) с 'null' или пустым List&lt;Guid&gt; в качестве второго аргумента.