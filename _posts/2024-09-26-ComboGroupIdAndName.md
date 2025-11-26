---
title: Группы комбо при создании из API
layout: default
tags: v9preview3 v9
---

В V9Preview3 API метод [AddOrderCombo](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_AddOrderCombo.htm) был модифицирован: аргумент `IReadOnlyDictionary<Guid, IOrderCookingItemStub> comboItems` был заменен на `IReadOnlyDictionary<ComboGroupIdAndName, IOrderCookingItemStub> comboItems`. Также, для этого изменения, был введен новый класс [ComboGroupIdAndName](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_ComboGroupIdAndName.htm). 

Данная модификация позволяет передавать желаемое название [группы блюд](https://ru.iiko.help/articles/iikocard/topic-18/a/h2_829400620) комбо в iikoFront.  Это применимо при ведении отчетов с помощью [OLAP-отчета по продажам](https://ru.iiko.help/articles/iikooffice-8-9/olap-sales) для случая, когда несколько групп комбо содержат одинаковые блюда (смотреть на поле `Название Комбо`).

Аналогичное изменение было проведено и с API методом [UpdateOrderComboItems](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_Editors_IEditSession_UpdateOrderComboItems.htm)


**ВАЖНО**

Вследствие данных модификаций, при переходе на версии API V9Preview3 и выше, необходимо исправить применение вышеупомянутых методов в используемых плагинах. Стоит учитывать, что в [ComboGroupIdAndName](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_ComboGroupIdAndName.htm) [GroupName](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_ComboGroupIdAndName_GroupName.htm) не может иметь значение `null`. Если название группы не имеет для вас значение - просто передайте пустую строкy.