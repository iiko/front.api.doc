---
title: Поддержка размеров блюд в Api
layout: default
---
В 5.0 добавлено новое понятие — размер блюда (подробнее [отдельная статья]({{ site.baseurl }}/v6/ru/ProductScales)). Начиная с V5 в Api публикуется информация о шкалах и размерах блюд, соответственно, для блюд в заказе можно указывать размер: при добавлении через аргумент `size` методов `AddOrderProductItem`/`AddOrderCompoundItem`, позднее через метод `ChangeOrderCookingItemSize`.  