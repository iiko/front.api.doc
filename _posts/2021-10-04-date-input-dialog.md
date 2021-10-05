---
title: Окна ввода даты и времени
layout: default
---

В API V7 появилась возможность показать окна запроса даты и времени (см. статью «[Окна запроса даты и времени]({{ site.baseurl }}/v7/ru/DateTimePopups.html)»).

#### 1. Окно ввода даты.

Окно запроса даты показывается с помощью метода [`DateTime? IViewManager.ShowDateNumpadPopup(DateTime selectedDate, string title)`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_UI_IViewManager_ShowDateNumpadPopup.htm)

![date-numpad-popup](../../../img/showDateTimePopup/DateNumpadPopup.png)

#### 2. Окно ввода даты и времени.

Окно запроса даты и времени показывается с помощью метода [`DateTime? IViewManager.ShowDateTimePopup(DateTime selectedDate, string title, DateTime minDate, DateTime maxDate)`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_UI_IViewManager_ShowDateTimePopup.htm)

![date-time-popup](../../../img/showDateTimePopup/DateTimePopup.png)

#### 3. Окно календаря.

Можно показать окно ввода даты в виде календаря. Для этого добавлен метод [`DateTime? IViewManager.ShowCalendarPopup(DateTime selectedDate, string title, DateTime minDate, DateTime maxDate)`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_UI_IViewManager_ShowCalendarPopup.htm)

![calendar-popup](../../../img/showDateTimePopup/CalendarPopup.png)