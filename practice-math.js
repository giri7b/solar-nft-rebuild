function estimateAnnualKwh(capacityKw, sunHours) {
  return capacityKw * sunHours * 365 * 0.8;
}

module.exports = { estimateAnnualKwh };