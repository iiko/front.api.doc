/**
 * TABLE BUILDER
 * Построение DOM-структуры таблицы версий API
 */

'use strict';

const TableBuilder = {
  /**
   * Создаёт элемент таблицы
   * @returns {HTMLTableElement}
   */
  createTable() {
    const table = document.createElement('table');
    table.className = CONFIG.CLASSES.TABLE;
    return table;
  },

  /**
   * Создаёт заголовок таблицы
   * @param {Array} productVersions - Версии продукта
   * @param {Array} yearGroups - Группы по годам
   * @returns {HTMLTableSectionElement}
   */
  createHeader(productVersions, yearGroups) {
    const thead = document.createElement('thead');
    thead.appendChild(this.createYearRow(productVersions, yearGroups));
    thead.appendChild(this.createVersionRow(productVersions));
    return thead;
  },

  /**
   * Создаёт строку с годами
   * @param {Array} productVersions - Версии продукта
   * @param {Array} yearGroups - Группы по годам
   * @returns {HTMLTableRowElement}
   */
  createYearRow(productVersions, yearGroups) {
    const tr = document.createElement('tr');
    
    // Первая ячейка с rowspan
    const firstTh = document.createElement('th');
    firstTh.rowSpan = 2;
    firstTh.textContent = 'Версия API';
    tr.appendChild(firstTh);
    
    // Ячейки с годами
    let processedCount = 0;
    productVersions.forEach((pv, idx) => {
      if (processedCount > idx) return;
      
      const yearGroup = yearGroups.find(yg => 
        idx >= yg.startIdx && idx < yg.startIdx + yg.count
      );
      
      if (yearGroup && idx === yearGroup.startIdx) {
        const th = document.createElement('th');
        th.colSpan = yearGroup.count;
        th.className = CONFIG.CLASSES.YEAR_HEADER;
        th.textContent = yearGroup.year;
        tr.appendChild(th);
        processedCount = yearGroup.startIdx + yearGroup.count;
      } else if (!yearGroup && (idx === 0 || productVersions[idx - 1].year !== null)) {
        // Считаем версии без года
        let countNoYear = 0;
        for (let i = idx; i < productVersions.length && productVersions[i].year === null; i++) {
          countNoYear++;
        }
        if (countNoYear > 0) {
          const th = document.createElement('th');
          th.colSpan = countNoYear;
          th.className = CONFIG.CLASSES.YEAR_HEADER;
          th.textContent = '—';
          tr.appendChild(th);
          processedCount = idx + countNoYear;
        }
      }
    });
    
    return tr;
  },

  /**
   * Создаёт строку с версиями продукта
   * @param {Array} productVersions - Версии продукта
   * @returns {HTMLTableRowElement}
   */
  createVersionRow(productVersions) {
    const tr = document.createElement('tr');
    
    productVersions.forEach((pv, idx) => {
      const th = document.createElement('th');
      th.textContent = pv.version;
      
      if (this.isFirstInYear(idx, productVersions)) {
        th.classList.add(CONFIG.CLASSES.YEAR_SEPARATOR);
      }
      
      tr.appendChild(th);
    });
    
    return tr;
  },

  /**
   * Создаёт тело таблицы
   * @param {Array} filteredApis - Отфильтрованные версии API
   * @param {Array} productVersions - Версии продукта
   * @returns {HTMLTableSectionElement}
   */
  createBody(filteredApis, productVersions) {
    const tbody = document.createElement('tbody');
    
    filteredApis.forEach(api => {
      tbody.appendChild(this.createApiRow(api, productVersions));
    });
    
    return tbody;
  },

  /**
   * Создаёт строку для версии API
   * @param {Object} api - Объект версии API
   * @param {Array} productVersions - Версии продукта
   * @returns {HTMLTableRowElement}
   */
  createApiRow(api, productVersions) {
    const tr = document.createElement('tr');
    tr.dataset.api = api.name;
    tr.dataset.type = api.type;
    tr.dataset.actual = api.actual;
    
    // Первая ячейка с названием API
    tr.appendChild(this.createApiNameCell(api.name));
    
    // Ячейки для каждой версии продукта
    productVersions.forEach((pv, idx) => {
      tr.appendChild(this.createVersionCell(api, pv, idx, productVersions));
    });
    
    return tr;
  },

  /**
   * Создаёт ячейку с названием API
   * @param {string} name - Название версии API
   * @returns {HTMLTableCellElement}
   */
  createApiNameCell(name) {
    const td = document.createElement('td');
    td.className = CONFIG.CLASSES.API_NAME;
    td.textContent = name;
    return td;
  },

  /**
   * Создаёт ячейку версии продукта
   * @param {Object} api - Объект версии API
   * @param {Object} productVersion - Версия продукта
   * @param {number} idx - Индекс версии
   * @param {Array} allVersions - Все версии продукта
   * @returns {HTMLTableCellElement}
   */
  createVersionCell(api, productVersion, idx, allVersions) {
    const td = document.createElement('td');
    
    const isActive = VersionDataStore.isVersionInRange(
      productVersion.version, 
      api.from, 
      api.to
    );
    const isDev = VersionDataStore.isDevPeriod(api, productVersion.version);
    
    if (isActive) {
      td.classList.add(api.type);
    } else if (isDev) {
      td.classList.add(CONFIG.CLASSES.LTS_DEV);
    }
    
    if (this.isFirstInYear(idx, allVersions)) {
      td.classList.add(CONFIG.CLASSES.YEAR_SEPARATOR);
    }
    
    return td;
  },

  /**
   * Проверяет, является ли версия первой в своём году
   * @param {number} idx - Индекс версии
   * @param {Array} versions - Массив версий
   * @returns {boolean}
   */
  isFirstInYear(idx, versions) {
    return idx > 0 && 
           versions[idx - 1].year !== null && 
           versions[idx].year !== null && 
           versions[idx - 1].year !== versions[idx].year;
  }
};
