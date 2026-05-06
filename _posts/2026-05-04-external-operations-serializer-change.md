---
title: Изменение сигнатур RegisterExternalOperation<TRequest, TResponse> и CallExternalOperation<TRequest, TResponse> в API V10
layout: default
tags: v10preview1 v10
---

Начиная с API V10Preview1 у `RegisterExternalOperation<TRequest, TResponse>` и `CallExternalOperation<TRequest, TResponse>` ([подробности]({{ site.baseurl }}{% post_url 2018-08-03-external operations%})) из сигнатуры удалены `SerializationBinder` и `ISurrogateSelector` в связи с заменой сериализатора на кроссплатформенный вариант.

В методы теперь можно передать список `IReadOnlyCollection<Type> knownTypes` для поддержки полиморфной (де)сериализации. Пример использования можно посмотреть в [SamplePlugin](https://github.com/iiko/front.api.sdk/blob/master/sample/v10preview1/Resto.Front.Api.SamplePlugin/ExternalOperationsTester.cs). Также плагин может использовать альтернативные перегрузки `RegisterExternalOperation` и `CallExternalOperation` (с массивом байт в качестве параметров), самостоятельно реализовав логику (де)сериализации.