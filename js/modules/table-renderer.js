/**
 * TABLE RENDERER
 * Оркестрация рендеринга таблицы версий API
 */

'use strict';

const TableRenderer = {
  container: null,

  /**
   * Инициализирует рендерер
   * @param {string} containerSelector - Селектор контейнера
   */
  init(containerSelector) {
    this.container = document.querySelector(containerSelector);
  },

  /**
   * Выполняет рендеринг таблицы
   */
  render() {
    if (!this.container) return;
    
    const filteredApis = FilterManager.applyFilters(
      VersionDataStore.getApiVersions()
    );
    const productVersions = VersionDataStore.getProductVersions();
    const yearGroups = VersionDataStore.getYearGroups();
    
    const table = TableBuilder.createTable();
    table.appendChild(TableBuilder.createHeader(productVersions, yearGroups));
    table.appendChild(TableBuilder.createBody(filteredApis, productVersions));
    
    this.container.innerHTML = '';
    this.container.appendChild(table);
    
    InteractionManager.attachHandlers();
    InteractionManager.initStickyScroll();
  }
};
