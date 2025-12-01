---
title: Главная
layout: default
---

<div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1)); padding: 2rem; border-radius: 12px; margin-bottom: 2rem; border: 2px solid var(--border-color);">
    <h2 style="margin-top: 0; color: var(--primary-color); border: none; padding: 0;">👋 Добро пожаловать в документацию iikoFront API!</h2>
    <p style="font-size: 1.125rem; margin-bottom: 0;">
        Здесь вы найдете всю необходимую информацию для разработки плагинов и интеграций с кассовым ПО iikoFront.
    </p>
</div>

## 🚀 Быстрый старт

<div style="background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
    <ol style="margin: 0; padding-left: 1.5rem;">
        <li style="margin: 0.75rem 0;">
            <strong>Изучите основы:</strong> Ознакомьтесь с <a href="{{ site.baseurl }}/intro.html">введением</a> и <a href="{{ site.baseurl }}/licensing.html">лицензированием</a>
        </li>
        <li style="margin: 0.75rem 0;">
            <strong>Выберите версию API:</strong> Рекомендуем начать с <a href="https://iiko.github.io/front.api.sdk/v8/">V8 (текущая)</a> или <a href="https://iiko.github.io/front.api.sdk/v9/">V9 (preview)</a>
        </li>
        <li style="margin: 0.75rem 0;">
            <strong>Установите SDK:</strong> Скачайте <a href="https://github.com/iiko/front.api.sdk">iikoFront API SDK</a> с GitHub
        </li>
        <li style="margin: 0.75rem 0;">
            <strong>Начните разработку:</strong> Создайте свой первый плагин, используя примеры из документации
        </li>
        <li style="margin: 0.75rem 0;">
            <strong>Следите за изменениями:</strong> Читайте <a href="{{ site.baseurl }}/changelog.html">changelog</a> для актуальной информации об обновлениях
        </li>
    </ol>
</div>

## 📚 Разделы документации

- **[Введение]({{ site.baseurl }}/intro.html)** — основные концепции и архитектура API
- **[Лицензирование]({{ site.baseurl }}/licensing.html)** — информация о лицензировании плагинов
- **[Версионирование]({{ site.baseurl }}/versioning.html)** — политика версионирования API
- **[Отладка]({{ site.baseurl }}/debugging.html)** — инструменты и методы отладки
- **[Changelog]({{ site.baseurl }}/changelog.html)** — история изменений API

## 🎯 О iikoFront API

**iikoFront** — это программное обеспечение для кассовых терминалов, являющееся частью продукта **iikoRms**. Приложение поддерживает расширение функциональности с помощью плагинов.

Используя специальный программный интерфейс (API), вы можете:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary-color);">
        <h3 style="margin-top: 0; color: var(--primary-color); font-size: 1.25rem;">🔧 Изменять поведение</h3>
        <p style="margin-bottom: 0;">Настраивать работу приложения в определенных сценариях и бизнес-процессах</p>
    </div>
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--secondary-color);">
        <h3 style="margin-top: 0; color: var(--secondary-color); font-size: 1.25rem;">🖨️ Расширять печать</h3>
        <p style="margin-bottom: 0;">Дополнять чеки собственной информацией при печати</p>
    </div>
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-color);">
        <h3 style="margin-top: 0; color: var(--accent-color); font-size: 1.25rem;">📺 Customer Display</h3>
        <p style="margin-bottom: 0;">Дублировать состав заказа на второй монитор для покупателя</p>
    </div>
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--success-color);">
        <h3 style="margin-top: 0; color: var(--success-color); font-size: 1.25rem;">🔌 Интеграции</h3>
        <p style="margin-bottom: 0;">Подключать внешние системы приема заказов (веб-сайты, мобильные приложения)</p>
    </div>
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--warning-color);">
        <h3 style="margin-top: 0; color: var(--warning-color); font-size: 1.25rem;">📊 Аналитика</h3>
        <p style="margin-bottom: 0;">Собирать статистику и строить собственные отчеты</p>
    </div>
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--info-color);">
        <h3 style="margin-top: 0; color: var(--info-color); font-size: 1.25rem;">💳 Платежные системы</h3>
        <p style="margin-bottom: 0;">Подключать внешние платежные системы и терминалы</p>
    </div>
</div>

## 📖 API Reference

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
    <a href="https://iiko.github.io/front.api.sdk/v7/" style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-md); text-align: center; text-decoration: none; border: 2px solid var(--border-color); transition: var(--transition); display: block;">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📕</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;">Version 7</div>
        <div style="font-size: 0.875rem; color: var(--text-muted);">Устаревшая</div>
    </a>
    <a href="https://iiko.github.io/front.api.sdk/v8/" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); padding: 1.25rem; border-radius: var(--radius-md); text-align: center; text-decoration: none; border: 2px solid var(--primary-color); transition: var(--transition); display: block; box-shadow: var(--shadow-md);">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📗</div>
        <div style="font-weight: 600; color: white; margin-bottom: 0.25rem;">Version 8</div>
        <div style="font-size: 0.875rem; color: rgba(255,255,255,0.9);">⭐ Текущая</div>
    </a>
    <a href="https://iiko.github.io/front.api.sdk/v9/" style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-md); text-align: center; text-decoration: none; border: 2px solid var(--accent-color); transition: var(--transition); display: block;">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📘</div>
        <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;">Version 9</div>
        <div style="font-size: 0.875rem; color: var(--accent-color);">🚀 Предпросмотр</div>
    </a>
</div>

## 💬 Поддержка и контакты

<div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
    <p style="margin: 0 0 1rem 0;">
        <strong>Нужна помощь?</strong> Мы всегда готовы ответить на ваши вопросы:
    </p>
    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <div>
            📧 <strong>Email:</strong> <a href="mailto:api@iiko.ru">api@iiko.ru</a>
        </div>
        <div>
            🌐 <strong>Help Center:</strong> <a href="http://ru.iiko.help/articles/#!api-documentations/getting-started/">help.iiko.ru</a>
        </div>
        <div>
            💻 <strong>GitHub:</strong> <a href="https://github.com/iiko/front.api.sdk">front.api.sdk</a>
        </div>
    </div>
</div>

---

<p style="text-align: center; color: var(--text-muted); font-size: 0.875rem; margin-top: 2rem;">
    <em>Документация постоянно обновляется. Последнее обновление: {{ site.time | date: "%d.%m.%Y" }}</em>
</p>
