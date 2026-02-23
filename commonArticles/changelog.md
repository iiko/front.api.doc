---
title: История изменений
layout: default
permalink: /changelog.html
---

<style>
.changelog-year {
    margin: 2rem 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    overflow: hidden;
    background: var(--bg-secondary);
}

.changelog-year-header {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    transition: var(--transition);
}

.changelog-year-header:hover {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
}

.changelog-year-header .toggle-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.changelog-year-header.collapsed .toggle-icon {
    transform: rotate(-90deg);
}

.changelog-content {
    padding: 0;
    max-height: 5000px;
    overflow: hidden;
    transition: max-height 0.5s ease-out, padding 0.3s ease;
}

.changelog-content.collapsed {
    max-height: 0;
    padding: 0;
}

.changelog-item {
    border-bottom: 1px solid var(--border-color);
    padding: 1.25rem 1.5rem;
    transition: background 0.2s ease;
}

.changelog-item:last-child {
    border-bottom: none;
}

.changelog-item:hover {
    background: var(--bg-tertiary);
}

.changelog-date {
    white-space: nowrap;
    color: var(--text-muted);
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    display: block;
}

.changelog-title {
    font-weight: 600;
    font-size: 1.05rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.changelog-title a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.2s ease;
}

.changelog-title a:hover {
    color: var(--primary-color);
}

.changelog-excerpt {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}

.changelog-stats {
    background: var(--bg-tertiary);
    padding: 1rem 1.5rem;
    border-radius: var(--radius-md);
    margin-bottom: 2rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.changelog-stat {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.changelog-stat-icon {
    font-size: 1.5rem;
}

.changelog-stat-text {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.changelog-stat-value {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--text-primary);
}
</style>

<div class="changelog-stats">
    <div class="changelog-stat">
        <span class="changelog-stat-icon">📝</span>
        <div>
            <div class="changelog-stat-value">{{ site.posts.size }}</div>
            <div class="changelog-stat-text">Всего записей</div>
        </div>
    </div>
    <div class="changelog-stat">
        <span class="changelog-stat-icon">📅</span>
        <div>
            <div class="changelog-stat-value">{{ site.posts | group_by_exp: "post", "post.date | date: '%Y'" | size }}</div>
            <div class="changelog-stat-text">Лет истории</div>
        </div>
    </div>
</div>

{% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
<div class="changelog-year">
    <div class="changelog-year-header" onclick="toggleYear(this)">
        <span>📅 {{ year.name }} ({{ year.items.size }} записей)</span>
        <span class="toggle-icon">▼</span>
    </div>
    <div class="changelog-content">
        {% for post in year.items %}
        <div class="changelog-item">
            <span class="changelog-date">{{ post.date | date: "%-d %B %Y" | replace: "January", "января" | replace: "February", "февраля" | replace: "March", "марта" | replace: "April", "апреля" | replace: "May", "мая" | replace: "June", "июня" | replace: "July", "июля" | replace: "August", "августа" | replace: "September", "сентября" | replace: "October", "октября" | replace: "November", "ноября" | replace: "December", "декабря" }}</span>
            <div class="changelog-title">
                <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
            </div>
            <div class="changelog-excerpt">
                {{ post.excerpt | strip_html | truncatewords: 30 }}
            </div>
        </div>
        {% endfor %}
    </div>
</div>
{% endfor %}

<script>
function toggleYear(header) {
    header.classList.toggle('collapsed');
    const content = header.nextElementSibling;
    content.classList.toggle('collapsed');
}

// Автоматически разворачивать только текущий и предыдущий год
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const headers = document.querySelectorAll('.changelog-year-header');
    
    headers.forEach((header, index) => {
        const yearText = header.textContent.match(/\d{4}/);
        const year = yearText ? parseInt(yearText[0]) : 0;
        
        // Сворачиваем все года кроме текущего и предыдущего
        if (year < currentYear - 1) {
            header.classList.add('collapsed');
            header.nextElementSibling.classList.add('collapsed');
        }
    });
});
</script>
