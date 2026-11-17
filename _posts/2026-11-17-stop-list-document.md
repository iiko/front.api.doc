---
title: Формирование документа стоп-листа
layout: default
tags: v10 v10preview4
---

Начиная с API V10Preview4 в `IOperationService` добавлен метод [`GetStopListDocument`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetStopListDocument.htm). Он формирует штатный документ стоп-листа — такой же, какой печатает iikoFront.

Документ строится по текущему стоп-листу терминала (по стоп-листу группы, если стоп-листы разделены по группам) и содержит два раздела:

* блюда с нулевым или отрицательным остатком — в разделе стоп-листа;
* блюда с положительным остатком — в разделе блюд с ограниченным остатком.

Размеры блюд выводятся рядом с названием.

Метод не печатает документ, а возвращает [`Document`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Data_Print_Document.htm) с разметкой, ещё не отформатированной для принтера. Чтобы напечатать стоп-лист, передайте документ в [`Print`](https://iiko.github.io/front.api.sdk/v10/html/Overload_Resto_Front_Api_IOperationService_Print.htm), например на принтер отчётов. Вызов не изменяет стоп-лист и остатки и не требует авторизации сотрудника. Если сформировать документ не удалось, метод выбрасывает `ReportBuildException`.

```csharp
var document = PluginContext.Operations.GetStopListDocument();
PluginContext.Operations.Print(PluginContext.Operations.GetReportPrinter(), document);
```

Если нужны сами позиции стоп-листа, а не печатная форма, используйте [`GetStopListProductsRemainingAmounts`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_IOperationService_GetStopListProductsRemainingAmounts.htm).
