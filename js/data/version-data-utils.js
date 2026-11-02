'use strict';

const VersionDataUtils = {
  compareVersions(v1, v2) {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);
    for (let index = 0; index < Math.max(parts1.length, parts2.length); index++) {
      const part1 = parts1[index] || 0;
      const part2 = parts2[index] || 0;
      if (part1 < part2) return -1;
      if (part1 > part2) return 1;
    }
    return 0;
  },

  isVersionInRange(version, from, to) {
    return this.compareVersions(version, from) >= 0 &&
      this.compareVersions(version, to) <= 0;
  },

  getYearGroups(productVersions) {
    const groups = [];

    productVersions.forEach((productVersion, startIdx) => {
      if (startIdx > 0 && productVersions[startIdx - 1].year === productVersion.year) return;

      let count = 1;
      while (productVersions[startIdx + count]?.year === productVersion.year) count++;
      groups.push({ year: productVersion.year, count, startIdx });
    });

    return groups;
  }
};