---
title: Выгрузка номенклатуры в весы (IScale.ClearPlu, IScale.SendPlu)
layout: default
tags: v10 v10preview1
---

Начиная с API V10Preview1 интерфейс весов [`IScale`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Devices_IScale.htm) поддерживает выгрузку номенклатуры (PLU, Price Look Up) в память весов с этикеточной печатью:

```cs
public interface IScale : IDevice
{
    ScaleWeightResult MeasureWeight();

    ClearPluResult ClearPlu();

    SendPluResult SendPlu(SendPluTask task);
}
```

* `ClearPlu()` — очищает память PLU весов;
* `SendPlu(SendPluTask task)` — выгружает в весы список товаров.

Эти методы вызывает iikoFront, когда пользователь выгружает номенклатуру в весы из iikoOffice. Если плагин вернул результат с `Success == false`, выгрузка завершается ошибкой.

### Задание на выгрузку

[`SendPluTask`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Device_Tasks_SendPluTask.htm) содержит:

* `Items` — список товаров для выгрузки;
* `ResetBuffer` — очистить буфер PLU перед выгрузкой (`true` в первой порции);
* `StartUpload` — `true`: добавить товары в буфер и начать выгрузку, `false`: только добавить товары в буфер.

Большой список товаров передаётся несколькими порциями: первая порция приходит с `ResetBuffer = true`, последняя — с `StartUpload = true`.

Товар [`SendPluItem`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Device_Tasks_SendPluItem.htm):

* `PluItemId` — идентификатор товара в задании;
* `Department` — номер отдела (префикс штрихкода);
* `QuickNo` — номер PLU;
* `ItemNo` — код товара;
* `Name` — наименование;
* `Price` — цена в минимальных денежных единицах (копейках);
* `WeightTare` — вес тары в граммах;
* `ExpirationDate` — срок годности в минутах;
* `Description` — дополнительное описание;
* `FoodValue` — пищевая ценность в виде строки;
* `NutritionValue` — пищевая ценность на 100 г: `Calories` (ккал), `Protein`, `Fat`, `Carbohydrate` (г).

### Результаты

* [`ClearPluResult`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Device_Results_ClearPluResult.htm) — `Success`: успешно ли очищена память.
* [`SendPluResult`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Device_Results_SendPluResult.htm) — `Success`: общий результат; `ItemResults`: результаты по каждому товару (`SendPluItemResult` с полями `PluItemId`, `PluStatus` — 0 при успехе, иначе код ошибки, и `PluStatusDescription`).

### Совместимость

Новые методы обязательны для реализации: плагины весов, переходящие на V10Preview1 и более новые версии API, должны их реализовать. Если весы не поддерживают выгрузку номенклатуры, верните результат с `Success = false`.

В V9 и более ранних версиях API выгрузка номенклатуры в весы, подключённые через плагин, не поддерживается.

Пример реализации — в проекте `Resto.Front.Api.SampleScalePlugin` (класс `SampleScale`). Подробнее о подключении весов — в статье [Оборудование]({{ site.baseurl }}/v6/ru/Devices.html).
