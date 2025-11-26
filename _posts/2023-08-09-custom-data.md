---
title: Возможность работать с произвольными синхронизируемыми данными
layout: default
tags: v8preview7 v8
---

Начиная с API V8PreviewV7 появилась возможность работать с произвольными данными. Эти данные являются оперативными и синхронизируемыми между терминалами для плагинов с конкретным `moduleId`.

[`AddOrUpdateCustomData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddOrUpdateCustomData.htm) - добавление/обновление данных по ключу. Введено ограничение на размер данных, количество ключей и длину ключа, записываемых плагинами. Длина ключа не больше 512 символов. Длина значения не больше 32768 символов. Количество ключей, которые может записать плагин не больше 1024.

[`TryGetCustomData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetCustomData.htm) - получение данных по ключу. Если данных по такому ключу нет, будет возвращён `null`.

[`TryRemoveCustomData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryRemoveCustomData.htm) - удаление данных по ключу. В случае, если данные не были найдены, будет возвращён `false`.

[`ClearCustomData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_ClearCustomData.htm) - удаление всех ключей, которые записал плагин.

[`GetAllCustomData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetAllCustomData.htm) - получить все данные для плагина.

Предусмотрено автоматическое очищение данных, которое происходит при закрытии кассовой смены. Если данные не использовались некоторое время (3 дня по умолчанию, контролируется опцией в config.xml - `customDataObsolescenceDuration`), то плагин будет уведомлён об этом подписавшись на [`BeforeCustomDataClear`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_BeforeCustomDataClear.htm). В уведомлении плагин получает словарь ключ-данные, к которым он долго не обращался. В качестве ответа плагин должен вернуть ключи, которые он хочет сохранить. Если плагин не подпишется на уведомление, то "старые" данные будут удалены. На обновление последнего доступа к данным влияют следующие вызовы: [`AddOrUpdateCustomData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddOrUpdateCustomData.htm), [`TryGetCustomData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_TryGetCustomData.htm), [`GetAllCustomData`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetAllCustomData.htm).