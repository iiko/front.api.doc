---
title: Размеры в комбо-блюдах
layout: default
---

Начиная с API V8PreviewV6:
1. Добавлен параметр `IProductSize size` со значением по умолчанию `null` в метод [`AddOrderCombo`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderCombo.htm).
1. Добавлено свойство размера комбо-блюда: [`IOrderCombo.Size`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_IOrderCombo_Size.htm).
1. Добавлен метод для редактирования размера у комбо-блюда: [`ChangeComboSize`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_Editors_IEditSession_ChangeComboSize.htm)