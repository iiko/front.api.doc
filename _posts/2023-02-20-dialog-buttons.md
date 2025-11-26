---
title: Переопределение текста на кнопках стандартных диалогов
layout: default
tags: v8
---

В API V8 стало возможным переопределять тексты «Да», «Нет», «OK», «Отмена», «Закрыть», «Повторить», «Продолжить» на кнопках стандартных диалогов.

В методах показа стандартных диалогов были добавлены новые необязательные параметры текстов кнопок. 
По умолчанию параметры можно не задавать, на кнопках будут отображены значения по умолчанию. 
Если задать параметры, на кнопках будет отображен заданный текст.

Список измененных методов:

- [`IViewManager.ShowOkPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowOkPopup.htm)
- [`IViewManager.ShowClosePopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowClosePopup.htm)
- [`IViewManager.ShowErrorPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowErrorPopup.htm)
- [`IViewManager.ShowYesNoPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowYesNoPopup.htm)
- [`IViewManager.ShowOkCancelPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowOkCancelPopup.htm)
- [`IViewManager.ShowRetryCancelPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowRetryCancelPopup.htm)
- [`IViewManager.ShowYesNoCancelPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowYesNoCancelPopup.htm)
- [`IViewManager.ShowRetryIgnoreCancelPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowRetryIgnoreCancelPopup.htm)
- [`IViewManager.ShowInputDialog`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowInputDialog.htm)
- [`IViewManager.ShowCheckPermissionPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowCheckPermissionPopup.htm)
- [`IViewManager.ShowCheckPermissionsPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowCheckPermissionsPopup.htm)
- [`IViewManager.ShowChooserPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowChooserPopup.htm)
- [`IViewManager.ShowQuantityChangerPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowQuantityChangerPopup.htm)
- [`IViewManager.ShowExtendedInputDialog`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowExtendedInputDialog.htm)
- [`IViewManager.ShowKeyboard`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowKeyboard.htm)
- [`IViewManager.ShowExtendedKeyboardDialog`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowExtendedKeyboardDialog.htm)
- [`IViewManager.ShowDateNumpadPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowDateNumpadPopup.htm)
- [`IViewManager.ShowCalendarPopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowCalendarPopup.htm)
- [`IViewManager.ShowDateTimePopup`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_UI_IViewManager_ShowDateTimePopup.htm)