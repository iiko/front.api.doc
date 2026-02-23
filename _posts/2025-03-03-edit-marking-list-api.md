---
title: Редактирование марок в позициях заказа
layout: default
tags: v9preview6 v9
---
Добавлена возможность редактировать коды маркировки в позициях заказа и модификаторах, а также управлять результатами проверки кодов маркировки через API.

В [`IEditSession`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_IEditSession.htm) добавлены следующие методы:

- [`AddIdentifierCodesToOrderItemUnit`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IEditSession_AddIdentifierCodesToOrderItemUnit.htm) — добавляет коды идентификации для одной товарной единицы в составе позиции заказа
- [`AddIdentifierCodesToModifierItemUnit`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IEditSession_AddIdentifierCodesToModifierItemUnit.htm) — добавляет коды идентификации для одной товарной единицы в составе модификатора
- [`DeleteOrderItemIdentifierCodes`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IEditSession_DeleteOrderItemIdentifierCodes.htm) — удаляет несколько кодов идентификации из позиции заказа по их уникальным идентификаторам
- [`DeleteModifierItemIdentifierCodes`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IEditSession_DeleteModifierItemIdentifierCodes.htm) — удаляет несколько кодов идентификации из модификатора по их уникальным идентификаторам
- [`ChangeOrderItemVerificationResult`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IEditSession_ChangeOrderItemVerificationResult.htm) — устанавливает результат проверки для кода идентификации в позиции заказа
- [`ChangeModifierItemVerificationResult`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IEditSession_ChangeModifierItemVerificationResult.htm) — устанавливает результат проверки для кода идентификации в модификаторе

Также реализована поддержка хранения нескольких результатов проверки для каждого кода маркировки (например, через ККТ и через плагин). Свойство `VerificationResult` заменено на словарь [`VerificationResults`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Orders_OrderItemIdentifierCode_VerificationResults.htm), где ключ — источник проверки.

Обновлённые классы: [`OrderItemIdentifierCode`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_OrderItemIdentifierCode.htm) и [`CodeVerificationResult`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_Data_Orders_CodeVerificationResult.htm).

