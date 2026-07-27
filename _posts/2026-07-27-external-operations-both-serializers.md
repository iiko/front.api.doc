---
title: Отдельные методы RegisterExternalOperationCrossPlatform<TRequest, TResponse> и CallExternalOperationCrossPlatform<TRequest, TResponse> с кроссплатформенным сериализатором.
layout: default
tags: v10preview2 v10
---

В API V10Preview2 возвращены `RegisterExternalOperation<TRequest, TResponse>` и `CallExternalOperation<TRequest, TResponse>` с `SerializationBinder` и `ISurrogateSelector` в сигнатуре (для возможности взаимодействия с плагинам на более ранних версиях API).

Методы с ([кроссплатформенным сериализатором]({{ site.baseurl }}{% post_url 2026-05-06-external-operations-serializer-change%})) переименованы в `RegisterExternalOperationCrossPlatform<TRequest, TResponse>` и `CallExternalOperationCrossPlatform<TRequest, TResponse>`.