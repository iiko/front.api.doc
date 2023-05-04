---
title: Возможность редактировать стоп-лист
layout: default
---

В Api V8 появилась возможность добавить в стоп-лист блюдо только в одном размере или без указания размера [`AddProductToStopList`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_AddProductToStopList.htm).

Появилась возможность увидеть, что блюдо в каком-то размере добавлено в стоп-лист [`IsStopListProductSellingRestricted`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_IsStopListProductSellingRestricted.htm).

Для получения всего списка стоп-листа теперь нужно воспользоваться вызовом [`GetStopListProductsRemainingAmounts`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetStopListProductsRemainingAmounts.htm), возвращается словарь с ключом экземпляра [`ProductAndSize`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Assortment_ProductAndSize.htm), содержащий конкретный продукт [`IProduct`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Assortment_IProduct.htm) и его размер [`IProductSize`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Assortment_IProductSize.htm).

Чтобы удалить все элементы из стоп-листа нужно воспользоваться функцией [`ClearStopList`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_ClearStopList.htm).

Удалить конкретное блюдо из стоп-листа [`RemoveProductFromStopList`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_RemoveProductFromStopList.htm), где обязательно должен быть продукт/блюдо, но размер опционален и может быть `null`.

Установка остатков по блюду в стоп-листе [`SetStopListProductRemainingAmount`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_SetStopListProductRemainingAmount.htm) - доступно указать только значения от 0.001 до 999.999, размер опционален и может быть `null`.

Проверка ограничения продаж продукта переименована [`CheckStopListProductsSellingRestrictions`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_CheckStopListProductsSellingRestrictions.htm) и теперь принимает словарь, где ключом является [`ProductAndSize`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Assortment_ProductAndSize.htm), а значением всё так же количество.

При попытке воспользоваться API вызовами у пользователя, который не имеет права для очистки/удаления/добавления/установки остатка по стоп-листам (Редактировать стоп-лист и быстрое меню `F_EM`), будет выброшено исключение.

При попытке добавить блюдо с размером в стоп-лист всегда проверяется, что размер для блюда может быть применён в соответствии с его шкалой размеров, в противном случае будет выброшено исключение.

Для отслеживания изменения стоп-листов событие было переименовано `ProductsRemainingAmountsChanged` -> [`StopListProductsRemainingAmountsChanged`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_INotificationService_StopListProductsRemainingAmountsChanged.htm).