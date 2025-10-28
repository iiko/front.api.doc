/**
 * FILTER MANAGER
 * Управление состоянием фильтров с паттерном Observer
 */

'use strict';

const FilterManager = {
  state: {
    actual: true,
    lts: true,
    preview: true,
    unreleased: true
  },

  listeners: [],

  /**
   * Устанавливает значение фильтра и уведомляет подписчиков
   * @param {string} key - Ключ фильтра
   * @param {boolean} value - Новое значение
   */
  setState(key, value) {
    this.state[key] = value;
    this.notify();
  },

  /**
   * Возвращает копию текущего состояния фильтров
   * @returns {Object}
   */
  getState() {
    return { ...this.state };
  },

  /**
   * Применяет фильтры к массиву версий API
   * @param {Array} apiVersions - Массив версий API
   * @returns {Array} Отфильтрованный массив
   */
  applyFilters(apiVersions) {
    return apiVersions.filter(api => {
      // Фильтр по актуальности
      if (this.state.actual && !api.actual) {
        return false;
      }
      
      // Фильтр по типу
      if (!this.state.lts && api.type === 'lts') {
        return false;
      }
      if (!this.state.preview && api.type === 'preview') {
        return false;
      }
      
      // Фильтр по статусу выпуска
      if (!this.state.unreleased && !api.released) {
        return false;
      }
      
      return true;
    });
  },

  /**
   * Уведомляет всех подписчиков об изменении состояния
   */
  notify() {
    this.listeners.forEach(fn => fn(this.state));
  },

  /**
   * Подписывается на изменения состояния фильтров
   * @param {Function} fn - Функция-обработчик
   */
  subscribe(fn) {
    this.listeners.push(fn);
  }
};
