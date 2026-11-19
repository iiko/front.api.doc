---
title: Отладка
layout: default
permalink: /debugging.html
redirect_from:
  - /v6/ru/Debugging
  - /v7/ru/Debugging
---
При загрузке приложение iikoFront выполняет поиск плагинов и для каждого из них запускает процесс-контейнер `Resto.Front.Api.Host.exe`, в контексте которого плагин и будет работать.
Для удобства отладки предусмотрена возможность запускать данный процесс прямо из среды разработки, для этого в параметрах отладки проекта плагина необходимо указать хост-процесс `Resto.Front.Api.Host.exe` (находится в папке установки iikoFront) как внешнюю программу и передать следующие аргументы командной строки:

- `-a`, `--assembly`=file — полный путь к файлу плагина,
- `-c`, `--class`=name    — полное имя класса плагина (включая namespace),
- `-p`, `--plugin`=name   — имя плагина (см. ниже),
- `-l`, `--log`=log       — полный путь к файлу лога,
- `-m`, `--module`=id     — модуль лицензии, указываемый в атрибуте `PluginLicenseModuleId` ([Лицензирование]({{ site.baseurl }}/licensing.html)),
- `-n`, `--nowindow`      — не показывать консольное окно,
- `-v`, `--version`       — версия плагина (строка из 4 чисел, разделённых точками).

Имя плагина (`-p`) — это имя, под которым iikoFront регистрирует подключившийся плагин. От него зависят папки, которые плагин получает через `PluginContext.Integration.GetConfigsDirectoryPath()` и `PluginContext.Integration.GetDataStorageDirectoryPath()`, поэтому удобно указывать то же имя, что у папки плагина внутри `Plugins` при штатной установке: тогда при отладке плагин будет работать с теми же настройками и данными.
Если имя не указано, используется имя папки, в которой лежит файл плагина. Для SDK-style проектов это папка с названием целевой платформы (например, `bin\Debug\net472`), и плагин получит имя `net472`. Два плагина с одинаковым именем одновременно подключены быть не могут — второй получит отказ, — поэтому для SDK-style проектов ключ `-p` нужно указывать обязательно.

Сначала нужно запустить приложение iikoFront (не устанавливая плагин в папку `Plugins`) и дождаться его загрузки, после чего можно многократно запускать и останавливать плагин прямо из среды разработки (`F5` / `Shift+F5` в Visual Studio, `Alt-F5` в Rider), не перезапуская iikoFront. Отладчик будет подключаться автоматически, соответственно, будут работать breakpoints, а также отладка будет прерываться при возникновении исключений (в Visual Studio/Rider можно настроить, для каких типов исключений надо или не надо прерывать отладку). Записи в лог (`PluginContext.Log`) будут дублироваться в консольном окне, если оно не скрыто ключом `--nowindow`, и в окне Output (`Ctrl+Alt+O`), если подключен отладчик.

Порядок запуска важен:

- если iikoFront не запущен, процесс-контейнер сразу завершается, записав в лог, что не удалось подключиться к IPC-порту;
- при запуске iikoFront завершает все работающие процессы-контейнеры `Resto.Front.Api.Host.exe`, в том числе запущенный из среды разработки, поэтому после перезапуска iikoFront отладку плагина нужно запустить заново.

Для отладки плагина таким способом необходима [лицензия разработчика плагинов]({{ site.baseurl }}/licensing.html): iikoFront подключает плагин, запущенный не им самим, только если в лицензии есть модуль разработчика плагинов. Кроме того, в лицензии должен быть модуль, указанный в ключе `-m`.

Если iikoFront отказал плагину в подключении, процесс-контейнер завершается, а причина записывается в его лог (ключ `-l`). Типичные причины:

- `Plugin host with plugin name … is already connected` — плагин с таким именем уже подключен: например, он же установлен в папку `Plugins`, или другой плагин запущен без ключа `-p`;
- `Cannot connect “…” launched outside the iikoFront` — в лицензии нет модуля разработчика плагинов.

