---
title: Получение объёмов фасовок ЕГАИС (GetEgaisProductPackageVolumes)
layout: default
tags: v9
---

Начиная с API V9 (iikoFront 9.5) в [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm) добавлены методы получения объёмов фасовок алкогольной продукции ЕГАИС:

```cs
IReadOnlyCollection<(Guid productId, int volume)> GetEgaisProductPackageVolumes(string exciseStamp, string fsRarId);

IReadOnlyCollection<int> GetEgaisProductPackageVolumes(Guid productId);
```

* По акцизной марке и идентификатору ФСРАР (`fsRarId`) метод возвращает продукты, связанные с алкокодом марки, и их объёмы. Если марка не найдена в информации о марках ЕГАИС, алкокод определяется по самой марке. Одному алкокоду может соответствовать несколько продуктов.
* По идентификатору продукта метод возвращает объёмы фасовок, связанные с алкокодами этого продукта.

Объём возвращается в миллилитрах (ёмкость ЕГАИС в литрах × 1000).

Если данные не найдены, методы возвращают пустую коллекцию.

Методы нельзя вызывать из `IOperationService`, полученного в обработчике нотификации: в этом случае будет выброшено `InvalidOperationException`.

