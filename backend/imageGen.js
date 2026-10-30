function generatePanelSvg({ panelId, city, capacity_kw, estimated_kwh_year }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">
  <rect width="400" height="250" fill="#0f172a" />
  <circle cx="60" cy="55" r="25" fill="#facc15" />
  <text x="110" y="62" fill="white" font-size="22">Solar Panel #${panelId}</text>
  <text x="30" y="120" fill="#94a3b8" font-size="16">City: ${city}</text>
  <text x="30" y="150" fill="#94a3b8" font-size="16">Capacity: ${capacity_kw} kW</text>
  <text x="30" y="180" fill="#94a3b8" font-size="16">Estimated: ${estimated_kwh_year} kWh/year</text>
</svg>`;
}

module.exports = { generatePanelSvg };