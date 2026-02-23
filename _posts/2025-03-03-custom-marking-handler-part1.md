---
title: Регистрация кастомных обработчиков кодов маркировки
layout: default
tags: V9Preview6 V9
---
Добавлена возможность регистрировать кастомные обработчики кодов маркировки через метод [`RegisterIdentifierCodeHandlers`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_RegisterIdentifierCodeHandlers.htm).

## Возможности обработчика

Обработчик может:
- Проверять валидность формата кода маркировки
- Выполнять проверку и предоставлять результат

Один код может быть обработан несколькими обработчиками независимо. Например, одна марка может быть проверена через фискальный регистратор и через систему "Честный ЗНАК".

## Интерфейс IIdentifierCodeHandler

[`IIdentifierCodeHandler`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_IIdentifierCodeHandler.htm) включает следующие методы:

- [`IsIdentifierCodeSupported`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Data_Orders_IIdentifierCodeHandler_IsIdentifierCodeSupported.htm) — определяет, может ли обработчик распознать код (для позиции заказа или модификатора), и возвращает специфические флаги
- [`VerifyIdentifierCode`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Data_Orders_IIdentifierCodeHandler_VerifyIdentifierCode.htm) — выполняет проверку кода идентификации, добавленного к позиции или модификатору

Свойства обработчика:
- `SourceKey` — уникальный ключ, идентифицирующий обработчик
- `Description` — человекочитаемое описание обработчика

