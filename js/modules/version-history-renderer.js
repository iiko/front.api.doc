'use strict';

const VersionHistoryRenderer = {
  monthNames: [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
    'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ],
  monthNamesGenitive: [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ],

  render() {
    const rows = VersionDataStoreV2.getApiVersionHistory().map(api => [
      api.name,
      this.formatVersion(api.release, api.releaseDate, api.releaseNote),
      this.formatVersion(api.removal, api.removalDate, api.removalNote)
    ]);
    const container = document.querySelector('#api-version-correspondence-table');
    if (container) {
      container.replaceChildren(TableBuilder.createDataTable(
        ['Версия', 'Выпуск', 'Удаление'],
        rows
      ));
    }
  },

  formatVersion(version, date, note) {
    if (!version) return '';
    const dateLabel = date ? ` (${this.formatDate(date)})` : '';
    return `${version}${dateLabel}${note || ''}`;
  },

  formatDate(date) {
    if (date.day) {
      return `${date.day} ${this.monthNamesGenitive[date.month - 1]} ${date.year}`;
    }
    return `${this.monthNames[date.month - 1]} ${date.year}`;
  }
};