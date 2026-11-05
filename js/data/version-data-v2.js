'use strict';

const VersionDataStoreV2 = {
  releasePlan: {
    startYear: 2026,
    startMonth: 11,
    startMajor: 9,
    startMinor: 8,
    endYear: 2030,
    endMonth: 12,
    releasesPerMinor: 6,
    previewSupportReleases: 9,
    previewFamilies: [
      { name: 'V10', firstNumber: 3, firstReleaseIndex: 0 },
      { name: 'V11', firstNumber: 1, firstReleaseIndex: 25 }
    ],
    ltsMilestones: [
      { name: 'V10', releaseIndex: 24 },
      { name: 'V11', releaseIndex: 48 }
    ],
    existingPreviews: [
      {
        name: 'V10Preview1',
        releaseVersion: '9.6',
        releaseDate: { year: 2026, month: 4, day: 9 },
        supportedFromVersion: '9.6',
        supportedThroughVersion: '9.9.1',
        removalVersion: '9.9.1'
      },
      {
        name: 'V10Preview2',
        releaseVersion: '9.7',
        releaseDate: { year: 2026, month: 9, day: 28 },
        supportedFromVersion: '9.7',
        supportedThroughVersion: '9.9.2',
        removalVersion: '9.9.2'
      }
    ],
    previousLts: [
      {
        name: 'V8',
        releaseVersion: '8.7',
        releaseDate: { year: 2024, month: 2, day: 6 },
        retiredAtReleaseIndex: 24
      },
      {
        name: 'V9',
        releaseVersion: '9.5',
        releaseDate: { year: 2026, month: 1, day: 27 },
        retiredAtReleaseIndex: 48
      }
    ],
    ltsSupportMonths: 48
  },

  getReleasePlan() {
    return this.releasePlan;
  },

  getProductVersions() {
    return this.getMonthlyReleaseDtos();
  },

  getYearGroups() {
    return VersionDataUtils.getYearGroups(this.getProductVersions());
  },

  getApiVersions() {
    const previews = this.getPreviewDtos().map(api => ({
      name: api.name,
      type: 'preview',
      from: api.release.version,
      to: api.existing ? api.supportedThroughVersion : api.supportThrough.version
    }));
    const previousLts = this.getLtsDtos().previousLts.map(api => ({
      name: api.name,
      type: 'lts',
      from: api.releaseVersion,
      to: this.createMonthlyReleaseDto(api.retirement.index - 1).version
    }));
    const currentLts = this.getLtsDtos().currentLts.map(api => ({
      name: api.name,
      type: 'lts',
      devFrom: api.devFrom,
      from: api.release.version,
      to: this.createMonthlyReleaseDto(api.supportEnd.index - 1).version
    }));
    const currentGenerations = this.releasePlan.ltsMilestones.flatMap(milestone => [
      ...previews.filter(api => api.name.startsWith(`${milestone.name}Preview`)),
      ...currentLts.filter(api => api.name === milestone.name)
    ]);

    return [...previousLts, ...currentGenerations];
  },

  compareVersions(v1, v2) {
    return VersionDataUtils.compareVersions(v1, v2);
  },

  isVersionInRange(version, from, to) {
    return VersionDataUtils.isVersionInRange(version, from, to);
  },

  isDevPeriod(api, version) {
    return api.type === 'lts' && api.devFrom &&
      this.compareVersions(version, api.devFrom) >= 0 &&
      this.compareVersions(version, api.from) < 0;
  },

  getMonthlyReleaseDtos() {
    return Array.from({ length: this.getReleaseCount() }, (_, index) =>
      this.createMonthlyReleaseDto(index)
    );
  },

  getReleaseCount() {
    const plan = this.releasePlan;
    return (plan.endYear - plan.startYear) * 12 + plan.endMonth - plan.startMonth + 1;
  },

  getPreviewFamilyDtos() {
    return this.releasePlan.previewFamilies.map(family => {
      const milestone = this.releasePlan.ltsMilestones.find(item => item.name === family.name);
      const lastReleaseIndex = milestone
        ? milestone.releaseIndex - 1
        : this.getReleaseCount() - 1;

      return {
        ...family,
        previewCount: lastReleaseIndex - family.firstReleaseIndex + 1
      };
    });
  },

  getPreviewDtos() {
    const plan = this.releasePlan;
    const previews = plan.existingPreviews.map(api => ({
      name: api.name,
      existing: true,
      release: {
        version: api.releaseVersion,
        year: api.releaseDate.year,
        month: api.releaseDate.month,
        day: api.releaseDate.day
      },
      supportedFromVersion: api.supportedFromVersion,
      supportedThroughVersion: api.supportedThroughVersion
    }));

    this.getPreviewFamilyDtos().forEach(family => {
      for (let index = family.firstReleaseIndex; index < family.firstReleaseIndex + family.previewCount; index++) {
        const release = this.createMonthlyReleaseDto(index);
        const supportThrough = this.createMonthlyReleaseDto(
          index + plan.previewSupportReleases - 1
        );

        previews.push({
          name: release.apiVersion,
          existing: false,
          release,
          supportThrough
        });
      }
    });

    return previews;
  },

  getReleaseCycleDtos() {
    const cycles = [];

    this.getMonthlyReleaseDtos().forEach(release => {
      const baseVersion = release.version.split('.').slice(0, 2).join('.');
      let cycle = cycles[cycles.length - 1];

      if (!cycle || cycle.baseVersion !== baseVersion) {
        cycle = {
          baseVersion,
          firstRelease: release,
          lastRelease: release,
          ltsVersion: null
        };
        cycles.push(cycle);
      }

      cycle.lastRelease = release;
      if (release.releaseType === 'lts') {
        cycle.ltsVersion = release.apiVersion;
      }
    });

    return cycles;
  },

  getLtsDtos() {
    const plan = this.releasePlan;
    const previousLts = plan.previousLts.map(api => {
      const retirement = this.createMonthlyReleaseDto(api.retiredAtReleaseIndex);
      return {
        name: api.name,
        releaseVersion: api.releaseVersion,
        releaseDate: api.releaseDate,
        devFrom: null,
        retirement
      };
    });
    const currentLts = plan.ltsMilestones.map(api => {
      const release = this.createMonthlyReleaseDto(api.releaseIndex);
      const previousMilestone = plan.ltsMilestones
        .filter(item => item.releaseIndex < api.releaseIndex)
        .pop();
      const previousStable = previousMilestone
        ? this.createMonthlyReleaseDto(previousMilestone.releaseIndex)
        : plan.previousLts[plan.previousLts.length - 1];
      const supportThrough = this.createMonthlyReleaseDto(
        api.releaseIndex + plan.ltsSupportMonths - 1
      );
      const supportEnd = this.createMonthlyReleaseDto(
        api.releaseIndex + plan.ltsSupportMonths
      );
      return {
        name: api.name,
        devFrom: previousStable.version || previousStable.releaseVersion,
        release,
        supportThrough,
        supportEnd
      };
    });

    return { previousLts, currentLts };
  },

  getHistoricalApiBoundaries() {
    const boundaries = {};
    const lts = this.getLtsDtos();

    lts.previousLts.forEach(api => {
      const lastSupported = this.createMonthlyReleaseDto(api.retirement.index - 1);
      boundaries[api.name] = {
        supportThroughVersion: lastSupported.version,
        removalVersion: api.retirement.version,
        removalDate: api.retirement
      };
    });
    this.releasePlan.existingPreviews.forEach(api => {
      const removalDate = this.firstReleaseInMinor(api.removalVersion);
      boundaries[api.name] = {
        supportThroughVersion: api.supportedThroughVersion,
        removalVersion: api.removalVersion,
        removalDate
      };
    });

    return boundaries;
  },

  getApiVersionHistory() {
    const boundaries = this.getHistoricalApiBoundaries();
    const knownApis = [...this.releasePlan.previousLts, ...this.releasePlan.existingPreviews];
    const historical = VersionDataStore.getApiVersionHistory().map(api => {
      const knownApi = knownApis.find(item => item.name === api.name);
      return {
        ...api,
        releaseDate: knownApi?.releaseDate,
        removalDate: boundaries[api.name]?.removalDate
      };
    });
    const futurePreviews = this.getPreviewDtos()
      .filter(api => !api.existing)
      .map(api => {
        const removal = this.createMonthlyReleaseDto(api.supportThrough.index + 1);
        return {
          name: api.name,
          release: api.release.version,
          removal: removal.version,
          releaseDate: api.release,
          removalDate: removal
        };
      });
    const futureLts = this.getLtsDtos().currentLts.map(api => ({
      name: api.name,
      release: api.release.version,
      removal: api.supportEnd.version,
      releaseDate: api.release,
      removalDate: api.supportEnd
    }));
    const futureByApiGeneration = this.releasePlan.ltsMilestones.flatMap(milestone => [
      ...futurePreviews.filter(api => api.name.startsWith(`${milestone.name}Preview`)),
      ...futureLts.filter(api => api.name === milestone.name)
    ]);

    return [
      ...historical,
      { kind: 'separator', label: 'Новая схема релизов' },
      ...futureByApiGeneration
    ];
  },

  firstReleaseInMinor(version) {
    const [major, minor] = version.split('.');
    return this.getMonthlyReleaseDtos().find(release => {
      const parts = release.version.split('.');
      return parts[0] === major && parts[1] === minor;
    }) || null;
  },

  createMonthlyReleaseDto(index) {
    const plan = this.releasePlan;
    const totalMonths = plan.startMonth - 1 + index;
    const year = plan.startYear + Math.floor(totalMonths / 12);
    const month = (totalMonths % 12) + 1;
    const minorSequence = plan.startMinor + Math.floor(index / plan.releasesPerMinor);
    const major = plan.startMajor + Math.floor(minorSequence / 10);
    const minor = minorSequence % 10;
    const patch = (index % plan.releasesPerMinor) + 1;
    const milestone = plan.ltsMilestones.find(item => item.releaseIndex === index);
    const previewFamily = this.getPreviewFamilyDtos().find(item =>
      index >= item.firstReleaseIndex && index < item.firstReleaseIndex + item.previewCount
    );
    let apiVersion = null;
    let releaseType = 'preview';

    if (milestone) {
      apiVersion = milestone.name;
      releaseType = 'lts';
    } else if (previewFamily) {
      apiVersion = `${previewFamily.name}Preview${previewFamily.firstNumber + index - previewFamily.firstReleaseIndex}`;
    } else {
      const latestMilestone = plan.ltsMilestones
        .filter(item => item.releaseIndex < index)
        .pop();
      if (latestMilestone) {
        apiVersion = latestMilestone.name;
        releaseType = 'lts';
      }
    }

    return {
      index,
      version: `${major}.${minor}.${patch}`,
      year,
      month,
      apiVersion,
      releaseType
    };
  }
};