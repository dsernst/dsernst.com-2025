// SVG generator for The Wheel of Life graphic

import fs from 'fs'

const segments = [
  { label: 'Career', color: '#F5A623' },
  { label: 'Finances', color: '#E85D4C', labelOffset: { dx: 4 } },
  { label: 'Health', color: '#D946A8' },
  { label: 'Family & Friends', color: '#8E44AD', lines: ['Family &', 'Friends'] },
  { label: 'Love & Romance', color: '#3B5BDB', lines: ['Love &', 'Romance'] },
  { label: 'Personal Growth', color: '#38BDF8', lines: ['Personal', 'Growth'] },
  {
    label: 'Fun & Recreation',
    color: '#14B8A6',
    lines: ['Fun &', 'Recreation'],
    labelOffset: { dx: 5 },
  },
  {
    label: 'Physical Environment',
    color: '#84CC16',
    lines: ['Physical', 'Environment'],
    labelOffset: { dx: -10 },
  },
]

const RINGS = 4
const WHEEL_R = 320
const CENTER_R = 16
const CX = 400
const CY = 468
const VIEW_H = 808
const GAP = 0

function polar(r, deg) {
  const rad = (deg * Math.PI) / 180
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)]
}

function annularSector(r0, r1, startDeg, endDeg) {
  const large = endDeg - startDeg > 180 ? 1 : 0
  const [x0, y0] = polar(r1, startDeg)
  const [x1, y1] = polar(r1, endDeg)
  const [x2, y2] = polar(r0, endDeg)
  const [x3, y3] = polar(r0, startDeg)
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r1} ${r1} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)} A ${r0} ${r0}  0 ${large} 0 ${x3.toFixed(2)} ${y3.toFixed(2)} Z`
}

function mixWithWhite(hex, amount) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const mix = (c) => Math.round(c + (255 - c) * (1 - amount))
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`
}

function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function ringRadius(fraction) {
  return CENTER_R + fraction * (WHEEL_R - CENTER_R)
}

const LABEL_R = ringRadius((RINGS - 1) / RINGS) + (WHEEL_R - ringRadius((RINGS - 1) / RINGS)) * 0.55

const wedgePaths = segments.flatMap((seg, i) => {
  const start = i * 45 - 90 - 22.5 + GAP / 2
  const end = i * 45 - 90 + 22.5 - GAP / 2
  return Array.from({ length: RINGS }, (_, ring) => {
    const r0 = ringRadius(ring / RINGS)
    const r1 = ringRadius((ring + 1) / RINGS)
    const t = (ring + 1) / RINGS
    const fill = mixWithWhite(seg.color, 0.17 + 0.83 * t * t)
    return `<path d="${annularSector(r0, r1, start, end)}" fill="${fill}" />`
  })
})

const ringLines = Array.from({ length: RINGS - 1 }, (_, i) => {
  const r = ringRadius((i + 1) / RINGS)
  return `<circle cx="${CX}" cy="${CY}" r="${r.toFixed(2)}" fill="none" stroke="white" stroke-opacity="0.35" stroke-width="1" />`
})

const dividers = segments.map((_, i) => {
  const angle = i * 45 - 90 - 22.5
  const [x, y] = polar(WHEEL_R, angle)
  return `<line x1="${CX}" y1="${CY}" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}" stroke="white" stroke-width="2.5" />`
})

const labels = segments.map((seg, i) => {
  const angle = i * 45 - 90
  let [x, y] = polar(LABEL_R, angle)
  if (y < CY) {
    const nudge = angle === -90 ? 16 : 12
    const factor = nudge / LABEL_R
    x += (CX - x) * factor
    y += (CY - y) * factor
  }
  if (seg.labelOffset) {
    x += seg.labelOffset.dx ?? 0
    y += seg.labelOffset.dy ?? 0
  }
  const lines = seg.lines ?? [seg.label]
  const fontSize = lines.length > 1 ? 13 : 15
  const yOffset = lines.length > 1 ? -7 : 0
  const tspans = lines
    .map(
      (line, j) => `<tspan x="${x.toFixed(2)}" dy="${j === 0 ? 0 : 14}">${escapeXml(line)}</tspan>`,
    )
    .join('')

  return `<text x="${x.toFixed(2)}" y="${(y + yOffset).toFixed(2)}" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="600">${tspans}</text>`
})

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 ${VIEW_H}" role="img" aria-labelledby="wheel-title wheel-desc">
  <title id="wheel-title">The Wheel of Life</title>
  <desc id="wheel-desc">Eight life categories arranged in a wheel with four concentric scoring rings each.</desc>
  <text x="400" y="72" text-anchor="middle" fill="#E53935" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="700">The Wheel of Life</text>
  <g>
    ${wedgePaths.join('\n    ')}
    ${ringLines.join('\n    ')}
    ${dividers.join('\n    ')}
    <circle cx="${CX}" cy="${CY}" r="${CENTER_R}" fill="white" />
    ${labels.join('\n    ')}
  </g>
</svg>
`

fs.writeFileSync('public/2026-06-19-wheel-of-life.svg', svg)
console.log('Wrote public/2026-06-19-wheel-of-life.svg')
