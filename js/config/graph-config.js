/**
 * GRAPH CONFIGURATION
 * Конфигурация таблицы версий API
 */

'use strict';

const CONFIG = {
  CLASSES: {
    TABLE: 'api-version-graph-table',
    API_NAME: 'api-name',
    YEAR_HEADER: 'year-header',
    YEAR_SEPARATOR: 'year-separator',
    HIGHLIGHT: 'highlight',
    HIGHLIGHT_COL: 'highlight-col',
    HIGHLIGHT_CELL: 'highlight-cell',
    HIGHLIGHT_API_NAME: 'highlight-api-name',
    LTS: 'lts',
    LTS_DEV: 'lts-dev',
    PREVIEW: 'preview',
    HIDDEN: 'hidden'
  },
  SELECTORS: {
    CONTAINER: '#api-version-graph',
    FILTER_ACTUAL: '#filter-actual',
    FILTER_LTS: '#filter-lts',
    FILTER_PREVIEW: '#filter-preview',
    FILTER_UNRELEASED: '#filter-unreleased',
    TBODY_ROWS: 'tbody tr',
    HEADER_CELLS: 'thead tr:nth-child(2) th'
  },
  Z_INDEX: {
    API_NAME: 5,
    HEADER: 10,
    STICKY_CORNER: 20
  },
  VERSIONS_PER_YEAR: 4
};
