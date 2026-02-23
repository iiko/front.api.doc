---
title: Настройки кухонного экрана в API
layout: default
tags: v9
---

В [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IOperationService.htm) добавлен метод [`GetRestaurantKitchenSettings`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetRestaurantKitchenSettings.htm) для получения настроек режимов приготовления и кухонного экрана.

Метод возвращает [`IRestaurantKitchenSettings`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Organization_IRestaurantKitchenSettings.htm) с настройками:

* `ServeDishesAsFastAsPossible` - подавать блюда как можно быстрее или одновременной подачей
* `CourseDishesCookingMode` - режим приготовления блюд с использованием курсов
* `Course2PrintToCookingDelay`, `Course3PrintToCookingDelay`, `Course4PrintToCookingDelay`, `HighCourseDelayInterval` - тайминги для курсов
* `DishesOverdueInterval` - интервал просрочки блюд
* `NotifyWaitersOnCookingComplete` - оповещать официантов о приготовлении
* `PackedStatusOnCookingEnabled` - включен ли процесс сборки заказов
* `TimePeakIntervals` - расписание часа пик

### См. также

* [`IRestaurantKitchenSettings`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Organization_IRestaurantKitchenSettings.htm)
