---
title: Расширение статусов доставки DeliveryStatus
layout: default
tags: v9preview3 v9
---

Начиная с V9Preview3 обновилась таблица статусов доставки [DeliveryStatus](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Brd_DeliveryStatus.htm).

Был исключен статус `Unconfirmed`(его заменил статус `New`), а сам `New` разветвился на `Confirmed`, `CookingStarted`, `CookingCompleted` и `Packed`.

**Текущая таблица статусов доставки**

| Статус | Описание |
| ------ | -------- |
| New | _Новый (ожидает подтверждения)_ |
| Confirmed | _Подтвержден (ожидает начала приготовления)_ |
| CookingStarted | _Готовится_ |
| CookingCompleted | _Приготовлен (собирается)_ |
| Packed | _Собран (ожидает курьера или выдачи)_ |
| Waiting | _Курьер назначен (ожидает отправки)_ |
| OnWay | _В пути (едет к клиенту)_ |
| Delivered | _Вручен (курьер едет назад)_ |
| Closed | _Закрыт_ |
| Cancelled | _Отменен_ |

Не стоит забывать о [процессе сборки заказа](https://ru.iiko.help/articles/iikofront-8-9/iikosouschef1/a/h2_204041478). При отключенном процессе сборки, доставка, перейдя в статус `CookingCompleted`, автоматически доведется до статуса `Packed`, тем самым завершив стадию приготовления.
