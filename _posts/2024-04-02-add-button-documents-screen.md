---
title: Кнопки на экране печати документов 
layout: default
tags: v9preview1 v9

---

В API V9Preview1 добавлена возможность добавлять кнопки на экран печати документов во фронте, чтобы плагины могли вызывать собственные окна. 


Добавлен метод [`AddButtonToDocumentsScreen`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_AddButtonToDocumentsScreen.htm) со следующими параметрами:

* `caption` — текст кнопки,
* `iconGeometry` — иконка в формате [Path Markup](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/graphics-multimedia/path-markup-syntax?view=netframeworkdesktop-4.8) (можно без иконки),
* `callback` — обработчик нажатия на кнопку, в котором можно показывать диалоговые окна и вносить изменения.

В API V9Preview1 был добавлен еще тип [`IDocument`](https://iiko.github.io/front.api.sdk/v9/html/Properties_T_Resto_Front_Api_Data_Documents_IDocument.htm) , который передает тип документа и номер, при нажатии на кнопку.

