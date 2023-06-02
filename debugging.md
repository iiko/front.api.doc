---
title: Отладка
layout: default
redirect_from:
  - /v6/ru/Debugging
  - /v7/ru/Debugging
---
При загрузке приложение iikoFront выполняет поиск плагинов и для каждого из них запускает процесс-контейнер `Resto.Front.Api.Host.exe`, в контексте которого плагин и будет работать.
Для удобства отладки предусмотрена возможность запускать данный процесс прямо из среды разработки, для этого в параметрах отладки проекта плагина необходимо указать хост-процесс `Resto.Front.Api.Host.exe` как внешнюю программу и передать следующие аргументы командной строки:

- `-a`, `--assembly`=file — полный путь к файлу плагина,
- `-c`, `--class`=name    — полное имя класса плагина (включая namespace),
- `-l`, `--log`=log       — полный путь к файлу лога,
- `-m`, `--module`=id     — модуль лицензии, указываемый в атрибуте `PluginLicenseModuleId` ([Лицензирование](Licensing)),
- `-n`, `--nowindow`      — не показывать консольное окно.

Далее достаточно один раз запустить приложение iikoFront (не устанавливая плагин в папку `Plugins`), и можно будет многократно запускать и останавливать плагин прямо из среды разработки (`F5` / `Shift+F5` в Visual Studio, `Alt-F5` в Rider), не перезапуская iikoFront. Отладчик будет подключаться автоматически, соответственно, будут работать breakpoints, а также отладка будет прерываться при возникновении исключений (в Visual Studio/Rider можно настроить, для каких типов исключений надо или не надо прерывать отладку). Записи в лог (`PluginContext.Log`) будут дублироваться в консольном окне, если оно не скрыто ключом `--nowindow`, и в окне Output (`Ctrl+Alt+O`), если подключен отладчик.

Для отладки плагина таким способом необходима лицензия разработчика плагинов.

## Visual Studio

### Classic .csproj
Пример заполнения полей на вкладке Debug для проекта в старом формате:

- Start Action: Start external program: `C:\Program Files\iiko\iikoRMS\Front.Net\Resto.Front.Api.Host.exe`.
- Start Options: Command line arguments: `/a="C:\Projects\Front.Api Sdk\Resto.Front.Api.SamplePlugin\bin\Debug\Resto.Front.Api.SamplePlugin.dll" /c=Resto.Front.Api.SamplePlugin.SamplePlugin /m=21005108 /l="C:\Projects\Front.Api Sdk\Logs\sample-plugin.log"`

### SDK-style .csproj
Для проектов нового формата параметры отладки переехали в отдельный файл *launchsettings.json*, который можно создавать/редактировать как вручную, так и через UI: в свойствах проекта Debug → General → Open debug launch profiles UI → Create a new profile → Executable. Пример содержимого *launchsettings.json*:

```json
{
  "profiles": {
    "Resto.Front.Api.SamplePlugin": {
      "commandName": "Executable",
      "executablePath": "C:\\Program Files\\iiko\\iikoRMS\\Front.Net\\Resto.Front.Api.Host.exe",
      "commandLineArgs": "/a=\"C:\\Projects\\Front.Api Sdk\\Resto.Front.Api.SamplePlugin\\bin\\Debug\\Resto.Front.Api.SamplePlugin.dll\" /c=Resto.Front.Api.SamplePlugin.SamplePlugin /m=21005108 /l=\"C:\\Projects\\Front.Api Sdk\\Logs\\sample-plugin.log\""
    }
  }
}
```

#### Примечание для .NET Standard
На данный момент в Visual Studio есть [`баг`](https://github.com/dotnet/project-system/issues/5009), который не позволяет отлаживать плагин под .NET Standard, запуская его через процесс-контейнер `Resto.Front.Api.Host.exe`, который под .NET Framework.

Варианты решения:

* Собирать плагин под .NET Framework
* Использовать Rider или другую среду разработки, где такого бага нет.
* Добавить фиктивный проект под .NET Framework, установив его как стартовый (Set as Startup Project) и указав в параметрах его отладки то же, что для плагина. Подробнее [тут](https://stackoverflow.com/a/61033312).

## Rider
JetBrains Rider как задать собственную настройку Debug Configurations с полями `Exe path` и `Program arguments`, так и использовать совместимый с Visual Studio формат *launchsettings.json*.

## Альтернативные варианты
Если лицензии разработчика плагинов нет, придётся устанавливать плагин в папку `Plugins`, чтобы приложение iikoFront запускало его штатным способом, а при каждом изменении плагина приложение придётся останавливать и запускать снова. При этом можно свести неудобства к минимуму следующим образом:

- В Visual Studio в настройках проекта на вкладке `Build` в разделе `Output` указать в качестве `Output path` путь к подпапке плагина в папке `Plugins`. Благодаря этому после каждой сборки плагин сразу будет публиковаться в эту папку, его не придётся копировать вручную.
- В начале конструктора класса плагина добавить вызов `Debugger.Launch()`, чтобы получать предложение подключить отладчик. Можно, конечно, подключить его самому, выбрав в меню `Debug → Attach to Process`, но это потребует больше кликов, кроме того, придётся выбирать из нескольких процессов-контейнеров с одинаковым названием.