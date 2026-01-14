/**
 * INTERACTION MANAGER
 * Управление интерактивностью таблицы через делегирование событий
 */

'use strict';

const InteractionManager = {
  container: null,

  /**
   * Подключает обработчики событий
   */
  attachHandlers() {
    this.container = document.querySelector(CONFIG.SELECTORS.CONTAINER);
    if (!this.container) return;
    
    // Используем делегирование событий
    this.container.addEventListener('mouseenter', this.handleMouseEnter.bind(this), true);
    this.container.addEventListener('mouseleave', this.handleMouseLeave.bind(this), true);
  },

  /**
   * Обработчик наведения мыши
   * @param {MouseEvent} e - Событие мыши
   */
  handleMouseEnter(e) {
    const target = e.target;
    
    // Обработка наведения на ячейку строки
    if (target.tagName === 'TD' && target.closest('tbody')) {
      this.highlightRow(target.closest('tr'));
    }
    
    // Обработка наведения на заголовок столбца
    if (target.tagName === 'TH' && target.closest('thead tr:nth-child(2)')) {
      this.highlightColumn(target);
    }
  },

  /**
   * Обработчик ухода мыши
   * @param {MouseEvent} e - Событие мыши
   */
  handleMouseLeave(e) {
    const target = e.target;
    
    if (target.tagName === 'TD' && target.closest('tbody')) {
      this.clearRowHighlight(target.closest('tr'));
    }
    
    if (target.tagName === 'TH' && target.closest('thead tr:nth-child(2)')) {
      this.clearColumnHighlight(target);
    }
  },

  /**
   * Подсвечивает строку и соответствующие заголовки
   * @param {HTMLTableRowElement} row - Строка таблицы
   */
  highlightRow(row) {
    if (!row) return;
    
    row.classList.add(CONFIG.CLASSES.HIGHLIGHT);
    
    // Подсветить заголовки активных столбцов
    const cells = Array.from(row.cells);
    cells.forEach((cell, idx) => {
      if (idx > 0 && this.isActiveCell(cell)) {
        const header = this.getHeaderByIndex(idx - 1);
        if (header) {
          header.classList.add(CONFIG.CLASSES.HIGHLIGHT_COL);
        }
      }
    });
  },

  /**
   * Подсвечивает столбец и соответствующие API
   * @param {HTMLTableCellElement} header - Заголовок столбца
   */
  highlightColumn(header) {
    if (!header) return;
    
    const colIdx = Array.from(header.parentElement.children).indexOf(header);
    header.classList.add(CONFIG.CLASSES.HIGHLIGHT_COL);
    
    // Подсветить ячейки столбца
    const rows = this.container.querySelectorAll(CONFIG.SELECTORS.TBODY_ROWS);
    rows.forEach(row => {
      const cell = row.cells[colIdx + 1];
      if (cell && this.isActiveCell(cell)) {
        cell.classList.add(CONFIG.CLASSES.HIGHLIGHT_CELL);
        row.cells[0].classList.add(CONFIG.CLASSES.HIGHLIGHT_API_NAME);
      }
    });
  },

  /**
   * Проверяет, является ли ячейка активной (LTS или Preview)
   * @param {HTMLTableCellElement} cell - Ячейка таблицы
   * @returns {boolean}
   */
  isActiveCell(cell) {
    return cell.classList.contains(CONFIG.CLASSES.LTS) || 
           cell.classList.contains(CONFIG.CLASSES.PREVIEW);
  },

  /**
   * Получает заголовок столбца по индексу
   * @param {number} idx - Индекс столбца
   * @returns {HTMLTableCellElement|null}
   */
  getHeaderByIndex(idx) {
    const headers = this.container.querySelectorAll(CONFIG.SELECTORS.HEADER_CELLS);
    return headers[idx] || null;
  },

  /**
   * Снимает подсветку со строки
   * @param {HTMLTableRowElement} row - Строка таблицы
   */
  clearRowHighlight(row) {
    if (!row) return;
    
    row.classList.remove(CONFIG.CLASSES.HIGHLIGHT);
    
    const headers = this.container.querySelectorAll(CONFIG.SELECTORS.HEADER_CELLS);
    headers.forEach(h => h.classList.remove(CONFIG.CLASSES.HIGHLIGHT_COL));
  },

  /**
   * Снимает подсветку со столбца
   * @param {HTMLTableCellElement} header - Заголовок столбца
   */
  clearColumnHighlight(header) {
    if (!header) return;
    
    header.classList.remove(CONFIG.CLASSES.HIGHLIGHT_COL);
    
    const rows = this.container.querySelectorAll(CONFIG.SELECTORS.TBODY_ROWS);
    rows.forEach(row => {
      Array.from(row.cells).forEach(cell => {
        cell.classList.remove(CONFIG.CLASSES.HIGHLIGHT_CELL);
        cell.classList.remove(CONFIG.CLASSES.HIGHLIGHT_API_NAME);
      });
    });
  },

  /**
   * Инициализирует sticky заголовки и первый столбец
   */
  initStickyScroll() {
    if (!this.container) return;

    const table = this.container.querySelector('.api-version-graph-table');
    if (!table) return;

    // Apply sticky using transform on scroll
    this.container.addEventListener('scroll', () => {
      const scrollLeft = this.container.scrollLeft;
      const scrollTop = this.container.scrollTop;

      // Fix first column (all cells with class api-name)
      const firstCells = table.querySelectorAll('.api-name');
      firstCells.forEach(cell => {
        cell.style.transform = `translateX(${scrollLeft}px)`;
      });

      // Fix all header cells in both rows
      const headerRow1 = table.querySelectorAll('thead tr:first-child th');
      const headerRow2 = table.querySelectorAll('thead tr:nth-child(2) th');
      
      headerRow1.forEach(cell => {
        if (!cell.classList.contains('api-name') && cell !== table.querySelector('thead tr:first-child th:first-child')) {
          cell.style.transform = `translateY(${scrollTop}px)`;
        }
      });

      headerRow2.forEach(cell => {
        cell.style.transform = `translateY(${scrollTop}px)`;
      });

      // Fix corner cell (first cell in first header row)
      const cornerCell = table.querySelector('thead tr:first-child th:first-child');
      if (cornerCell) {
        cornerCell.style.transform = `translate(${scrollLeft}px, ${scrollTop}px)`;
      }
    });
  }
};
