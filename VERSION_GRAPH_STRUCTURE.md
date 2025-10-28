# API Version Graph - Структура проекта

Модульная архитектура интерактивной таблицы жизненного цикла версий API.

## Структура файлов

```
front.api.doc/
├── versioning.md                   # Основная страница (только контент)
├── css/
│   └── version-graph.css          # Стили таблицы с CSS-переменными
└── js/
    ├── config/
    │   └── graph-config.js        # Конфигурация (классы, селекторы, z-index)
    ├── data/
    │   └── version-data.js        # Данные версий продукта и API
    ├── modules/
    │   ├── filter-manager.js      # Управление фильтрами (Observer)
    │   ├── table-builder.js       # Построение DOM таблицы
    │   ├── table-renderer.js      # Оркестрация рендеринга
    │   └── interaction-manager.js # Интерактивность (event delegation)
    └── version-graph-app.js       # Главный контроллер приложения
```

## Архитектура

### CONFIG (graph-config.js)
Централизованное хранение констант:
- `CLASSES` - CSS классы таблицы
- `SELECTORS` - DOM селекторы
- `Z_INDEX` - Z-индексы для sticky элементов

### VersionDataStore (version-data.js)
Данные и бизнес-логика:
- `productVersions[]` - 43 версии продукта (7.0-11.4)
- `apiVersions[]` - 41 версия API (V6-V11)
- Методы: `compareVersions()`, `isVersionInRange()`, `isDevPeriod()`, `getYearGroups()`

### FilterManager (filter-manager.js)
State management с паттерном Observer:
- `state` - текущие значения фильтров
- `applyFilters()` - фильтрация версий API
- `subscribe()` - подписка на изменения

### TableBuilder (table-builder.js)
Построение DOM через createElement():
- `createTable()`, `createHeader()`, `createBody()`
- `createApiRow()`, `createVersionCell()`
- Без string concatenation - только DOM API

### TableRenderer (table-renderer.js)
Координация рендеринга:
- `init()` - инициализация контейнера
- `render()` - полный цикл отрисовки

### InteractionManager (interaction-manager.js)
Event delegation для интерактивности:
- 2 обработчика на контейнер (mouseenter/mouseleave)
- `highlightRow()`, `highlightColumn()`
- Bidirectional highlighting

### VersionGraphApp (version-graph-app.js)
Главный контроллер:
- `init()` - запуск приложения
- `bindFilters()` - связывание UI и FilterManager
- DOMContentLoaded обработчик

## Порядок загрузки скриптов

1. `graph-config.js` - константы
2. `version-data.js` - данные
3. `filter-manager.js` - фильтры
4. `table-builder.js` - построитель
5. `table-renderer.js` - рендерер
6. `interaction-manager.js` - интерактивность
7. `version-graph-app.js` - главный контроллер + init

## Добавление новых версий

### Версия продукта
Отредактируйте `js/data/version-data.js`:
```javascript
productVersions: [
  // ...
  { version: '11.5', year: 2031 }
]
```

### Версия API
Отредактируйте `js/data/version-data.js`:
```javascript
apiVersions: [
  // ...
  { name: 'V11Preview8', type: 'preview', from: '11.2', to: '11.4', actual: true, released: false }
]
```

## Изменение цветовой схемы

Отредактируйте CSS-переменные в `css/version-graph.css`:
```css
:root {
  --color-lts: #новый-цвет;
  --color-lts-dev: #новый-цвет;
  --color-preview: #новый-цвет;
}
```

## Технологии

- **Vanilla JavaScript** (ES6)
- **DOM API** (без jQuery)
- **CSS Variables** (современный CSS)
- **Observer Pattern** (FilterManager)
- **Event Delegation** (InteractionManager)
- **Jekyll/Liquid** (шаблонизация)
