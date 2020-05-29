---
title: Выпущена версия V7Preview2
layout: default
---

Промежуточный релиз [V7Preview2](https://www.nuget.org/packages/Resto.Front.Api.V7Preview2) выпущен вместе с iikoRms 7.3.5.
Эта версия будет поддерживаться в 7.3.

По [графику]({{ site.baseurl }}/versioning.html) предполагалось, что V7Preview2 выйдет на замену V7Preview1 в 7.2, но в итоге версия 7.2 вышла без новой preview-версии API.
Для удобной миграции с iikoRms 7.2 на 7.3 плагинов, использовавших V7Preview1, поддержка V7Preview1 будет продлена до 7.3, где уже выйдет следующая версия V7Preview3.

Начиная с V7Preview2 [nuget-пакет](https://www.nuget.org/packages/Resto.Front.Api.V7Preview2) содержит MSBuild Target, отключающий копирование библиотеки с контрактами (*Resto.Front.Api.V7Preview2.dll*) в папку с плагином. Раньше копирование приходилось [отключать]({{ site.baseurl }}/directories.html) вручную.