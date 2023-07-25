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
Между ними выпускаются промежуточные preview-версии, они выходят каждые три месяца и поддерживаются в течение 3 версий iikoRMS.
Таким образом, в каждый момент времени поддерживаются две последние выпущенные LTS-версии, две последние выпущенные preview-версии (либо одна, если в предыдущем квартале вышла LTS-версия), а также для ознакомления доступна разрабатываемая LTS-версия.

LTS-версии нумеруются по порядку целыми числами — V1, V2, V3, V4, V5, V6 и так далее.
Preview-версии являются копиями промежуточных состояний разрабатываемой LTS-версии, поэтому содержат в названии номер разрабатываемой LTS-версии и нумеруются по порядку с префиксом «Preview», например, во время разработки V8 будут выходить версии V8Preview1, V8Preview2 и так далее до V8Preview7, после чего выйдет сама V8.

### График выпуска

[//]: # "График сгенерирован с помощью утилиты VersionGraphGenerator (RMS-53254), руками не править"

<svg height="660" width="1056">
  <g>
    <text x="0" y="20">V6</text>
    <text x="0" y="40">V7Preview1</text>
    <text x="0" y="60">V7Preview2</text>
    <text x="0" y="80">V7Preview3</text>
    <text x="0" y="100">V7Preview4</text>
    <text x="0" y="120">V7Preview5</text>
    <text x="0" y="140">V7Preview6</text>
    <text x="0" y="160">V7Preview7</text>
    <text x="0" y="180">V7</text>
    <text x="0" y="200">V8Preview1</text>
    <text x="0" y="220">V8Preview2</text>
    <text x="0" y="240">V8Preview3</text>
    <text x="0" y="260">V8Preview4</text>
    <text x="0" y="280">V8Preview5</text>
    <text x="0" y="300">V8Preview6</text>
    <text x="0" y="320">V8Preview7</text>
    <text x="0" y="340">V8</text>
    <text x="0" y="360">V9Preview1</text>
    <text x="0" y="380">V9Preview2</text>
    <text x="0" y="400">V9Preview3</text>
    <text x="0" y="420">V9Preview4</text>
    <text x="0" y="440">V9Preview5</text>
    <text x="0" y="460">V9Preview6</text>
    <text x="0" y="480">V9Preview7</text>
    <text x="0" y="500">V9</text>
  </g>
  <g>
    <line x1="90" x2="90" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="91" y="520" font-size="80%">2017</text>
    <line x1="120" x2="120" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="121" y="520" font-size="80%">2018</text>
    <line x1="150" x2="150" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="151" y="520" font-size="80%">2019</text>
    <line x1="180" x2="180" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="208" y="520">2020</text>
    <line x1="270" x2="270" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="298" y="520">2021</text>
    <line x1="360" x2="360" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="388" y="520">2022</text>
    <line x1="450" x2="450" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="478" y="520">2023</text>
    <line x1="540" x2="540" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="568" y="520">2024</text>
    <line x1="630" x2="630" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="658" y="520">2025</text>
    <line x1="720" x2="720" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="748" y="520">2026</text>
    <line x1="810" x2="810" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="838" y="520">2027</text>
    <line x1="900" x2="900" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="928" y="520">2028</text>
    <line x1="990" x2="990" y1="0" y2="520" style="stroke: grey; stroke-dasharray: 1 5;" />
    <text x="1018" y="520">2029</text>
  </g>
  <g>
    <text x="270" y="540" font-size="80%">7.5</text>
    <text x="292" y="540" font-size="80%">7.6</text>
    <text x="314" y="540" font-size="80%">7.7</text>
    <text x="360" y="540" font-size="80%">7.9</text>
    <text x="382" y="540" font-size="80%">8.0</text>
    <text x="404" y="540" font-size="80%">8.1</text>
    <text x="426" y="540" font-size="80%">8.2</text>
    <text x="450" y="540" font-size="80%">8.3</text>
    <text x="472" y="540" font-size="80%">8.4</text>
    <text x="494" y="540" font-size="80%">8.5</text>
    <text x="516" y="540" font-size="80%">8.6</text>
    <text x="540" y="540" font-size="80%">8.7</text>
    <text x="562" y="540" font-size="80%">8.8</text>
    <text x="584" y="540" font-size="80%">8.9</text>
    <text x="606" y="540" font-size="80%">9.0</text>
    <text x="630" y="540" font-size="80%">9.1</text>
    <text x="652" y="540" font-size="80%">9.2</text>
    <text x="674" y="540" font-size="80%">9.3</text>
    <text x="696" y="540" font-size="80%">9.4</text>
    <text x="720" y="540" font-size="80%">9.5</text>
    <text x="742" y="540" font-size="80%">9.6</text>
    <text x="764" y="540" font-size="80%">9.7</text>
    <text x="786" y="540" font-size="80%">9.8</text>
    <text x="810" y="540" font-size="80%">9.9</text>
    <text x="832" y="540" font-size="80%">10.0</text>
  </g>
  <g>
    <rect x="0" y="5" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="104" y="10" fill="lightgrey" height="10" width="67" />
    <rect x="171" y="10" fill="green" height="10" width="165" />
    <rect x="336" y="10" fill="darkgreen" height="10" width="180" />
    <rect x="180" y="30" fill="steelblue" height="10" width="22" />
    <rect x="202" y="30" fill="darkblue" height="10" width="44" />
    <rect x="0" y="45" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="216" y="50" fill="steelblue" height="10" width="8" />
    <rect x="224" y="50" fill="darkblue" height="10" width="22" />
    <rect x="224" y="70" fill="steelblue" height="10" width="22" />
    <rect x="246" y="70" fill="darkblue" height="10" width="24" />
    <rect x="0" y="85" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="246" y="90" fill="steelblue" height="10" width="24" />
    <rect x="270" y="90" fill="darkblue" height="10" width="22" />
    <rect x="270" y="110" fill="steelblue" height="10" width="22" />
    <rect x="292" y="110" fill="darkblue" height="10" width="22" />
    <rect x="0" y="125" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="292" y="130" fill="steelblue" height="10" width="22" />
    <rect x="314" y="130" fill="darkblue" height="10" width="22" />
    <rect x="314" y="150" fill="steelblue" height="10" width="22" />
    <rect x="336" y="150" fill="darkblue" height="10" width="136" />
    <rect x="0" y="165" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="171" y="170" fill="lightgrey" height="10" width="189" />
    <rect x="360" y="170" fill="green" height="10" width="156" />
    <rect x="516" y="170" fill="darkgreen" height="10" width="180" />
    <rect x="382" y="190" fill="steelblue" height="10" width="22" />
    <rect x="404" y="190" fill="darkblue" height="10" width="22" />
    <rect x="0" y="205" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="404" y="210" fill="steelblue" height="10" width="22" />
    <rect x="426" y="210" fill="darkblue" height="10" width="24" />
    <rect x="426" y="230" fill="steelblue" height="10" width="24" />
    <rect x="450" y="230" fill="darkblue" height="10" width="22" />
    <rect x="0" y="245" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="450" y="250" fill="steelblue" height="10" width="44" />
    <rect x="494" y="250" fill="darkblue" height="10" width="22" />
    <rect x="472" y="270" fill="steelblue" height="10" width="44" />
    <rect x="516" y="270" fill="darkblue" height="10" width="24" />
    <rect x="0" y="285" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="494" y="290" fill="steelblue" height="10" width="46" />
    <rect x="540" y="290" fill="darkblue" height="10" width="22" />
    <rect x="516" y="310" fill="steelblue" height="10" width="46" />
    <rect x="562" y="310" fill="darkblue" height="10" width="22" />
    <rect x="0" y="325" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="360" y="330" fill="lightgrey" height="10" width="180" />
    <rect x="540" y="330" fill="green" height="10" width="156" />
    <rect x="696" y="330" fill="darkgreen" height="10" width="180" />
    <rect x="562" y="350" fill="steelblue" height="10" width="44" />
    <rect x="606" y="350" fill="darkblue" height="10" width="24" />
    <rect x="0" y="365" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="584" y="370" fill="steelblue" height="10" width="46" />
    <rect x="630" y="370" fill="darkblue" height="10" width="22" />
    <rect x="606" y="390" fill="steelblue" height="10" width="46" />
    <rect x="652" y="390" fill="darkblue" height="10" width="22" />
    <rect x="0" y="405" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="630" y="410" fill="steelblue" height="10" width="44" />
    <rect x="674" y="410" fill="darkblue" height="10" width="22" />
    <rect x="652" y="430" fill="steelblue" height="10" width="44" />
    <rect x="696" y="430" fill="darkblue" height="10" width="24" />
    <rect x="0" y="445" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="674" y="450" fill="steelblue" height="10" width="46" />
    <rect x="720" y="450" fill="darkblue" height="10" width="22" />
    <rect x="696" y="470" fill="steelblue" height="10" width="46" />
    <rect x="742" y="470" fill="darkblue" height="10" width="22" />
    <rect x="0" y="485" fill="rgba(130,130,0,0.1)" height="20" width="1056" />
    <rect x="540" y="490" fill="lightgrey" height="10" width="180" />
    <rect x="720" y="490" fill="green" height="10" width="156" />
    <rect x="876" y="490" fill="darkgreen" height="10" width="180" />
  </g>
  <g transform="translate(0, 560)">
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

## Соответствие версий iikoRMS и версий API ##

| Версия      | Выпуск           | Удаление |
| ----------  |:----------------:|:--------:|
| V1          | 3.1              | 3.8      |
| V2          | 3.3              | 4.3      |
| V3          | 3.8              | 5.4      |
| V4          | 4.3              | 7.0      |
| V5          | 5.4              | 8.0      |
| V6Preview4  | 6.4<sup>1</sup>  | 7.0      |
| V6Preview5  | 6.4              | 7.1      |
| V6          | 7.0              |          |
| V7Preview1  | 7.1              | 7.4      |
| V7Preview2  | 7.3.5<sup>2</sup>| 7.4      |
| V7Preview3  | 7.3              | 7.5      |
| V7Preview4  | 7.4              | 7.6      |
| V7Preview5  | 7.5              | 7.7      |
| V7Preview6  | 7.6              | 7.9      |
| V7Preview7  | 7.7              | 8.5<sup>3</sup>      |
| V7          | 7.9              | 9.5      |
| V8Preview1  | 8.0              | 8.2      |
| V8Preview2  | 8.1              | 8.3      |
| V8Preview3  | 8.2              | 8.4      |
| V8Preview4<sup>4</sup>  | 8.3              | 8.6      |
| V8Preview5  | 8.4              | 8.7      |
| V8Preview6  | 8.5              | 8.8      |
| V8Preview7  | 8.6              | 8.9      |
| V8          | 8.7              | 10.3     |
| V9Preview1  | 8.8              | 9.1      |
| V9Preview2  | 9.9              | 9.2      |
| V9Preview3  | 9.0              | 9.3      |
| V9Preview4  | 9.1              | 9.4      |
| V9Preview5  | 9.2              | 9.5      |
| V9Preview6  | 9.3              | 9.6      |
| V9Preview7  | 9.4              | 9.7      |
| V9          | 9.5              |          |
| V10Preview1 | 9.6              | 9.9      |
| V10Preview2 | 9.7              | 10.0     |
| V10Preview3 | 9.8              | 10.1     |
| V10Preview4 | 9.9              | 10.2     |
| V10Preview5 | 10.0             | 10.3     |
| V10Preview6 | 10.1             | 10.4     |
| V10Preview7 | 10.2             | 10.5     |
| V10         | 10.3             |          |
{:.mbtablestyle}
<sup>1</sup> Версия V6Preview4 была экспериментальной, она выпущена в начале цикла разработки iikoRMS 6.4. Кроме того, были пропущены V6Preview6 и V6Preview7, вместо них сразу вышла LTS-версия V6.  
<sup>2</sup> Версия V7Preview2 [выпущена](2020/05/28/v7preview2-release.html) с опозданием в 7.3.5 (вместо 7.2).  
<sup>3</sup> Поддержка версии V7Preview7 была продлена до 8.6 включительно из-за проблем с автообновлением плагинов с V7Preview7 на V7.  
<sup>4</sup> Срок жизни Preview-версий начиная с V8Preview4 увеличен на одну версию iikoRMS.

Начиная с версии iikoRMS 8.5 момента цикл поддержки Preview-версий увеличивается: версия V8Preview4, которая была выпущена в 8.3, будет удалена лишь в 8.6, т.е. поддерживается в 8.3, 8.4, 8.5.

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
