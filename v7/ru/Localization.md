---
title: Локализация
layout: default
---
# Локализация #

Пользователь может установить язык приложения. Начиная с API V7, плагины, логика которых зависит от языка терминала, имеют возможность отработать изменение языка терминала. 

## Как это выглядит в iikoFront?

Изменение языка делается через экран настроек:

![changeLanguage](../../img/Localization/changeLanguage.png)

Через плагин сменить язык терминала нельзя.

### Как узнать текущий язык

Текущий язык приложения можно узнать с помощью метода [`IOperationService.GetHostTerminalSettings()`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetHostTerminalSettings.htm):
```cs
var settings = PluginContext.Operations.GetHostTerminalSettings();
```
Метод возвращает объект, реализующий интерфейс [`IHostTerminalSettings`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Organization_IHostTerminalSettings.htm). Он содержит два свойства локализации:
- `CultureInfo Culture` - язык, который выбран на терминале.
- `CultureInfo UICulture` - добавлено в API V7. Сейчас свойство содержит то же самое значение, что и свойство `Culture`. Позже планируется поддержка различных культрур для данных и интерфейса пользователя. 

### Стартовые настройки плагина

Начиная с API V7, во время старта приложения плагин автоматически получает настройки локализации из терминала. До вызова кода плагина выставляются свойства:

- [`CultureInfo.CurrentCulture`](https://docs.microsoft.com/ru-ru/dotnet/api/system.globalization.cultureinfo.currentculture?view=net-6.0)
- [`CultureInfo.CurrentUICulture`](https://docs.microsoft.com/ru-ru/dotnet/api/system.globalization.cultureinfo.currentuiculture?view=net-6.0)
- [`CultureInfo.DefaultThreadCurrentCulture`](https://docs.microsoft.com/ru-ru/dotnet/api/system.globalization.cultureinfo.defaultthreadcurrentculture?view=net-6.0)
- [`CCultureInfo.DefaultThreadCurrentUICulture`](https://docs.microsoft.com/ru-ru/dotnet/api/system.globalization.cultureinfo.defaultthreadcurrentuiculture?view=net-6.0)

Данные свойства получают те же значения, какие они имеют в терминале. Как и в случае `IHostTerminalSettings`, свойства, имеющие в названии `UI`, дублируют аналогичные свойства (`CurrentUICulture` будет иметь то же значение, что и `CurrentCulture`, а `DefaultThreadCurrentUICulture` то же, что и `DefaultThreadCurrentCulture`).

### Отслеживание изменения языка пользователем

Пользователь может поменять язык приложения. Это приведёт к тому, что свойства культуры, описанные выше, будут изменены. Однако, автоматичесткое изменение значений этих свойств для кода плагина является рискованной операцией. Например, в момент смены языка терминала плагин может выполнять операцию, результат которой зависит от культуры. Поэтому, было решено не выставлять эти свойства для плагинов автоматически. В API V7 добавлено событие [`INotificationService.CurrentCultureChanged`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_INotificationService_CurrentCultureChanged.htm), позволяющее отследить смену языка терминала и выставить культуру плагина в удобный момент. Это событие имеет 2 аргумента:

- `CultureInfo culture` - новая культура.
- `CultureInfo uiCulture` - то же самое, что и `culture`.

Например, если код плагина допускает немедленное применение новых настроек, можно задать свойства сразу:

```cs
PluginContext.Notifications.CurrentCultureChanged.Subscribe(x =>
{
    CultureInfo.CurrentCulture = x.culture;
    CultureInfo.CurrentUICulture = x.uiCulture; //Пока то же самое, что и x.culture
    CultureInfo.DefaultThreadCurrentCulture = x.culture;
    CultureInfo.DefaultThreadCurrentUICulture = x.uiCulture; //Пока то же самое, что и x.culture
});
```

### Возвращение старого поведения

В случае, если плагин не должен менять культуру при старте терминала, можно написать в его конструкторе код, возвращающий культуру в первоначальное состояние:

```cs
public MyPlugin()
{
    //Задаём культуру из настроек операционной системы
    CultureInfo.CurrentCulture = CultureInfo.InstalledUICulture;
    CultureInfo.DefaultThreadCurrentCulture = CultureInfo.InstalledUICulture;
    CultureInfo.CurrentUICulture = CultureInfo.InstalledUICulture;
    CultureInfo.DefaultThreadCurrentUICulture = CultureInfo.InstalledUICulture;
}
```