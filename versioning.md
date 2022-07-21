---
title: Управление версиями
layout: default
---
Разделение API на несколько версий необходимо для совершенствования без ущерба обратной совместимости.
С одной стороны, постоянно возникают новые потребности и необходимо вносить изменения, с другой стороны, любое изменение программного интерфейса может [нарушить](https://docs.microsoft.com/en-us/archive/blogs/ericlippert/every-public-change-is-a-breaking-change) работу существующих плагинов.
Для решения этой дилеммы история развития API делится на версии: в определённый момент разработка очередной версии прекращается, интерфейс фиксируется, дальнейшее развитие продолжается в рамках следующей версии.
Какие бы изменения ни вносились в будущем, разработанный под зафиксированную версию плагин будет исправно функционировать до тех пор, пока эта версия не перестанет поддерживаться.

## Жизненный цикл версий ##
Большие LTS-версии (от *Long-Term Support*) выпускаются примерно раз в два года и поддерживаются около четырёх лет.
Между ними выпускаются промежуточные preview-версии, они выходят каждые три месяца и поддерживаются в течение полугода.
Таким образом, в каждый момент времени поддерживаются две последние выпущенные LTS-версии, две последние выпущенные preview-версии (либо одна, если в предыдущем квартале вышла LTS-версия), а также для ознакомления доступна разрабатываемая LTS-версия.

LTS-версии нумеруются по порядку целыми числами — V1, V2, V3, V4, V5, V6 и так далее.
Preview-версии являются копиями промежуточных состояний разрабатываемой LTS-версии, поэтому содержат в названии номер разрабатываемой LTS-версии и нумеруются по порядку с префиксом «Preview», например, во время разработки V8 будут выходить версии V8Preview1, V8Preview2 и так далее до V8Preview7, после чего выйдет сама V8.

### График выпуска

[//]: # "График сгенерирован с помощью утилиты VersionGraphGenerator (RMS-53254), руками не править"

<svg height="640" width="816">
  <g>
    <text x="0" y="20">V1</text>
    <text x="0" y="40">V2</text>
    <text x="0" y="60">V3</text>
    <text x="0" y="80">V4</text>
    <text x="0" y="100">V5</text>
    <text x="0" y="120">V6Preview4</text>
    <text x="0" y="140">V6Preview5</text>
    <text x="0" y="160">V6</text>
    <text x="0" y="180">V7Preview1</text>
    <text x="0" y="200">V7Preview2</text>
    <text x="0" y="220">V7Preview3</text>
    <text x="0" y="240">V7Preview4</text>
    <text x="0" y="260">V7Preview5</text>
    <text x="0" y="280">V7Preview6</text>
    <text x="0" y="300">V7Preview7</text>
    <text x="0" y="320">V7</text>
    <text x="0" y="340">V8Preview1</text>
    <text x="0" y="360">V8Preview2</text>
    <text x="0" y="380">V8Preview3</text>
    <text x="0" y="400">V8Preview4</text>
    <text x="0" y="420">V8Preview5</text>
    <text x="0" y="440">V8Preview6</text>
    <text x="0" y="460">V8Preview7</text>
    <text x="0" y="480">V8</text>
  </g>
  <g>
    <line x1="90" x2="90" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="91" y="500" font-size="80%">2013</text>
    <line x1="120" x2="120" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="121" y="500" font-size="80%">2014</text>
    <line x1="150" x2="150" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="151" y="500" font-size="80%">2015</text>
    <line x1="180" x2="180" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="181" y="500" font-size="80%">2016</text>
    <line x1="210" x2="210" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="211" y="500" font-size="80%">2017</text>
    <line x1="240" x2="240" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="241" y="500" font-size="80%">2018</text>
    <line x1="270" x2="270" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="271" y="500" font-size="80%">2019</text>
    <line x1="300" x2="300" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="328" y="500">2020</text>
    <line x1="390" x2="390" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="418" y="500">2021</text>
    <line x1="480" x2="480" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="508" y="500">2022</text>
    <line x1="570" x2="570" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="598" y="500">2023</text>
    <line x1="660" x2="660" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="688" y="500">2024</text>
    <line x1="750" x2="750" y1="0" y2="500" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="778" y="500">2025</text>
  </g>
  <g>
    <text x="90" y="520" font-size="80%">3.1</text>
    <text x="111" y="520" font-size="80%">3.3</text>
    <text x="127" y="520" font-size="80%">3.8</text>
    <text x="171" y="520" font-size="80%">4.3</text>
    <text x="224" y="520" font-size="80%">5.4</text>
    <text x="291" y="520" font-size="80%">7.0</text>
    <text x="322" y="520" font-size="80%">7.2</text>
    <text x="344" y="520" font-size="80%">7.3</text>
    <text x="366" y="520" font-size="80%">7.4</text>
    <text x="390" y="520" font-size="80%">7.5</text>
    <text x="412" y="520" font-size="80%">7.6</text>
    <text x="434" y="520" font-size="80%">7.7</text>
    <text x="480" y="520" font-size="80%">7.9</text>
    <text x="502" y="520" font-size="80%">8.0</text>
    <text x="524" y="520" font-size="80%">8.1</text>
  </g>
  <g>
    <rect x="90" y="10" fill="green" height="10" width="21" />
    <rect x="111" y="10" fill="darkgreen" height="10" width="16" />
    <rect x="104" y="30" fill="lightgrey" height="10" width="7" />
    <rect x="111" y="30" fill="green" height="10" width="16" />
    <rect x="127" y="30" fill="darkgreen" height="10" width="44" />
    <rect x="111" y="50" fill="lightgrey" height="10" width="16" />
    <rect x="127" y="50" fill="green" height="10" width="44" />
    <rect x="171" y="50" fill="darkgreen" height="10" width="53" />
    <rect x="127" y="70" fill="lightgrey" height="10" width="44" />
    <rect x="171" y="70" fill="green" height="10" width="53" />
    <rect x="224" y="70" fill="darkgreen" height="10" width="67" />
    <rect x="171" y="90" fill="lightgrey" height="10" width="53" />
    <rect x="224" y="90" fill="green" height="10" width="67" />
    <rect x="291" y="90" fill="darkgreen" height="10" width="165" />
    <rect x="277" y="110" fill="steelblue" height="10" width="7" />
    <rect x="284" y="110" fill="darkblue" height="10" width="7" />
    <rect x="284" y="130" fill="steelblue" height="10" width="7" />
    <rect x="291" y="130" fill="darkblue" height="10" width="9" />
    <rect x="224" y="150" fill="lightgrey" height="10" width="67" />
    <rect x="291" y="150" fill="green" height="10" width="165" />
    <rect x="456" y="150" fill="darkgreen" height="10" width="180" />
    <rect x="300" y="170" fill="steelblue" height="10" width="22" />
    <rect x="322" y="170" fill="darkblue" height="10" width="44" />
    <rect x="336" y="190" fill="steelblue" height="10" width="8" />
    <rect x="344" y="190" fill="darkblue" height="10" width="22" />
    <rect x="344" y="210" fill="steelblue" height="10" width="22" />
    <rect x="366" y="210" fill="darkblue" height="10" width="24" />
    <rect x="366" y="230" fill="steelblue" height="10" width="24" />
    <rect x="390" y="230" fill="darkblue" height="10" width="22" />
    <rect x="390" y="250" fill="steelblue" height="10" width="22" />
    <rect x="412" y="250" fill="darkblue" height="10" width="22" />
    <rect x="412" y="270" fill="steelblue" height="10" width="22" />
    <rect x="434" y="270" fill="darkblue" height="10" width="22" />
    <rect x="434" y="290" fill="steelblue" height="10" width="22" />
    <rect x="456" y="290" fill="darkblue" height="10" width="90" />
    <rect x="291" y="310" fill="lightgrey" height="10" width="189" />
    <rect x="480" y="310" fill="green" height="10" width="156" />
    <rect x="636" y="310" fill="darkgreen" height="10" width="180" />
    <rect x="502" y="330" fill="steelblue" height="10" width="22" />
    <rect x="524" y="330" fill="darkblue" height="10" width="22" />
    <rect x="524" y="350" fill="steelblue" height="10" width="22" />
    <rect x="546" y="350" fill="darkblue" height="10" width="24" />
    <rect x="546" y="370" fill="steelblue" height="10" width="24" />
    <rect x="570" y="370" fill="darkblue" height="10" width="22" />
    <rect x="570" y="390" fill="steelblue" height="10" width="22" />
    <rect x="592" y="390" fill="darkblue" height="10" width="22" />
    <rect x="592" y="410" fill="steelblue" height="10" width="22" />
    <rect x="614" y="410" fill="darkblue" height="10" width="22" />
    <rect x="614" y="430" fill="steelblue" height="10" width="22" />
    <rect x="636" y="430" fill="darkblue" height="10" width="24" />
    <rect x="636" y="450" fill="steelblue" height="10" width="24" />
    <rect x="660" y="450" fill="darkblue" height="10" width="22" />
    <rect x="480" y="470" fill="lightgrey" height="10" width="180" />
    <rect x="660" y="470" fill="green" height="10" width="156" />
    <rect x="816" y="470" fill="darkgreen" height="10" width="0" />
  </g>
  <g transform="translate(0, 540)">
    <rect x="0" y="0" fill="lightgrey" height="10" width="25" />
    <text x="25" y="10"> — разрабатываемая LTS-версия</text>
    <rect x="0" y="20" fill="green" height="10" width="25" />
    <text x="25" y="30"> — стабильная LTS-версия</text>
    <rect x="0" y="40" fill="darkgreen" height="10" width="25" />
    <text x="25" y="50"> — устаревшая LTS-версия</text>
    <rect x="0" y="60" fill="steelblue" height="10" width="25" />
    <text x="25" y="70"> — актуальная preview-версия</text>
    <rect x="0" y="80" fill="darkblue" height="10" width="25" />
    <text x="25" y="90"> — устаревшая preview-версия</text>
  </g>
</svg>

После выпуска очередной LTS-версии роли перераспределяются следующим образом:

* поддержка устаревшей версии прекращается;
* версия, которая была стабильной, объявляется устаревшей;
* версия, разработка которой завершилась, фиксируется и становится стабильной;
* появляется новая разрабатываемая версия.

Цикл preview-версий чуть проще:

* поддержка устаревшей preview-версии прекращается;
* актуальная preview-версия объявляется устаревшей
* копия текущего состояния разрабатываемой LTS-версии выпускается как новая актуальная preview-версия 

## Выбор версии ##
По умолчанию рекомендуется использовать стабильную LTS-версию, это позволит минимизировать трудозатраты по миграции на новые версии API.
Если необходимы новые функции, ещё недоступные в LTS-версиях, рекомендуется использовать актуальную preview-версию, в этом случае придётся мигрировать между preview-версиями каждые 3-6 месяцев, пока не выйдет очередная LTS-версия.
Разработку под версии, объявленные устаревшими, лучше даже не начинать, это бесперспективно, эти версии поддерживаются лишь для обратной совместимости на период, когда новая версия API уже вышла, а плагины на неё пока не перешли.
Разрабатываемую версию использовать не рекомендуется, поскольку её интерфейс ещё не зафиксирован, обратная совместимость не обеспечивается, возможны любые изменения.
Эта версия доступна для изучения нововведений и раннего начала разработки плагина для будущей версии API, чтобы к моменту её выпуска иметь готовый или почти готовый плагин, предоставляющий новые возможности.

Версия API, под которую разработан плагин, определяется по версии интерфейса `IFrontPlugin`, который он реализует.
Например, если плагин ссылается на сборку *Resto.Front.Api.V6.dll* и реализует интерфейс `IFrontPlugin` из этой сборки, это V6-плагин.

Предполагается, что V6-плагин использует программный интерфейс версии V6.
Тем не менее, при необходимости плагин может одновременно использовать все поддерживаемые версии API.
Учитывая, что начиная с V6 пространства имён [не содержат]({{ site.baseurl }}/2019/08/14/unify-api-namespaces.html) номер версии API, во избежание коллизий между одноимёнными типами из разных сборок придётся использовать [extern alias](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/extern-alias). 
Например, чтобы из V6-плагина получить доступ к операции, которая появилась только в V7Preview2, помимо обычной ссылки на V6 необходимо добавить ссылку V7Preview2 с указанием alias `V7Preview2`, и затем из `PluginContext.Services` извлечь сервис `V7Preview2::Resto.Front.Api.IOperationService`.
К сожалению, механизм PackageReference пока [не поддерживает](https://github.com/NuGet/Home/issues/4989) extern alias, поэтому придётся использовать либо прямую ссылку на *Resto.Front.Api.V7Preview2.dll*, либо ссылку на NuGet-пакет `Resto.Front.Api.V7Preview2` и затем добавлять alias через MSBuild Target ([пример](https://github.com/NuGet/Home/issues/4989#issuecomment-310565840)).
Важно: не следует одновременно реализовывать интерфейсы `IFrontPlugin` разных версий, такой плагин не будет загружен.

## Статус версий API и соответствие версиям iikoRMS ##

| Версия     | Статус            | Выпуск           | Удаление |
| ---------  | ----------------- |:----------------:|:--------:|
| V1         | Не поддерживается | 3.1              | 3.8      |
| V2         | Не поддерживается | 3.3              | 4.3      |
| V3         | Не поддерживается | 3.8              | 5.4      |
| V4         | Не поддерживается | 4.3              | 7.0      |
| V5         | Не поддерживается | 5.4              | 8.0      |
| V6Preview4 | Не поддерживается | 6.4<sup>1</sup>  | 7.0      |
| V6Preview5 | Не поддерживается | 6.4              | 7.1      |
| V6         | Устаревшая        | 7.0              |          |
| V7Preview1 | Не поддерживается | 7.1              | 7.4      |
| V7Preview2 | Не поддерживается | 7.3.5<sup>2</sup>| 7.4      |
| V7Preview3 | Не поддерживается | 7.3              | 7.5      |
| V7Preview4 | Не поддерживается | 7.4              | 7.6      |
| V7Preview5 | Не поддерживается | 7.5              | 7.7      |
| V7Preview6 | Не поддерживается | 7.6              | 7.9      |
| V7Preview7 | Устаревшая        | 7.7              | 8.2<sup>3</sup>      |
| V7         | Стабильная        | 7.9              |          |
| V8Preview1 | Устаревшая        | 8.0              |          |
| V8Preview2 | Устаревшая        | 8.1              |          |
| V8         | Разрабатываемая   |                  |          |


<sup>1</sup> Версия V6Preview4 была экспериментальной, она выпущена в начале цикла разработки iikoRMS 6.4. Кроме того, были пропущены V6Preview6 и V6Preview7, вместо них сразу вышла LTS-версия V6.  
<sup>2</sup> Версия V7Preview2 [выпущена](2020/05/28/v7preview2-release.html) с опозданием в 7.3.5 (вместо 7.2).  
<sup>3</sup> Поддержка версии V7Preview7 была продлена до 8.1 включительно из-за проблем с автообновлением плагинов с V7Preview7 на V7.

## Обратная совместимость
Обратная совместимость предполагает гарантию того, что плагин, разработанный под определённую версию API, будет одинаково работать с любыми версиями iikoRMS, поддерживающими эту версию API.

### Программная совместимость
Программная совместимость запрещает изменения в публичном интерфейсе — необходимо фиксировать структуры данных, сигнатуры методов и прочее. Понятно, что если удалить какой-то публичный класс или метод, плагин перестанет компилироваться с новым SDK, а скомпилированный под старый SDK будет падать во время работы (`TypeLoadException`, `MissingMethodException` и т. п.). Возможны и не столь очевидные нарушения обратной совместимости. Однако, если не брать в расчёт экзотические случаи, на практике добавление нового класса, свойства или метода вполне может оказаться безопасным. Зато появляется возможность начать использовать новые функции, не дожидаясь очередного релиза. С учётом этого сейчас принята такая политика:

* в LTS-версиях никаких изменений после релиза, ибо [*every public change is a breaking change*](https://docs.microsoft.com/en-us/archive/blogs/ericlippert/every-public-change-is-a-breaking-change),
* в preview-версиях возможны *почти наверное* обратно совместимые изменения публичного интерфейса.

### Изменения в поведении
В общем случае, изменения в поведении выпущенных версий API не допускаются.
Если какая-то функция в определённых условиях работала, она и продолжит работать, а если не работала, она продолжит точно так же не работать.
Исключение — деструктивные сценарии использования API, когда последствия хуже нарушения обратной совместимости.
Например, если из-за уязвимости в API ошибочные действия плагина могли привести к повреждению данных или остановке работы приложения iikoFront, то в API появится соответствующая защита. Это не будет считаться изменением поведения, поскольку корректно работающие плагины не заметят никаких изменений.

### Срок поддержки
Под продолжительностью поддержки определённой версии API понимается период, в течение которого выпускаются обновления iikoRMS, поддерживающие эту версию API. В самом продукте iikoRMS нет календарного ограничения на возможность использования той или иной версии API. Все версии API, поддерживаемые конкретной сборкой iikoRMS, поддерживаются ею бессрочно. Таким образом, если пользователь iikoRMS не обновляется, он теоретически может продолжать использовать старые плагины как угодно долго. Однако, на практике пользователь вынужден обновлять iikoRMS ради поддержки изменений в законодательстве, новых функций и исправленных ошибок, а это значит, что и разработчик плагина должен своевременно выпускать обновления плагина, совместимые с новыми версиями API.