const PERFORMANCE_RATIO = 0.8;

function estimateAnnualKwh(capacityKw, peakSunHoursPerDay) {
  return capacityKw * peakSunHoursPerDay * 365 * PERFORMANCE_RATIO;
}

module.exports = { estimateAnnualKwh };