## Visual Studio

### Classic .csproj
Пример заполнения полей на вкладке Debug для проекта в старом формате:

- Start Action: Start external program: `C:\Program Files\iiko\iikoRMS\Front.Net\Resto.Front.Api.Host.exe`.
- Start Options: Command line arguments: `/a="C:\Projects\Front.Api Sdk\Resto.Front.Api.SamplePlugin\bin\Debug\Resto.Front.Api.SamplePlugin.dll" /c=Resto.Front.Api.SamplePlugin.SamplePlugin /p=SamplePlugin /m=21005108 /l="C:\Projects\Front.Api Sdk\Logs\sample-plugin.log"`

### SDK-style .csproj
SDK-style проекты по умолчанию собираются в подпапку с названием целевой платформы, например *bin\Debug\net472\Resto.Front.Api.SamplePlugin.dll*.

Чтобы не прописывать путь к папке установки iikoFront вручную, его можно прочитать из реестра: установщик iikoFront записывает его в значение `Path` ключа `HKEY_LOCAL_MACHINE\Software\iiko\RMS\Front` (для iikoChain — `HKEY_LOCAL_MACHINE\Software\iiko\Chain\Front`). Для этого добавьте в .csproj плагина свойство `RestoFrontDir`:

```xml
<PropertyGroup>
  <RestoFrontDir Condition=" '$(RestoFrontDir)' == '' ">$([MSBuild]::GetRegistryValueFromView('HKEY_LOCAL_MACHINE\Software\iiko\RMS\Front', 'Path', null, RegistryView.Registry64, RegistryView.Registry32))</RestoFrontDir>
  <RestoFrontDir Condition=" '$(RestoFrontDir)' == '' ">$([MSBuild]::GetRegistryValueFromView('HKEY_LOCAL_MACHINE\Software\iiko\Chain\Front', 'Path', null, RegistryView.Registry64, RegistryView.Registry32))</RestoFrontDir>
</PropertyGroup>
<Target Name="CheckRestoFrontDir" BeforeTargets="Build">
  <Warning Condition=" !Exists('$(RestoFrontDir)Resto.Front.Api.Host.exe') " Text="Resto.Front.Api.Host.exe not found in '$(RestoFrontDir)'. Set the RestoFrontDir property to the folder containing Resto.Front.Api.Host.exe." />
</Target>
```

Свойство должно быть объявлено в .csproj выше свойств, которые его используют (`RunCommand`, `OutputPath` — см. ниже); в *launchSettings.json* его можно использовать без ограничений. Значение заканчивается обратной косой чертой, например `C:\Program Files\iiko\iikoRMS\Front.Net\`. Если в указанной папке нет `Resto.Front.Api.Host.exe` (например, iikoFront не установлен), при сборке будет выдано предупреждение. В этом случае, а также если нужно отлаживать плагин с другой копией iikoFront, укажите путь к её папке явно: `<RestoFrontDir>D:\iikoFront\</RestoFrontDir>`. Хост-процесс нужно запускать из папки той копии iikoFront, к которой подключается плагин: хост-процесс из другой версии к ней не подключится.

Параметры отладки для проектов нового формата хранятся в отдельном файле *Properties\launchSettings.json*, который можно создавать/редактировать как вручную, так и через UI: в свойствах проекта Debug → General → Open debug launch profiles UI → Create a new profile → Executable.
В значениях профиля можно использовать свойства MSBuild проекта (`$(RestoFrontDir)`, `$(TargetPath)` — полный путь к собранному файлу плагина, `$(TargetDir)`, `$(AssemblyName)`, `$(Configuration)`, `$(MSBuildProjectDirectory)` и т. п.) и переменные окружения (`%TEMP%` и т. п.).
Благодаря этому в профиле не нужны абсолютные пути, и один и тот же файл подходит для любой конфигурации сборки, любой копии исходников и любой папки установки iikoFront. Пример содержимого *launchSettings.json*:

```json
{
  "profiles": {
    "Resto.Front.Api.SamplePlugin": {
      "commandName": "Executable",
      "executablePath": "$(RestoFrontDir)Resto.Front.Api.Host.exe",
      "commandLineArgs": "/a=\"$(TargetPath)\" /c=Resto.Front.Api.SamplePlugin.SamplePlugin /p=SamplePlugin /m=21005108 /l=\"$(TargetDir)sample-plugin.log\""
    }
  }
}
```

Visual Studio вычисляет свойства проекта при его загрузке, поэтому после переустановки iikoFront в другую папку проект нужно перезагрузить (или перезапустить Visual Studio).

#### Без launchSettings.json
Вместо профиля в *launchSettings.json* можно указать программу для запуска прямо в .csproj с помощью свойств `RunCommand` и `RunArguments` (свойство `RestoFrontDir` — см. выше). Тогда Visual Studio по `F5` запустит процесс-контейнер, хотя проект плагина и является библиотекой:

```xml
<PropertyGroup>
  <RunCommand>$(RestoFrontDir)Resto.Front.Api.Host.exe</RunCommand>
  <RunArguments>/a="$(TargetPath)" /c=Resto.Front.Api.SamplePlugin.SamplePlugin /p=SamplePlugin /m=21005108 /l="$(TargetDir)sample-plugin.log"</RunArguments>
