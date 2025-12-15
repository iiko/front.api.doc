/**
 * FILTER MANAGER
 * Управление состоянием фильтров с паттерном Observer
 */

'use strict';

const FilterManager = {
  state: {
    lts: true,
    preview: true
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
      // Фильтр по типу
      if (!this.state.lts && api.type === 'lts') {
        return false;
      }
      if (!this.state.preview && api.type === 'preview') {
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
