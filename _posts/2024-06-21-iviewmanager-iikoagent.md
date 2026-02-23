---
title: IViewManager для работы с UI iikoAgent
layout: default
tags: v9
---

Реализован новый [`IViewManager`](https://iiko.github.io/front.api.sdk/v9/html/T_Resto_Front_Api_UI_IViewManager.htm) для работы с пользовательским интерфейсом iikoAgent (ServiceControl).

## Контекст

При добавлении кнопок в меню Windows-службы iikoAgent через [`AddButtonToWindowsServiceMenu`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_AddButtonToWindowsServiceMenu.htm), плагины получают доступ к IViewManager для отображения диалогов и элементов управления.

## Реализованные возможности

Для работы с UI iikoAgent доступны следующие методы IViewManager:

**Диалоги ввода:**
- [`ShowInputDialog`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowInputDialog.htm) — ввод текста, числа или даты
- [`ShowExtendedInputDialog`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowExtendedInputDialog.htm) — расширенный диалог ввода
- [`ShowKeyboard`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowKeyboard.htm) — экранная клавиатура
- [`ShowExtendedKeyboardDialog`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowExtendedKeyboardDialog.htm) — расширенная клавиатура

**Выбор и ввод данных:**
- [`ShowChooserPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowChooserPopup.htm) — выбор из списка
- [`ShowQuantityChangerPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowQuantityChangerPopup.htm) — изменение количества
- [`ShowDateNumpadPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowDateNumpadPopup.htm) — ввод даты
- [`ShowCalendarPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowCalendarPopup.htm) — календарь
- [`ShowDateTimePopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowDateTimePopup.htm) — выбор даты и времени

**Информационные сообщения:**
- [`ShowOkPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowOkPopup.htm) — сообщение с кнопкой OK
- [`ShowClosePopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowClosePopup.htm) — сообщение с кнопкой Закрыть
- [`ShowErrorPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowErrorPopup.htm) — сообщение об ошибке

**Диалоги подтверждения:**
- [`ShowYesNoPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowYesNoPopup.htm) — Да/Нет
- [`ShowOkCancelPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowOkCancelPopup.htm) — OK/Отмена
- [`ShowRetryCancelPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowRetryCancelPopup.htm) — Повтор/Отмена
- [`ShowYesNoCancelPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowYesNoCancelPopup.htm) — Да/Нет/Отмена
- [`ShowRetryIgnoreCancelPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowRetryIgnoreCancelPopup.htm) — Повтор/Игнорировать/Отмена

**Проверка прав:**
- [`ShowCheckPermissionPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowCheckPermissionPopup.htm) — проверка одного права
- [`ShowCheckPermissionsPopup`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ShowCheckPermissionsPopup.htm) — проверка нескольких прав

**Прочее:**
- [`ChangeProgressBarMessage`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_UI_IViewManager_ChangeProgressBarMessage.htm) — изменение текста прогресс-бара

## Пример использования

```csharp
PluginContext.Operations.AddButtonToWindowsServiceMenu("Настройки плагина", (vm) =>
{
    var input = vm.ShowInputDialog("Введите значение", InputDialogTypes.Number, null, "OK", "Отмена");
    if (input != null)
    {
        vm.ShowOkPopup("Настройка сохранена", $"Значение: {input}");
    }
});
```

Это позволяет плагинам создавать полноценный пользовательский интерфейс для работы через Windows-службу iikoAgent без необходимости в iikoFront.
