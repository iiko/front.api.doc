/**
 * VERSION DATA STORE
 * Данные о версиях продукта и API
 */

'use strict';

const VersionDataStore = {
  // Данные о версиях продукта (столбцы таблицы)
  // year - год выпуска (по 4 версии в году), null если год неизвестен
  productVersions: [
    { version: '7.0', year: null },
    { version: '7.1', year: null },
    { version: '7.3', year: null },
    { version: '7.4', year: null },
    { version: '7.5', year: 2021 },
    { version: '7.6', year: 2021 },
    { version: '7.7', year: 2021 },
    { version: '7.9', year: 2022 },
    { version: '8.0', year: 2022 },
    { version: '8.1', year: 2022 },
    { version: '8.2', year: 2022 },
    { version: '8.3', year: 2023 },
    { version: '8.4', year: 2023 },
    { version: '8.5', year: 2023 },
    { version: '8.6', year: 2023 },
    { version: '8.7', year: 2024 },
    { version: '8.8', year: 2024 },
    { version: '8.9', year: 2024 },
    { version: '9.0', year: 2024 },
    { version: '9.1', year: 2025 },
    { version: '9.2', year: 2025 },
    { version: '9.3', year: 2025 },
    { version: '9.4', year: 2025 },
    { version: '9.5', year: 2026 },
    { version: '9.6', year: 2026 },
    { version: '9.7', year: 2026 },
    { version: '9.8', year: 2026 },
    { version: '9.9', year: 2027 },
    { version: '10.0', year: 2027 },
    { version: '10.1', year: 2027 },
    { version: '10.2', year: 2027 },
    { version: '10.3', year: 2028 },
    { version: '10.4', year: 2028 },
    { version: '10.5', year: 2028 },
    { version: '10.6', year: 2028 },
    { version: '10.7', year: 2029 },
    { version: '10.8', year: 2029 },
    { version: '10.9', year: 2029 },
    { version: '11.0', year: 2029 },
    { version: '11.1', year: 2030 },
    { version: '11.2', year: 2030 },
    { version: '11.3', year: 2030 },
    { version: '11.4', year: 2030 }
  ],

  // Данные о версиях API (строки таблицы)
  // type: 'lts' или 'preview', from/to: версии продукта начала и конца поддержки
  // devFrom: для LTS - версия начала разработки (2-летний период до выпуска)
  apiVersions: [
    { name: 'V6', type: 'lts', devFrom: null, from: '7.0', to: '9.1' },
    { name: 'V7Preview1', type: 'preview', from: '7.1', to: '7.3' },
    { name: 'V7Preview2', type: 'preview', from: '7.3', to: '7.3' },
    { name: 'V7Preview3', type: 'preview', from: '7.3', to: '7.4' },
    { name: 'V7Preview4', type: 'preview', from: '7.4', to: '7.5' },
    { name: 'V7Preview5', type: 'preview', from: '7.5', to: '7.6' },
    { name: 'V7Preview6', type: 'preview', from: '7.6', to: '7.7' },
    { name: 'V7Preview7', type: 'preview', from: '7.7', to: '8.3' },
    { name: 'V7', type: 'lts', devFrom: '7.0', from: '7.9', to: '9.4' },
    { name: 'V8Preview1', type: 'preview', from: '8.0', to: '8.1' },
    { name: 'V8Preview2', type: 'preview', from: '8.1', to: '8.2' },
    { name: 'V8Preview3', type: 'preview', from: '8.2', to: '8.3' },
    { name: 'V8Preview4', type: 'preview', from: '8.3', to: '8.5' },
    { name: 'V8Preview5', type: 'preview', from: '8.4', to: '8.6' },
    { name: 'V8Preview6', type: 'preview', from: '8.5', to: '8.7' },
    { name: 'V8Preview7', type: 'preview', from: '8.6', to: '8.8' },
    { name: 'V8', type: 'lts', devFrom: '7.9', from: '8.7', to: '10.2' },
    { name: 'V9Preview1', type: 'preview', from: '8.8', to: '9.0' },
    { name: 'V9Preview2', type: 'preview', from: '8.9', to: '9.1' },
    { name: 'V9Preview3', type: 'preview', from: '9.0', to: '9.2' },
    { name: 'V9Preview4', type: 'preview', from: '9.1', to: '9.3' },
    { name: 'V9Preview5', type: 'preview', from: '9.2', to: '9.4' },
    { name: 'V9Preview6', type: 'preview', from: '9.3', to: '9.5' },
    { name: 'V9Preview7', type: 'preview', from: '9.4', to: '9.6' },
    { name: 'V9', type: 'lts', devFrom: '8.7', from: '9.5', to: '11.0' },
    { name: 'V10Preview1', type: 'preview', from: '9.6', to: '9.8' },
    { name: 'V10Preview2', type: 'preview', from: '9.7', to: '9.9' },
    { name: 'V10Preview3', type: 'preview', from: '9.8', to: '10.0' },
    { name: 'V10Preview4', type: 'preview', from: '9.9', to: '10.1' },
    { name: 'V10Preview5', type: 'preview', from: '10.0', to: '10.2' },
    { name: 'V10Preview6', type: 'preview', from: '10.1', to: '10.3' },
    { name: 'V10Preview7', type: 'preview', from: '10.2', to: '10.4' },
    { name: 'V10', type: 'lts', devFrom: '9.5', from: '10.3', to: '11.4' },
    { name: 'V11Preview1', type: 'preview', from: '10.4', to: '10.6' },
    { name: 'V11Preview2', type: 'preview', from: '10.5', to: '10.7' },
    { name: 'V11Preview3', type: 'preview', from: '10.6', to: '10.8' },
    { name: 'V11Preview4', type: 'preview', from: '10.7', to: '10.9' },
    { name: 'V11Preview5', type: 'preview', from: '10.8', to: '11.0' },
    { name: 'V11Preview6', type: 'preview', from: '10.9', to: '11.1' },
    { name: 'V11Preview7', type: 'preview', from: '11.0', to: '11.2' },
    { name: 'V11', type: 'lts', devFrom: '10.3', from: '11.1', to: '11.4' }
  ],

  // Методы доступа к данным
  getProductVersions() {
    return this.productVersions;
  },

  getApiVersions() {
    return this.apiVersions;
  },

  /**
   * Сравнивает две версии семантически
   * @param {string} v1 - Первая версия
   * @param {string} v2 - Вторая версия
   * @returns {number} -1 если v1 < v2, 0 если равны, 1 если v1 > v2
   */
  compareVersions(v1, v2) {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);
    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
      const p1 = parts1[i] || 0;
      const p2 = parts2[i] || 0;
      if (p1 < p2) return -1;
      if (p1 > p2) return 1;
    }
    return 0;
  },

  /**
   * Проверяет, находится ли версия в заданном диапазоне
   * @param {string} version - Проверяемая версия
   * @param {string} from - Начало диапазона
   * @param {string} to - Конец диапазона
   * @returns {boolean}
   */
  isVersionInRange(version, from, to) {
    return this.compareVersions(version, from) >= 0 && 
           this.compareVersions(version, to) <= 0;
  },

  /**
   * Проверяет, является ли версия периодом разработки для LTS
   * @param {Object} api - Объект API версии
   * @param {string} version - Версия продукта
   * @returns {boolean}
   */
  isDevPeriod(api, version) {
    return api.type === 'lts' && 
           api.devFrom && 
           this.compareVersions(version, api.devFrom) >= 0 &&
           this.compareVersions(version, api.from) < 0;
  },

  /**
   * Группирует версии продукта по годам
   * @returns {Array} Массив объектов {year, count, startIdx}
   */
  getYearGroups() {
    const yearGroups = [];
    let currentYear = null;
    let currentCount = 0;
    let currentStartIdx = 0;
    
    this.productVersions.forEach((pv, idx) => {
      if (pv.year !== currentYear) {
        if (currentYear !== null) {
          yearGroups.push({ 
            year: currentYear, 
            count: currentCount, 
            startIdx: currentStartIdx 
          });
        }
        currentYear = pv.year;
        currentCount = 1;
        currentStartIdx = idx;
      } else {
        currentCount++;
      }
    });
    
    if (currentYear !== null) {
      yearGroups.push({ 
        year: currentYear, 
        count: currentCount, 
        startIdx: currentStartIdx 
      });
    }
    
    return yearGroups;
  }
};
