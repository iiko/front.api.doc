# Инструкция по активации дополнительных возможностей

## 📦 Что включено

В файле `assets/js/enhancements.js` содержатся дополнительные возможности для улучшения UX:

1. **Переключатель темы (Light/Dark)** - Кнопка для переключения между светлой и темной темами
2. **Плавная прокрутка** - Плавная анимация при переходе по якорям
3. **Кнопка "Наверх"** - Быстрый возврат к началу страницы
4. **Копирование кода** - Кнопка копирования в блоках кода
5. **Подсветка активного раздела** - Выделение текущей страницы в навигации
6. **Быстрый поиск (Ctrl+K)** - Горячая клавиша для фокуса на поиске
7. **Таблица содержания** - Автоматическое создание TOC для длинных статей
8. **Прогресс чтения** - Индикатор прогресса прокрутки страницы
9. **Lazy Loading** - Отложенная загрузка изображений
10. **Уведомления об обновлениях** - Напоминания о новых изменениях

## 🚀 Как активировать

### Вариант 1: Добавить в default.html (рекомендуется)

Добавьте перед закрывающим тегом `</body>` в файле `_layouts/default.html`:

```html
<script src="{{ site.baseurl }}/assets/js/enhancements.js"></script>
```

### Вариант 2: Выборочная активация

Если вы хотите активировать только некоторые функции, создайте свой скрипт:

```html
<script src="{{ site.baseurl }}/assets/js/enhancements.js"></script>
<script>
    // Активировать только нужные функции
    document.addEventListener('DOMContentLoaded', () => {
        initThemeToggle();
        initScrollToTop();
        initCodeCopy();
    });
</script>
```

## ⚙️ Настройка функций

### Изменение положения кнопок

В файле `enhancements.js` найдите соответствующие функции и измените стили:

```javascript
// Пример: переместить кнопку темы в левый нижний угол
toggleButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 2rem;  // Было: right: 2rem
    ...
`;
```

### Отключение уведомлений

Закомментируйте вызов в конце файла:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // ...
    // initUpdateNotification(); // Отключено
});
```

### Изменение интервала уведомлений

В функции `initUpdateNotification` измените значение:

```javascript
if (!lastVisit || (currentTime - parseInt(lastVisit)) > 604800000) { // 7 дней вместо 24 часов
    ...
}
```

## 🎨 Активация темной темы

### Вариант 1: Автоматическая (системная)

Добавьте в `<head>` файла `default.html`:

```html
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/dark-theme.css">
```

Темная тема активируется автоматически, если в системе пользователя установлена темная тема.

### Вариант 2: Ручная с переключателем

1. Добавьте скрипт `enhancements.js`
2. Функция `initThemeToggle()` автоматически создаст кнопку переключения
3. Выбор сохраняется в localStorage

## 📱 Мобильная адаптация

Все функции автоматически адаптируются под мобильные устройства. Для дополнительной настройки добавьте media queries:

```javascript
if (window.innerWidth < 768) {
    // Специальная логика для мобильных устройств
    toggleButton.style.bottom = '1rem';
    toggleButton.style.right = '1rem';
}
```

## 🔧 Расширенная настройка

### Добавление собственных функций

Вы можете добавить свои функции в `enhancements.js`:

```javascript
// Ваша кастомная функция
function myCustomFunction() {
    console.log('Моя функция работает!');
    // Ваш код здесь
}

// Не забудьте добавить в инициализацию
document.addEventListener('DOMContentLoaded', () => {
    // ... существующие функции
    myCustomFunction();
});
```

### Интеграция с Google Analytics

```javascript
// Отслеживание кликов по кнопке копирования кода
button.addEventListener('click', () => {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'code_copy', {
            'event_category': 'engagement',
            'event_label': 'Code Snippet'
        });
    }
    // ... остальной код
});
```

## 🐛 Отладка

Для проверки работы функций откройте консоль браузера (F12) и введите:

```javascript
// Проверка загрузки скрипта
console.log('enhancements.js loaded:', typeof initThemeToggle !== 'undefined');

// Проверка сохраненной темы
console.log('Current theme:', localStorage.getItem('theme'));

// Проверка последнего визита
console.log('Last visit:', new Date(parseInt(localStorage.getItem('lastVisit'))));
```

## ⚡ Производительность

Все функции оптимизированы для производительности:

- **Debouncing** для событий scroll
- **IntersectionObserver** для lazy loading
- **LocalStorage** для кэширования настроек
- **CSS transitions** вместо JavaScript анимаций

## 🔐 Безопасность

Скрипты не:
- Собирают личные данные
- Отправляют данные на внешние серверы
- Используют cookies (только localStorage)
- Требуют дополнительных разрешений

## 📝 Примеры использования

### Пример 1: Минимальная конфигурация

```html
<!-- В default.html перед </body> -->
<script>
    // Только базовые функции
    document.addEventListener('DOMContentLoaded', () => {
        initSmoothScroll();
        initScrollToTop();
        initActiveNavHighlight();
    });
</script>
```

### Пример 2: Полная конфигурация

```html
<!-- В default.html перед </body> -->
<script src="{{ site.baseurl }}/assets/js/enhancements.js"></script>
<!-- Все функции активируются автоматически -->
```

### Пример 3: Пользовательская настройка

```html
<script src="{{ site.baseurl }}/assets/js/enhancements.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Базовые функции
        initThemeToggle();
        initSmoothScroll();
        initCodeCopy();
        
        // Только для статей (страниц с большим количеством текста)
        if (document.querySelector('article').textContent.length > 5000) {
            initTableOfContents();
            initReadingProgress();
        }
    });
</script>
```

## 📊 Рекомендуемая конфигурация

Для документации рекомендуется активировать:

✅ **Обязательно:**
- `initSmoothScroll()` - Улучшает навигацию
- `initCodeCopy()` - Удобно для разработчиков
- `initActiveNavHighlight()` - Помогает ориентироваться

✅ **Рекомендуется:**
- `initThemeToggle()` - Комфорт для глаз
- `initScrollToTop()` - Удобство навигации
- `initQuickSearch()` - Быстрый доступ к поиску

⚠️ **Опционально:**
- `initTableOfContents()` - Для длинных статей
- `initReadingProgress()` - Для блогов/длинных текстов
- `initUpdateNotification()` - Может раздражать частых посетителей

## 🔄 Обновления

При обновлении `enhancements.js`:

1. Сохраните резервную копию текущего файла
2. Обновите файл
3. Проверьте работу на тестовом окружении
4. Очистите кэш браузера (Ctrl+Shift+R)

## 💡 Советы

1. **Тестируйте на разных браузерах** - Chrome, Firefox, Safari, Edge
2. **Проверяйте на мобильных** - iOS Safari, Android Chrome
3. **Используйте консоль разработчика** - для выявления ошибок
4. **Собирайте обратную связь** - от пользователей документации

## 📞 Поддержка

При возникновении проблем:
1. Проверьте консоль браузера на ошибки
2. Убедитесь, что путь к файлу корректен
3. Проверьте, что Jekyll корректно собирает сайт
4. Обратитесь к документации Jekyll по работе с assets

---

**Версия:** 1.0  
**Совместимость:** Современные браузеры (ES6+)  
**Зависимости:** Нет (vanilla JavaScript)