</PropertyGroup>
```

Если в проекте есть *launchSettings.json*, эти свойства используются профилем с `"commandName": "Project"`.

#### Примечание для .NET Standard
Visual Studio выбирает отладчик по целевой платформе проекта: для проектов под .NET Standard подключается отладчик .NET Core, а процесс-контейнер `Resto.Front.Api.Host.exe` работает под .NET Framework, поэтому отладить таким способом плагин под .NET Standard не получится. Это известный [баг](https://github.com/dotnet/project-system/issues/3690), он воспроизводится в том числе в Visual Studio 2022 и 2026.

Варианты решения:

* Собирать плагин под .NET Framework.
* Использовать Rider или другую среду разработки, где такого бага нет.
* Добавить фиктивный проект под .NET Framework, установив его как стартовый (Set as Startup Project) и указав в параметрах его отладки то же, что для плагина. Подробнее [тут](https://stackoverflow.com/a/61033312).

## Rider
JetBrains Rider позволяет как задать собственную конфигурацию запуска (Run → Edit Configurations → .NET Executable) с полями `Exe path` и `Program arguments`, так и использовать совместимый с Visual Studio формат *launchSettings.json*.

## Альтернативные варианты
Если лицензии разработчика плагинов нет, придётся устанавливать плагин в папку `Plugins`, чтобы приложение iikoFront запускало его штатным способом, а при каждом изменении плагина приложение придётся останавливать и запускать снова. При этом можно свести неудобства к минимуму следующим образом:

- В Visual Studio в настройках проекта на вкладке `Build` в разделе `Output` указать в качестве `Output path` путь к подпапке плагина в папке `Plugins`. Благодаря этому после каждой сборки плагин сразу будет публиковаться в эту папку, его не придётся копировать вручную. Рядом с файлом плагина должен оказаться и его манифест (см. [Структура папок]({{ site.baseurl }}/directories.html)). Для записи в папку `Program Files` Visual Studio нужно запускать с правами администратора.
  Для SDK-style проектов нужно дополнительно отключить подпапку с названием целевой платформы, иначе плагин окажется в `Plugins\SamplePlugin\net472`:

  ```xml
  <PropertyGroup>
    <OutputPath>$(RestoFrontDir)Plugins\SamplePlugin\</OutputPath>
    <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
  </PropertyGroup>
  ```

- В начале конструктора класса плагина добавить вызов `Debugger.Launch()`, чтобы получать предложение подключить отладчик. Можно, конечно, подключить его самому, выбрав в меню `Debug → Attach to Process`, но это потребует больше кликов, кроме того, придётся выбирать из нескольких процессов-контейнеров с одинаковым названием.
