// Улучшенный поиск с предпросмотром для документации iikoFront API
(function() {
    'use strict';

    let searchIndex = [];
    let searchModal = null;
    let searchInput = null;
    let searchResults = null;
    let currentFocus = -1;

    // Инициализация поиска
    function initSearch() {
        createSearchModal();
        buildSearchIndex();
        setupKeyboardShortcuts();
        replaceHeaderSearch();
    }

    // Создание модального окна поиска
    function createSearchModal() {
        // Создаем оверлей
        const overlay = document.createElement('div');
        overlay.id = 'search-overlay';
        overlay.style.cssText = `
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            z-index: 2000;
            animation: fadeIn 0.2s ease-out;
        `;

        // Создаем модальное окно
        searchModal = document.createElement('div');
        searchModal.id = 'search-modal';
        searchModal.style.cssText = `
            display: none;
            position: fixed;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 700px;
            max-height: 80vh;
            background: var(--bg-color);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
            z-index: 2001;
            animation: slideDown 0.3s ease-out;
            overflow: hidden;
            border: 2px solid var(--border-color);
        `;

        // Контейнер для поиска
        const searchContainer = document.createElement('div');
        searchContainer.style.cssText = `
            padding: 1.5rem;
            border-bottom: 2px solid var(--border-color);
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        `;

        // Поле ввода
        searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Поиск по документации... (ESC для закрытия)';
        searchInput.style.cssText = `
            width: 100%;
            padding: 1rem 1.5rem;
            border: none;
            border-radius: var(--radius-md);
            font-size: 1.125rem;
            font-family: 'Inter', sans-serif;
            background: white;
            color: var(--text-primary);
            box-shadow: var(--shadow-md);
            outline: none;
        `;

        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keydown', handleKeyboardNavigation);

        searchContainer.appendChild(searchInput);

        // Контейнер результатов
        searchResults = document.createElement('div');
        searchResults.id = 'search-results';
        searchResults.style.cssText = `
            max-height: calc(80vh - 120px);
            overflow-y: auto;
            padding: 1rem;
        `;

        // Подсказка
        const hint = document.createElement('div');
        hint.style.cssText = `
            padding: 0.75rem 1.5rem;
            text-align: center;
            color: var(--text-muted);
            font-size: 0.875rem;
            border-top: 1px solid var(--border-color);
            background: var(--bg-secondary);
        `;
        hint.innerHTML = '💡 Используйте <kbd style="padding: 0.25rem 0.5rem; background: var(--bg-tertiary); border-radius: 4px; font-size: 0.75rem;">↑</kbd> <kbd style="padding: 0.25rem 0.5rem; background: var(--bg-tertiary); border-radius: 4px; font-size: 0.75rem;">↓</kbd> для навигации, <kbd style="padding: 0.25rem 0.5rem; background: var(--bg-tertiary); border-radius: 4px; font-size: 0.75rem;">Enter</kbd> для перехода';

        searchModal.appendChild(searchContainer);
        searchModal.appendChild(searchResults);
        searchModal.appendChild(hint);

        document.body.appendChild(overlay);
        document.body.appendChild(searchModal);

        // Закрытие по клику на оверлей
        overlay.addEventListener('click', closeSearch);

        // Анимации
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            #search-results::-webkit-scrollbar {
                width: 8px;
            }
            #search-results::-webkit-scrollbar-track {
                background: var(--bg-secondary);
                border-radius: 4px;
            }
            #search-results::-webkit-scrollbar-thumb {
                background: var(--border-color);
                border-radius: 4px;
            }
            #search-results::-webkit-scrollbar-thumb:hover {
                background: var(--text-muted);
            }
            .search-result-item {
                padding: 1rem;
                margin-bottom: 0.5rem;
                border-radius: var(--radius-md);
                background: var(--bg-secondary);
                border-left: 4px solid transparent;
                cursor: pointer;
                transition: var(--transition);
            }
            .search-result-item:hover,
            .search-result-item.focused {
                background: var(--bg-tertiary);
                border-left-color: var(--primary-color);
                transform: translateX(4px);
            }
            .search-result-title {
                font-weight: 600;
                color: var(--primary-color);
                margin-bottom: 0.5rem;
                font-size: 1.0625rem;
            }
            .search-result-excerpt {
                color: var(--text-secondary);
                font-size: 0.9375rem;
                line-height: 1.6;
            }
            .search-result-excerpt mark {
                background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2));
                color: var(--primary-color);
                padding: 0.125rem 0.25rem;
                border-radius: 3px;
                font-weight: 600;
            }
            .search-result-meta {
                margin-top: 0.5rem;
                display: flex;
                gap: 1rem;
                font-size: 0.8125rem;
                color: var(--text-muted);
            }
            .search-result-tag {
                background: var(--accent-color);
                color: white;
                padding: 0.125rem 0.5rem;
                border-radius: 12px;
                font-size: 0.75rem;
            }
            .search-no-results {
                text-align: center;
                padding: 3rem 1rem;
                color: var(--text-muted);
            }
            .search-no-results-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
                opacity: 0.5;
            }
        `;
        document.head.appendChild(style);
    }

    // Построение индекса поиска
    function buildSearchIndex() {
        // Загружаем данные из JSON индекса
        const searchDataEl = document.getElementById('search-data');
        if (searchDataEl) {
            try {
                const data = JSON.parse(searchDataEl.textContent);
                if (data.pages) {
                    data.pages.forEach(page => {
                        searchIndex.push({
                            title: page.title,
                            url: page.url,
                            date: page.date,
                            tags: page.tags || [],
                            type: getPageType(page.url),
                            content: page.content || page.title
                        });
                    });
                }
            } catch (e) {
                console.error('Failed to parse search data:', e);
            }
        }
        
        // Получаем все страницы из навигации
        const links = document.querySelectorAll('aside a');
        
        links.forEach(link => {
            const title = link.textContent.trim();
            const url = link.getAttribute('href');
            
            if (url && title) {
                // Проверяем, нет ли уже такой страницы в индексе
                const exists = searchIndex.some(item => item.url === url);
                if (!exists) {
                    searchIndex.push({
                        title: title,
                        url: url,
                        type: getPageType(url),
                        content: title
                    });
                }
            }
        });

        // Добавляем текущую страницу в индекс
        const currentPage = document.querySelector('article');
        if (currentPage) {
            const title = document.querySelector('article h1')?.textContent || document.title;
            const content = currentPage.textContent;
            const headings = Array.from(currentPage.querySelectorAll('h2, h3')).map(h => ({
                text: h.textContent,
                id: h.id || ''
            }));

            searchIndex.push({
                title: title,
                url: window.location.pathname,
                type: 'current',
                content: content,
                headings: headings
            });
        }

        console.log(`Search index built: ${searchIndex.length} pages indexed`);
    }

    // Определение типа страницы
    function getPageType(url) {
        if (url.includes('/v9/')) return 'v9';
        if (url.includes('/v8/')) return 'v8';
        if (url.includes('/v7/')) return 'v7';
        if (url.includes('/v6/')) return 'v6';
        if (url.includes('api.sdk')) return 'api-ref';
        if (url.match(/\/\d{4}\/\d{2}\/\d{2}\//)) return 'post'; // Формат даты в URL
        return 'doc';
    }

    // Получение иконки для типа
    function getTypeIcon(type) {
        const icons = {
            'v9': '📘',
            'v8': '📗',
            'v7': '📕',
            'v6': '📙',
            'api-ref': '🔧',
            'post': '📝',
            'doc': '📄',
            'current': '📍'
        };
        return icons[type] || '📄';
    }

    // Обработка поиска
    function handleSearch(e) {
        const query = e.target.value.trim().toLowerCase();
        currentFocus = -1;

        if (query.length < 2) {
            showEmptyState();
            return;
        }

        const results = searchPages(query);
        displayResults(results, query);
    }

    // Поиск по страницам
    function searchPages(query) {
        const results = [];
        const queryWords = query.split(' ').filter(w => w.length > 1);

        searchIndex.forEach(page => {
            let score = 0;
            const titleLower = page.title.toLowerCase();
            const contentLower = page.content.toLowerCase();

            // Точное совпадение в заголовке - высокий приоритет
            if (titleLower.includes(query)) {
                score += 100;
            }

            // Совпадение слов в заголовке
            queryWords.forEach(word => {
                if (titleLower.includes(word)) {
                    score += 50;
                }
            });

            // Совпадение в контенте
            queryWords.forEach(word => {
                const matches = (contentLower.match(new RegExp(word, 'g')) || []).length;
                score += matches * 2;
            });

            // Совпадение в заголовках секций
            if (page.headings) {
                page.headings.forEach(heading => {
                    if (heading.text.toLowerCase().includes(query)) {
                        score += 30;
                        results.push({
                            ...page,
                            title: `${page.title} → ${heading.text}`,
                            url: page.url + (heading.id ? '#' + heading.id : ''),
                            score: score + 30,
                            isSection: true
                        });
                    }
                });
            }

            if (score > 0) {
                results.push({
                    ...page,
                    score: score,
                    excerpt: getExcerpt(page.content, query)
                });
            }
        });

        // Сортировка по релевантности
        return results.sort((a, b) => b.score - a.score).slice(0, 10);
    }

    // Получение отрывка текста с подсветкой
    function getExcerpt(content, query, maxLength = 150) {
        const lowerContent = content.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const index = lowerContent.indexOf(lowerQuery);

        if (index === -1) {
            return content.substring(0, maxLength) + '...';
        }

        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + query.length + 100);
        
        let excerpt = content.substring(start, end);
        if (start > 0) excerpt = '...' + excerpt;
        if (end < content.length) excerpt = excerpt + '...';

        return excerpt;
    }

    // Подсветка совпадений
    function highlightMatches(text, query) {
        if (!query) return text;
        
        const regex = new RegExp(`(${query.split(' ').filter(w => w.length > 1).join('|')})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // Отображение результатов
    function displayResults(results, query) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            showNoResults(query);
            return;
        }

        results.forEach((result, index) => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.dataset.index = index;
            item.dataset.url = result.url;

            const title = document.createElement('div');
            title.className = 'search-result-title';
            title.innerHTML = `${getTypeIcon(result.type)} ${highlightMatches(result.title, query)}`;

            const excerpt = document.createElement('div');
            excerpt.className = 'search-result-excerpt';
            excerpt.innerHTML = highlightMatches(result.excerpt || '', query);

            const meta = document.createElement('div');
            meta.className = 'search-result-meta';
            
            const typeTag = document.createElement('span');
            typeTag.className = 'search-result-tag';
            typeTag.textContent = result.type.toUpperCase();
            
            meta.appendChild(typeTag);
            
            // Добавляем дату если есть
            if (result.date) {
                const dateSpan = document.createElement('span');
                dateSpan.textContent = '📅 ' + result.date;
                meta.appendChild(dateSpan);
            }
            
            // Добавляем теги если есть
            if (result.tags && result.tags.length > 0) {
                result.tags.slice(0, 3).forEach(tag => {
                    const tagSpan = document.createElement('span');
                    tagSpan.className = 'search-result-tag';
                    tagSpan.textContent = tag;
                    tagSpan.style.background = 'var(--secondary-color)';
                    meta.appendChild(tagSpan);
                });
            }
            
            const urlDisplay = document.createElement('span');
            urlDisplay.textContent = result.url;
            urlDisplay.style.fontSize = '0.75rem';
            urlDisplay.style.opacity = '0.7';
            meta.appendChild(urlDisplay);

            item.appendChild(title);
            if (result.excerpt) {
                item.appendChild(excerpt);
            }
            item.appendChild(meta);

            item.addEventListener('click', () => {
                window.location.href = result.url;
            });

            searchResults.appendChild(item);
        });
    }

    // Пустое состояние
    function showEmptyState() {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <div class="search-no-results-icon">🔍</div>
                <div style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">
                    Начните вводить запрос
                </div>
                <div style="font-size: 0.9375rem;">
                    Попробуйте найти "плагин", "API", "интеграция" или другие термины
                </div>
            </div>
        `;
    }

    // Нет результатов
    function showNoResults(query) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <div class="search-no-results-icon">😔</div>
                <div style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">
                    Ничего не найдено
                </div>
                <div style="font-size: 0.9375rem; margin-bottom: 1rem;">
                    По запросу "<strong>${query}</strong>" результатов нет
                </div>
                <div style="font-size: 0.875rem; color: var(--text-muted);">
                    💡 Попробуйте изменить запрос или использовать другие ключевые слова
                </div>
            </div>
        `;
    }

    // Навигация с клавиатуры
    function handleKeyboardNavigation(e) {
        const items = searchResults.querySelectorAll('.search-result-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentFocus++;
            if (currentFocus >= items.length) currentFocus = 0;
            updateFocus(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentFocus--;
            if (currentFocus < 0) currentFocus = items.length - 1;
            updateFocus(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentFocus >= 0 && items[currentFocus]) {
                const url = items[currentFocus].dataset.url;
                if (url) window.location.href = url;
            }
        } else if (e.key === 'Escape') {
            closeSearch();
        }
    }

    // Обновление фокуса
    function updateFocus(items) {
        items.forEach((item, index) => {
            if (index === currentFocus) {
                item.classList.add('focused');
                item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            } else {
                item.classList.remove('focused');
            }
        });
    }

    // Настройка горячих клавиш
    function setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K для открытия поиска
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
            // / для быстрого открытия поиска
            if (e.key === '/' && !isInputFocused()) {
                e.preventDefault();
                openSearch();
            }
        });
    }

    // Проверка фокуса на input элементе
    function isInputFocused() {
        const active = document.activeElement;
        return active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable;
    }

    // Замена поиска в header
    function replaceHeaderSearch() {
        const headerSearch = document.querySelector('.search-form');
        if (headerSearch) {
            const searchButton = document.createElement('button');
            searchButton.type = 'button';
            searchButton.style.cssText = `
                padding: 0.625rem 1.25rem;
                background: white;
                color: var(--primary-color);
                border: none;
                border-radius: var(--radius-md);
                cursor: pointer;
                font-weight: 600;
                font-size: 0.9375rem;
                transition: var(--transition);
                font-family: 'Inter', sans-serif;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            `;
            searchButton.innerHTML = '🔍 Поиск <kbd style="background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-left: 0.5rem;">Ctrl+K</kbd>';
            
            searchButton.addEventListener('click', openSearch);
            searchButton.addEventListener('mouseenter', function() {
                this.style.background = 'var(--bg-secondary)';
                this.style.transform = 'translateY(-1px)';
                this.style.boxShadow = 'var(--shadow-md)';
            });
            searchButton.addEventListener('mouseleave', function() {
                this.style.background = 'white';
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });

            headerSearch.parentNode.replaceChild(searchButton, headerSearch);
        }
    }

    // Открытие поиска
    function openSearch() {
        document.getElementById('search-overlay').style.display = 'block';
        searchModal.style.display = 'block';
        searchInput.focus();
        showEmptyState();
    }

    // Закрытие поиска
    function closeSearch() {
        document.getElementById('search-overlay').style.display = 'none';
        searchModal.style.display = 'none';
        searchInput.value = '';
        currentFocus = -1;
    }

    // Инициализация при загрузке страницы
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }
})();
