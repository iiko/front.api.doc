---
title: Перевыпуск версии API V10Preview2
layout: default
tags: v10preview2
---

Версия API V10Preview2 перевыпущена. В неё добавлен метод [`TryGetKitchenOrderByOrderId`]({{ site.baseurl }}{% post_url 2026-11-12-try-get-kitchen-order-by-order-id %}) для получения кухонного заказа по идентификатору заказа.

Изменение обратно совместимо: плагины, собранные с предыдущим пакетом V10Preview2, продолжают работать без пересборки.

### NuGet пакет

Актуальный пакет:
* [Resto.Front.Api.V10Preview2 9.7.7022-alpha](https://www.nuget.org/packages/Resto.Front.Api.V10Preview2/9.7.7022-alpha)

Обновите ссылку в проекте:

```xml
<PackageReference Include="Resto.Front.Api.V10Preview2" Version="9.7.7022-alpha" />
```

### См. также

* [Управление версиями API]({{ site.baseurl }}/versioning.html)
* [SDK на GitHub](https://github.com/iiko/front.api.sdk)
