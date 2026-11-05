/**
 * TABLE RENDERER
 * Оркестрация рендеринга таблицы версий API
 */

'use strict';

const TableRenderer = {
  tables: [],

  /**
   * Инициализирует рендерер
   * @param {string} containerSelector - Селектор контейнера
   */
  init(containerSelector, versionDataStore = VersionDataStore) {
    this.tables = [{ containerSelector, versionDataStore }];
  },

  register(containerSelector, versionDataStore) {
    this.tables.push({ containerSelector, versionDataStore });
  },

  /**
   * Выполняет рендеринг таблицы
   */
  render() {
    this.tables.forEach(({ containerSelector, versionDataStore }) => {
      const container = document.querySelector(containerSelector);
      if (!container) return;

      const filteredApis = FilterManager.applyFilters(versionDataStore.getApiVersions());
      const productVersions = versionDataStore.getProductVersions();
      const yearGroups = versionDataStore.getYearGroups();
      const table = TableBuilder.createTable();
      table.appendChild(TableBuilder.createHeader(productVersions, yearGroups));
      table.appendChild(TableBuilder.createBody(filteredApis, productVersions, versionDataStore));

      container.replaceChildren(table);
      InteractionManager.attachHandlers(container);
      InteractionManager.initStickyScroll(container);
    });
  }
};
