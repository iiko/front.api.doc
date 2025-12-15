/**
 * VERSION GRAPH APPLICATION
 * Главный контроллер приложения
 */

'use strict';

const VersionGraphApp = {
  /**
   * Инициализирует приложение
   */
  init() {
    // Инициализация рендерера
    TableRenderer.init(CONFIG.SELECTORS.CONTAINER);
    
    // Подписка на изменения фильтров
    FilterManager.subscribe(() => {
      TableRenderer.render();
    });
    
    // Привязка фильтров к UI
    this.bindFilters();
    
    // Первичный рендер
    TableRenderer.render();
  },

  /**
   * Привязывает фильтры к элементам управления
   */
  bindFilters() {
    const filters = [
      { selector: CONFIG.SELECTORS.FILTER_LTS, key: 'lts' },
      { selector: CONFIG.SELECTORS.FILTER_PREVIEW, key: 'preview' }
    ];
    
    filters.forEach(({ selector, key }) => {
      const el = document.querySelector(selector);
      if (el) {
        el.addEventListener('change', () => {
          FilterManager.setState(key, el.checked);
        });
      }
    });
  }
};

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  VersionGraphApp.init();
});
