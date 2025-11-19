// Дополнительные возможности для модернизации портала
// Этот файл содержит примеры JavaScript кода, который можно добавить для расширения функциональности

// 1. Переключатель темы (Light/Dark)
function initThemeToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '🌓';
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: var(--shadow-lg);
        transition: var(--transition);
        z-index: 1000;
    `;
    
    toggleButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-theme');
        const isDark = document.documentElement.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    toggleButton.addEventListener('mouseenter', () => {
        toggleButton.style.transform = 'scale(1.1) rotate(180deg)';
    });
    
    toggleButton.addEventListener('mouseleave', () => {
        toggleButton.style.transform = 'scale(1) rotate(0deg)';
    });
    
    document.body.appendChild(toggleButton);
    
    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
    }
}

// 2. Плавная прокрутка к якорям
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 3. Кнопка "Наверх"
function initScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 5rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--accent-color);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: var(--shadow-lg);
        transition: var(--transition);
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1) translateY(-5px)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1) translateY(0)';
    });
    
    document.body.appendChild(scrollButton);
}

// 4. Копирование кода из блоков
function initCodeCopy() {
    document.querySelectorAll('pre').forEach(pre => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        
        const button = document.createElement('button');
        button.innerHTML = '📋 Copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: var(--radius-sm);
            cursor: pointer;
            font-size: 0.875rem;
            transition: var(--transition);
        `;
        
        button.addEventListener('click', async () => {
            const code = pre.querySelector('code')?.textContent || pre.textContent;
            await navigator.clipboard.writeText(code);
            button.innerHTML = '✅ Copied!';
            setTimeout(() => {
                button.innerHTML = '📋 Copy';
            }, 2000);
        });
        
        wrapper.appendChild(button);
    });
}

// 5. Подсветка текущего раздела в навигации
function initActiveNavHighlight() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('aside a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.cssText += `
                background: var(--bg-tertiary);
                color: var(--primary-color);
                border-left-color: var(--primary-color);
                font-weight: 600;
            `;
        }
    });
}

// 6. Поиск по странице (Ctrl+K или Cmd+K)
function initQuickSearch() {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-form input[type="text"]');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });
}

// 7. Таблица содержания (TOC) для длинных статей
function initTableOfContents() {
    const article = document.querySelector('article');
    const headings = article.querySelectorAll('h2, h3');
    
    if (headings.length < 3) return; // Не создавать TOC для коротких статей
    
    const toc = document.createElement('div');
    toc.style.cssText = `
        background: var(--bg-secondary);
        padding: 1.5rem;
        border-radius: var(--radius-md);
        margin-bottom: 2rem;
        border-left: 4px solid var(--primary-color);
    `;
    
    const tocTitle = document.createElement('h3');
    tocTitle.textContent = '📑 Содержание';
    tocTitle.style.marginTop = '0';
    toc.appendChild(tocTitle);
    
    const tocList = document.createElement('ul');
    tocList.style.cssText = 'margin: 0; padding-left: 1.5rem;';
    
    headings.forEach((heading, index) => {
        const id = `section-${index}`;
        heading.id = id;
        
        const li = document.createElement('li');
        li.style.margin = '0.5rem 0';
        
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        a.style.textDecoration = 'none';
        
        if (heading.tagName === 'H3') {
            li.style.paddingLeft = '1rem';
        }
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
    
    toc.appendChild(tocList);
    
    const firstHeading = article.querySelector('h1');
    if (firstHeading && firstHeading.nextElementSibling) {
        firstHeading.parentNode.insertBefore(toc, firstHeading.nextElementSibling);
    }
}

// 8. Индикатор прогресса чтения
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(to right, var(--primary-color), var(--accent-color));
        z-index: 1001;
        transition: width 0.1s ease-out;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
}

// 9. Lazy loading для изображений
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 10. Уведомления о новых обновлениях
function initUpdateNotification() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = new Date().getTime();
    
    if (!lastVisit || (currentTime - parseInt(lastVisit)) > 86400000) { // 24 часа
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 2rem;
            background: linear-gradient(135deg, var(--success-color), #34d399);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-xl);
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
        `;
        
        notification.innerHTML = `
            <strong>✨ Обновления!</strong>
            <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem;">
                Ознакомьтесь с последними изменениями в <a href="/changelog.html" style="color: white; text-decoration: underline;">Changelog</a>
            </p>
            <button onclick="this.parentElement.remove()" style="
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                background: transparent;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1.25rem;
            ">×</button>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 10000);
    }
    
    localStorage.setItem('lastVisit', currentTime.toString());
}

// Инициализация всех функций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initSmoothScroll();
    initScrollToTop();
    initCodeCopy();
    initActiveNavHighlight();
    initQuickSearch();
    initTableOfContents();
    initReadingProgress();
    initLazyLoading();
    initUpdateNotification();
});

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initThemeToggle,
        initSmoothScroll,
        initScrollToTop,
        initCodeCopy,
        initActiveNavHighlight,
        initQuickSearch,
        initTableOfContents,
        initReadingProgress,
        initLazyLoading,
        initUpdateNotification
    };
}
