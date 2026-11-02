'use strict';

const ScheduleRenderer = {
  monthNames: [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
    'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ],
  monthNamesGenitive: [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ],

  render() {
    this.renderHistoricalApiVersions();
    this.renderOverlapTable();
    this.renderReleaseCycles();
    this.renderPreviewTables();
    this.renderLtsTable();
  },

  renderPreviewTables() {
    VersionDataStoreV2.getPreviewFamilyDtos().forEach(family => {
      const selector = `#${family.name.toLowerCase()}-preview-schedule`;
      this.renderPreviewTable(selector, family.name);
    });
  },

  renderHistoricalApiVersions() {
    const rows = VersionDataStore.getApiVersionHistory().map(api => [
      api.name,
      `${api.release}${api.releaseNote || ''}`,
      `${api.removal || ''}${api.removalNote || ''}`
    ]);

    this.renderTable('#historical-api-version-table', ['Версия', 'Выпуск', 'Удаление'], rows);
  },

  renderOverlapTable() {
    const previews = VersionDataStoreV2.getPreviewDtos()
      .filter(preview => !preview.existing)
      .slice(0, 2);
    if (previews.length < 2) return;

    const releaseCount = previews[1].supportThrough.index + 2;
    const releases = VersionDataStoreV2.getMonthlyReleaseDtos().slice(0, releaseCount);
    const rows = previews.map(preview => [
      preview.name,
      ...releases.map(release =>
        release.index >= preview.release.index && release.index <= preview.supportThrough.index
          ? 'Да'
          : '—'
      )
    ]);

    this.renderTable('#preview-overlap', ['Версия API', ...releases.map(release => release.version)], rows);
  },

  renderReleaseCycles() {
    const rows = VersionDataStoreV2.getReleaseCycleDtos().map(cycle => [
      `${cycle.firstRelease.version}–${cycle.lastRelease.version}`,
      `${this.formatMonth(cycle.firstRelease)} — ${this.formatMonth(cycle.lastRelease)}`,
      cycle.ltsVersion ? `Фиксация ${cycle.ltsVersion}` : ''
    ]);

    this.renderTable('#monthly-release-schedule', ['Версии iikoRMS', 'Месяцы выпуска', 'Примечание'], rows);
  },

  renderPreviewTable(selector, familyName) {
    const rows = VersionDataStoreV2.getPreviewDtos()
      .filter(preview => preview.name.startsWith(`${familyName}Preview`))
      .map(preview => [
        preview.name,
        preview.existing
          ? `${this.formatDate(preview.release)} (${preview.release.version})`
          : this.formatMonth(preview.release),
        preview.existing
          ? `${preview.supportedFromVersion}–${preview.supportedThroughVersion}`
          : this.formatMonth(preview.supportThrough)
      ]);

    this.renderTable(selector, [
      'Версия API',
      'Выпуск iikoRMS',
      'Период поддержки iikoRMS'
    ], rows);
  },

  renderLtsTable() {
    const lts = VersionDataStoreV2.getLtsDtos();
    const previousRows = lts.previousLts.map(api => [
      api.name,
      `${this.formatDate(api.releaseDate)} (${api.releaseVersion})`,
      `с выпуска ${api.retirement.apiVersion}: ${this.formatMonth(api.retirement)}`
    ]);
    const currentRows = lts.currentLts.map(api => [
      api.name,
      this.formatMonth(api.release),
      `около четырёх лет, до ${this.formatSupportEnd(api.supportEnd)}`
    ]);

    this.renderTable('#lts-support-schedule', [
      'Версия LTS',
      'Выпуск',
      'Окончание поддержки'
    ], [...previousRows, ...currentRows]);
  },

  renderTable(selector, headers, rows) {
    const container = document.querySelector(selector);
    if (!container) return;

    container.replaceChildren(TableBuilder.createDataTable(headers, rows));
  },

  formatMonth(release) {
    return `${this.monthNames[release.month - 1]} ${release.year} (${release.version})`;
  },

  formatDate(date) {
    return `${date.day} ${this.monthNamesGenitive[date.month - 1]} ${date.year}`;
  },

  formatSupportEnd(release) {
    return `${this.monthNamesGenitive[release.month - 1]} ${release.year} (${release.version})`;
  }
};