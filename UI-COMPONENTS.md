# Примеры использования нового дизайна

Этот файл содержит примеры различных UI компонентов, которые вы можете использовать в своих markdown файлах.

## 🎨 Цветные блоки с информацией

### Информационный блок
```html
<div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1)); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0; border-left: 4px solid var(--primary-color);">
    <strong>💡 Совет:</strong> Здесь размещается важная информация
</div>
```

### Предупреждение
```html
<div style="background: rgba(245, 158, 11, 0.1); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0; border-left: 4px solid #f59e0b;">
    <strong>⚠️ Внимание:</strong> Важное предупреждение для пользователей
</div>
```

### Успех
```html
<div style="background: rgba(16, 185, 129, 0.1); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0; border-left: 4px solid var(--success-color);">
    <strong>✅ Готово:</strong> Операция выполнена успешно
</div>
```

### Ошибка
```html
<div style="background: rgba(239, 68, 68, 0.1); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0; border-left: 4px solid #ef4444;">
    <strong>❌ Ошибка:</strong> Описание проблемы
</div>
```

## 📊 Карточки с функциями

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary-color);">
        <h3 style="margin-top: 0; color: var(--primary-color);">Заголовок</h3>
        <p style="margin-bottom: 0;">Описание функции</p>
    </div>
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--secondary-color);">
        <h3 style="margin-top: 0; color: var(--secondary-color);">Заголовок 2</h3>
        <p style="margin-bottom: 0;">Описание функции 2</p>
    </div>
</div>
```

## 🔘 Кнопки и ссылки

### Кнопка-карточка
```html
<a href="#" style="display: inline-block; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 1rem 2rem; border-radius: var(--radius-md); text-decoration: none; font-weight: 600; box-shadow: var(--shadow-md); transition: var(--transition);">
    Нажмите здесь
</a>
```

### Версионные карточки
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
    <a href="#" style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-md); text-align: center; text-decoration: none; border: 2px solid var(--border-color); transition: var(--transition); display: block;">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📘</div>
        <div style="font-weight: 600; color: var(--text-primary);">Version X</div>
        <div style="font-size: 0.875rem; color: var(--text-muted);">Статус</div>
    </a>
</div>
```

## 📋 Списки с шагами

```html
<div style="background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
    <ol style="margin: 0; padding-left: 1.5rem;">
        <li style="margin: 0.75rem 0;">
            <strong>Шаг 1:</strong> Описание первого шага
        </li>
        <li style="margin: 0.75rem 0;">
            <strong>Шаг 2:</strong> Описание второго шага
        </li>
        <li style="margin: 0.75rem 0;">
            <strong>Шаг 3:</strong> Описание третьего шага
        </li>
    </ol>
</div>
```

## 💼 Блок контактов

```html
<div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
    <p style="margin: 0 0 1rem 0;">
        <strong>Контакты:</strong>
    </p>
    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <div>
            📧 <strong>Email:</strong> <a href="mailto:example@example.com">example@example.com</a>
        </div>
        <div>
            🌐 <strong>Website:</strong> <a href="#">example.com</a>
        </div>
    </div>
</div>
```

## 🎯 Highlights (выделенные блоки)

```html
<div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(139, 92, 246, 0.05)); padding: 2rem; border-radius: 12px; margin: 2rem 0; border: 2px solid var(--border-color);">
    <h2 style="margin-top: 0; color: var(--primary-color); border: none; padding: 0;">Важная информация</h2>
    <p style="font-size: 1.125rem; margin-bottom: 0;">
        Текст важного сообщения или анонса
    </p>
</div>
```

## 📊 Таблица сравнения

```html
<table style="width: 100%; margin: 1.5rem 0;">
    <thead>
        <tr>
            <th>Функция</th>
            <th>V7</th>
            <th>V8</th>
            <th>V9</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Поддержка плагинов</strong></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
        </tr>
        <tr>
            <td><strong>Новая функция</strong></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
        </tr>
    </tbody>
</table>
```

## 🏷️ Теги

Теги автоматически стилизуются, просто добавьте их в frontmatter:

```yaml
---
title: Название страницы
tags: [api, plugin, v8]
---
```

## 📝 Код с заголовком

```html
<div style="margin: 1.5rem 0;">
    <div style="background: var(--bg-tertiary); padding: 0.75rem 1rem; border-radius: var(--radius-md) var(--radius-md) 0 0; font-weight: 600; color: var(--text-primary);">
        Program.cs
    </div>
    <pre style="margin: 0; border-radius: 0 0 var(--radius-md) var(--radius-md);"><code>
public class MyPlugin : IPlugin
{
    // Ваш код здесь
}
    </code></pre>
</div>
```

## 🎨 Цветовые CSS переменные

Доступные переменные для использования:

- `var(--primary-color)` - Основной синий цвет
- `var(--secondary-color)` - Вторичный голубой
- `var(--accent-color)` - Акцентный фиолетовый
- `var(--success-color)` - Зеленый для успеха
- `var(--bg-color)` - Основной фон
- `var(--bg-secondary)` - Вторичный фон
- `var(--bg-tertiary)` - Третичный фон
- `var(--text-primary)` - Основной текст
- `var(--text-secondary)` - Вторичный текст
- `var(--text-muted)` - Приглушенный текст
- `var(--border-color)` - Цвет границ
- `var(--radius-sm)` - Малое скругление (6px)
- `var(--radius-md)` - Среднее скругление (8px)
- `var(--radius-lg)` - Большое скругление (12px)
- `var(--shadow-sm)` - Малая тень
- `var(--shadow-md)` - Средняя тень
- `var(--shadow-lg)` - Большая тень
- `var(--transition)` - Стандартный переход

## 💡 Советы по использованию

1. **Используйте CSS переменные** вместо жестко заданных цветов для совместимости с темной темой
2. **Добавляйте эмодзи** для визуальной привлекательности (но умеренно)
3. **Группируйте контент в карточки** для лучшей читаемости
4. **Используйте градиенты** для выделения важных блоков
5. **Добавляйте интерактивность** с помощью hover-эффектов
