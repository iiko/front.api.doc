---
title: Окна ввода даты и времени
layout: default
---

В API V7 появилась возможность показать окна ввода даты и времени (см. статью «[Окна запроса даты и времени]({{ site.baseurl }}/v7/ru/ShowDateTimePopup.html)»).
####1. Окно ввода даты.
Окно ввода даты показывается с помощью метода [`DateTime? IViewManager.ShowDateNumpadPopup(DateTime selectedDate, string title)`]()
![date-numpad-popup](../img/showDateTimePopup/DateNumpadPopup.PNG)
####2. Окно ввода даты и времени.
Окно ввода даты и времени показывается с помощью метода [`DateTime? IViewManager.ShowDateTimePopup(DateTime selectedDate, string title, DateTime minDate, DateTime maxDate)`]()
![date-time-popup](../img/showDateTimePopup/DateTimePopup.PNG)
####3. Окно календаря.
Можно показать окно ввода даты в виде календаря. Для этого добавлен метод [`DateTime? IViewManager.ShowCalendarPopup(DateTime selectedDate, string title, DateTime minDate, DateTime maxDate)`]()
![calendar-popup](../img/showDateTimePopup/CalendarPopup.PNG)