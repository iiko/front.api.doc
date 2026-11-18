---
title: Формирование товарных этикеток со штрихкодом
layout: default
tags: v10 v10preview4
---

Начиная с API V10Preview4 в `IOperationService` добавлен метод [`GetPriceTicketMarkup`](https://iiko.github.io/front.api.sdk/v10/html/Overload_Resto_Front_Api_IOperationService_GetPriceTicketMarkup.htm). Он формирует одну товарную этикетку по настроенному в iikoFront шаблону (Stimulsoft или Razor) — так же, как экран печати товарных этикеток.

Метод не печатает этикетку, а возвращает [`PriceTicketMarkup`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Print_PriceTicketMarkup.htm) с документом `Document`. Чтобы напечатать этикетку, передайте документ в [`Print`](https://iiko.github.io/front.api.sdk/v10/html/Overload_Resto_Front_Api_IOperationService_Print.htm) с тем же принтером. Принтер не обязательно должен быть назначен принтером этикеток отделения. Вызов не требует прав сотрудника и не открывает диалоги iikoFront.

Есть две перегрузки:

* с фасовкой из [`IProduct.BarcodeContainers`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Data_Assortment_IProduct_BarcodeContainers.htm) — на этикетку попадают штрихкод фасовки и её актуальное количество;
* с количеством товара в базовых единицах — штрихкод формируется по тем же правилам, что и на экране печати этикеток.

Если штрихкод невозможно получить или сформировать, документ всё равно формируется, а `Barcode` равен `null`. Печатать ли такую этикетку, решает плагин.

Чтобы напечатать несколько одинаковых этикеток, сформируйте документ один раз и передайте его в `Print` нужное число раз:

```csharp
var printer = PluginContext.Operations.GetPrintingDeviceInfoById(printerId);
var markup = PluginContext.Operations.GetPriceTicketMarkup(product, product.BarcodeContainers[0], printer);
if (markup.Barcode == null)
    return; // этикетку без штрихкода не печатаем

for (var i = 0; i < copiesCount; i++)
    PluginContext.Operations.Print(printer, markup.Document);
```
