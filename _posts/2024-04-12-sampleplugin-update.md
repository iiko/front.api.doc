---
title: Обновление методов добавления блюд в SamplePlugin
layout: default
---

В [SamplePlugin](https://github.com/iiko/front.api.sdk/tree/master/sample/v8) были обновлены методы [AddProduct](https://github.com/iiko/front.api.sdk/blob/7909d838587ad7d0408b9bbe5881d566055b5ffc/sample/v8/Resto.Front.Api.SamplePlugin/EditorTester.cs#L364) и [AddCompoundItem](https://github.com/iiko/front.api.sdk/blob/7909d838587ad7d0408b9bbe5881d566055b5ffc/sample/v8/Resto.Front.Api.SamplePlugin/EditorTester.cs#L411), используемые для добавления в заказ обычных и составных блюд. Эти методы демонстрируют механизм добавления в заказ блюд, требующих указания некоторых полей (например обязательные модификаторы, размер) исключительно в рамках текущей сессии редактирования. Подробнее см. [Редактирование данных]({{ site.baseurl }}/v6/ru/Data editing.html).