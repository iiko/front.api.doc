/**
 * VERSION DATA STORE
 * Данные для исторического графика версий продукта и API
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
    { version: '9.7', year: 2026 }
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
    { name: 'V8', type: 'lts', devFrom: '7.9', from: '8.7', to: null },
    { name: 'V9Preview1', type: 'preview', from: '8.8', to: '9.0' },
    { name: 'V9Preview2', type: 'preview', from: '8.9', to: '9.1' },
    { name: 'V9Preview3', type: 'preview', from: '9.0', to: '9.2' },
    { name: 'V9Preview4', type: 'preview', from: '9.1', to: '9.3' },
    { name: 'V9Preview5', type: 'preview', from: '9.2', to: '9.4' },
    { name: 'V9Preview6', type: 'preview', from: '9.3', to: '9.6' },
    { name: 'V9Preview7', type: 'preview', from: '9.4', to: '9.6' },
    { name: 'V9', type: 'lts', devFrom: '8.7', from: '9.5', to: null },
    { name: 'V10Preview1', type: 'preview', from: '9.6', to: null },
    { name: 'V10Preview2', type: 'preview', from: '9.7', to: null }
  ],

  apiVersionHistory: [
    { name: 'V1', release: '3.1', removal: '3.8' },
    { name: 'V2', release: '3.3', removal: '4.3' },
    { name: 'V3', release: '3.8', removal: '5.4' },
    { name: 'V4', release: '4.3', removal: '7.0' },
    { name: 'V5', release: '5.4', removal: '8.0' },
    { name: 'V6Preview4', release: '6.4', removal: '7.0', releaseNote: '¹' },
    { name: 'V6Preview5', release: '6.4', removal: '7.1' },
    { name: 'V6', release: '7.0', removal: '9.2', removalNote: '²' },
    { name: 'V7Preview1', release: '7.1', removal: '7.4' },
    { name: 'V7Preview2', release: '7.3.5', removal: '7.4', releaseNote: '³' },
    { name: 'V7Preview3', release: '7.3', removal: '7.5' },
    { name: 'V7Preview4', release: '7.4', removal: '7.6' },
    { name: 'V7Preview5', release: '7.5', removal: '7.7' },
    { name: 'V7Preview6', release: '7.6', removal: '7.9' },
    { name: 'V7Preview7', release: '7.7', removal: '8.5', removalNote: '⁴' },
    { name: 'V7', release: '7.9', removal: '9.5' },
    { name: 'V8Preview1', release: '8.0', removal: '8.2' },
    { name: 'V8Preview2', release: '8.1', removal: '8.3' },
    { name: 'V8Preview3', release: '8.2', removal: '8.4' },
    { name: 'V8Preview4', release: '8.3', removal: '8.6', releaseNote: '⁵' },
    { name: 'V8Preview5', release: '8.4', removal: '8.7' },
    { name: 'V8Preview6', release: '8.5', removal: '8.8' },
    { name: 'V8Preview7', release: '8.6', removal: '8.9' },
    { name: 'V8', release: '8.7', removal: null },
    { name: 'V9Preview1', release: '8.8', removal: '9.1' },
    { name: 'V9Preview2', release: '8.9', removal: '9.2' },
    { name: 'V9Preview3', release: '9.0', removal: '9.3' },
    { name: 'V9Preview4', release: '9.1', removal: '9.4' },
    { name: 'V9Preview5', release: '9.2', removal: '9.5' },
    { name: 'V9Preview6', release: '9.3', removal: '9.7', removalNote: '⁶' },
    { name: 'V9Preview7', release: '9.4', removal: '9.7' },
    { name: 'V9', release: '9.5', removal: null },
    { name: 'V10Preview1', release: '9.6', removal: null },
    { name: 'V10Preview2', release: '9.7', removal: null }
  ],

  // Методы доступа к данным
  getProductVersions() {
    return this.productVersions;
  },

  getApiVersions() {
    const boundaries = VersionDataStoreV2.getHistoricalApiBoundaries();
    return this.apiVersions.map(api => ({
      ...api,
      to: boundaries[api.name]
        ? boundaries[api.name].supportThroughVersion
        : api.to
    }));
  },

  getApiVersionHistory() {
    const boundaries = VersionDataStoreV2.getHistoricalApiBoundaries();
    return this.apiVersionHistory.map(api => ({
      ...api,
      removal: boundaries[api.name]
        ? boundaries[api.name].removalVersion
        : api.removal
    }));
  },

  /**
   * Сравнивает две версии семантически
   * @param {string} v1 - Первая версия
   * @param {string} v2 - Вторая версия
   * @returns {number} -1 если v1 < v2, 0 если равны, 1 если v1 > v2
   */
  compareVersions(v1, v2) {
    return VersionDataUtils.compareVersions(v1, v2);
  },

  /**
   * Проверяет, находится ли версия в заданном диапазоне
   * @param {string} version - Проверяемая версия
   * @param {string} from - Начало диапазона
   * @param {string} to - Конец диапазона
   * @returns {boolean}
   */
  isVersionInRange(version, from, to) {
    return VersionDataUtils.isVersionInRange(version, from, to);
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
    return VersionDataUtils.getYearGroups(this.productVersions);
  }
};
