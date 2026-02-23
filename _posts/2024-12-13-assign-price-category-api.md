---
title: Установка ценовой категории через API
layout: default
tags: v9preview6 v9
---
Теперь можно устанавливать ценовую категорию для заказа через API даже если в настройках ценовой категории не выставлена галка "Может быть назначена вручную в iikoFront".

Убрана проверка настройки AssignableManually при вызове [`ChangePriceCategory`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_ChangePriceCategory.htm). Это упрощает интеграцию с внешними системами, которые программно назначают ценовую категорию.
