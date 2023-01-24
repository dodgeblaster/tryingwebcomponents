/**
 * this function writes content to a .css file in the same folder
 */
let cssContent = `/* RESET */
*,
*::before,
*::after {
    box-sizing: border-box;
}
* {
    margin: 0;
    padding: 0;
    border: 0 solid transparent;
}
html:focus-within {
    scroll-behavior: smooth;
}
body {
    min-height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
}
audio,
canvas,
embed,
iframe,
img,
object,
picture,
svg,
video {
    display: block;
    max-width: 100%;
}
button,
input,
select,
textarea {
    line-height: inherit;
    color: inherit;
}
a {
    cursor: pointer;
    color: inherit;
    text-decoration: inherit;
}
a:not([class]) {
    text-decoration-skip-ink: auto;
}
button,
[role='button'] {
    cursor: pointer;
    background-color: transparent;
}
code {
    font: inherit;
    font-size: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}
ul[role='list'],
ol[role='list'] {
    list-style: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
textarea {
    vertical-align: top;
    overflow: auto;
}
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}`

function writeCSS(content) {
    var fs = require('fs')
    fs.writeFile('style.css', content, function (err) {
        if (err) throw err
        console.log("It's saved!")
    })
}

/**
 * Spacing
 */
const sizes = [
    '0.125',
    '0.25',
    '0.5',
    '0.75',
    '1',
    '1.25',
    '1.5',
    '1.75',
    '2',
    '2.25',
    '2.5',
    '2.75',
    '3'
]

let px = ''
sizes.forEach((x, i) => {
    if (i === 0) {
        px += `.px-0\\.5 { padding-left: ${x}rem; padding-right: ${x}rem; }
.py-0\\.5 { padding-top: ${x}rem; padding-bottom: ${x}rem; }
.pr-0\\.5 { padding-right: ${x}rem;}
.pl-0\\.5 { padding-left: ${x}rem;}
.pt-0\\.5 { padding-top: ${x}rem;}
.pb-0\\.5 { padding-bottom: ${x}rem;}
.mx-0\\.5 { margin-left: ${x}rem; margin-right: ${x}rem; }
.my-0\\.5 { margin-top: ${x}rem; margin-bottom: ${x}rem; }
.mr-0\\.5 { margin-right: ${x}rem;}
.ml-0\\.5 { margin-left: ${x}rem;}
.mt-0\\.5 { margin-top: ${x}rem;}
.mb-0\\.5 { margin-bottom: ${x}rem;}
`
    } else {
        px += `.px-${i} { padding-left: ${x}rem; padding-right: ${x}rem;}
.py-${i} { padding-top: ${x}rem; padding-bottom: ${x}rem; }
.pr-${i} { padding-right: ${x}rem;}
.pl-${i} { padding-left: ${x}rem;}
.pt-${i} { padding-top: ${x}rem;}
.pb-${i} { padding-bottom: ${x}rem;}
.mx-${i} { margin-left: ${x}rem; margin-right: ${x}rem; }
.my-${i} { margin-top: ${x}rem; margin-bottom: ${x}rem; }
.mr-${i} { margin-right: ${x}rem;}
.ml-${i} { margin-left: ${x}rem;}
.mt-${i} { margin-top: ${x}rem;}
.mb-${i} { margin-bottom: ${x}rem;}
`
    }
})
cssContent += px

const color_slate = [
    '#f8fafc',
    '#f1f5f9',
    '#e2e8f0',
    '#cbd5e1',
    '#94a3b8',
    '#64748b',
    '#475569',
    '#334155',
    '#1e293b',
    '#0f172a'
]

const color_gray = [
    '#f9fafb',
    '#f3f4f6',
    '#e5e7eb',
    '#d1d5db',
    '#9ca3af',
    '#6b7280',
    '#4b5563',
    '#374151',
    '#1f2937',
    '#111827'
]

const color_zinc = [
    '#fafafa',
    '#f4f4f5',
    '#e4e4e7',
    '#d4d4d8',
    '#a1a1aa',
    '#71717a',
    '#52525b',
    '#3f3f46',
    '#27272a',
    '#18181b'
]

const color_neutral = [
    '#fafafa',
    '#f5f5f5',
    '#e5e5e5',
    '#d4d4d4',
    '#a3a3a3',
    '#737373',
    '#525252',
    '#404040',
    '#262626',
    '#171717'
]

const color_stone = [
    '#fafaf9',
    '#f5f5f4',
    '#e7e5e4',
    '#d6d3d1',
    '#a8a29e',
    '#78716c',
    '#57534e',
    '#44403c',
    '#292524',
    '#1c1917'
]

const color_red = [
    '#fef2f2',
    '#fee2e2',
    '#fecaca',
    '#fca5a5',
    '#f87171',
    '#ef4444',
    '#dc2626',
    '#b91c1c',
    '#991b1b',
    '#7f1d1d'
]

const color_orange = [
    '#fff7ed',
    '#ffedd5',
    '#fed7aa',
    '#fdba74',
    '#fb923c',
    '#f97316',
    '#ea580c',
    '#c2410c',
    '#9a3412',
    '#7c2d12'
]

const color_amber = [
    '#fffbeb',
    '#fef3c7',
    '#fde68a',
    '#fcd34d',
    '#fbbf24',
    '#f59e0b',
    '#d97706',
    '#b45309',
    '#92400e',
    '#78350f'
]

const color_yellow = [
    '#fefce8',
    '#fef9c3',
    '#fef08a',
    '#fde047',
    '#facc15',
    '#eab308',
    '#ca8a04',
    '#a16207',
    '#854d0e',
    '#713f12'
]

const color_lime = [
    '#f7fee7',
    '#ecfccb',
    '#d9f99d',
    '#bef264',
    '#a3e635',
    '#84cc16',
    '#65a30d',
    '#4d7c0f',
    '#3f6212',
    '#365314'
]

const color_green = [
    '#f0fdf4',
    '#dcfce7',
    '#bbf7d0',
    '#86efac',
    '#4ade80',
    '#22c55e',
    '#16a34a',
    '#15803d',
    '#166534',
    '#14532d'
]

const color_emerald = [
    '#ecfdf5',
    '#d1fae5',
    '#a7f3d0',
    '#6ee7b7',
    '#34d399',
    '#10b981',
    '#059669',
    '#047857',
    '#065f46',
    '#064e3b'
]

const color_teal = [
    '#f0fdfa',
    '#ccfbf1',
    '#99f6e4',
    '#5eead4',
    '#2dd4bf',
    '#14b8a6',
    '#0d9488',
    '#0f766e',
    '#115e59',
    '#134e4a'
]

const color_cyan = [
    '#ecfeff',
    '#cffafe',
    '#a5f3fc',
    '#67e8f9',
    '#22d3ee',
    '#06b6d4',
    '#0891b2',
    '#0e7490',
    '#155e75',
    '#164e63'
]

const color_sky = [
    '#f0f9ff',
    '#e0f2fe',
    '#bae6fd',
    '#7dd3fc',
    '#38bdf8',
    '#0ea5e9',
    '#0284c7',
    '#0369a1',
    '#075985',
    '#0c4a6e'
]

const color_blue = [
    '#eff6ff',
    '#dbeafe',
    '#bfdbfe',
    '#93c5fd',
    '#60a5fa',
    '#3b82f6',
    '#2563eb',
    '#1d4ed8',
    '#1e40af',
    '#1e3a8a'
]

const color_indigo = [
    '#eef2ff',
    '#e0e7ff',
    '#c7d2fe',
    '#a5b4fc',
    '#818cf8',
    '#6366f1',
    '#4f46e5',
    '#4338ca',
    '#3730a3',
    '#312e81'
]

const color_violet = [
    '#f5f3ff',
    '#ede9fe',
    '#ddd6fe',
    '#c4b5fd',
    '#a78bfa',
    '#8b5cf6',
    '#7c3aed',
    '#6d28d9',
    '#5b21b6',
    '#4c1d95'
]

const color_purple = [
    '#faf5ff',
    '#f3e8ff',
    '#e9d5ff',
    '#d8b4fe',
    '#c084fc',
    '#a855f7',
    '#9333ea',
    '#7e22ce',
    '#6b21a8',
    '#581c87'
]

const color_fuchsia = [
    '#fdf4ff',
    '#fae8ff',
    '#f5d0fe',
    '#f0abfc',
    '#e879f9',
    '#d946ef',
    '#c026d3',
    '#a21caf',
    '#86198f',
    '#701a75'
]

const color_pink = [
    '#fdf2f8',
    '#fce7f3',
    '#fbcfe8',
    '#f9a8d4',
    '#f472b6',
    '#ec4899',
    '#db2777',
    '#be185d',
    '#9d174d',
    '#831843'
]

const color_rose = [
    '#fff1f2',
    '#ffe4e6',
    '#fecdd3',
    '#fda4af',
    '#fb7185',
    '#f43f5e',
    '#e11d48',
    '#be123c',
    '#9f1239',
    '#881337'
]

const color_levels = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
]

const colors = {
    color_amber,
    color_blue,
    color_cyan,
    color_emerald,
    color_fuchsia,
    color_gray,
    color_green,
    color_indigo,
    color_lime,
    color_neutral,
    color_orange,
    color_pink,
    color_purple,
    color_red,
    color_rose,
    color_sky,
    color_slate,
    color_stone,
    color_teal,
    color_violet,
    color_yellow,
    color_zinc
}

let gradientToString = ''
const makeColorClasses = (name, level, color) => {
    if (!level) {
        gradientToString += `.to-${name} {
    --gj-gradient-to: ${color};
}`
        return `
.bg-${name} { background-color: ${color}; }
.text-${name} { color: ${color}; }
.border-${name} { border-color: ${color}; }
.from-${name} {
    --gj-gradient-from: ${color};
    --gj-gradient-to: rgb(248 113 113 / 0);
    --gj-gradient-stops: var(--gj-gradient-from), var(--gj-gradient-to);
}
.divide-${name} > :not([hidden]) ~ :not([hidden]) {
  border-color: ${color};
}
.outline-${name} {
  outline-color: ${color};
}
.ring-${name}  {
  --gj-ring-color: ${color};
}
.shadow-${name} {
  --tw-shadow-color: ${color};
  --tw-shadow: var(--tw-shadow-colored);
}
`
    }

    gradientToString += `.to-${name}-${level} {
    --gj-gradient-to: ${color};
}`
    return `
.bg-${name}-${level} { background-color: ${color}; }
.text-${name}-${level} { color: ${color}; }
.border-${name}-${level} { border-color: ${color}; }
.from-${name}-${level}{
    --gj-gradient-from: ${color};
    --gj-gradient-to: rgb(248 113 113 / 0);
    --gj-gradient-stops: var(--gj-gradient-from), var(--gj-gradient-to);
}

.divide-${name}-${level} > :not([hidden]) ~ :not([hidden]) {
  border-color: ${color};
}
.outline-${name}-${level} {
  outline-color: ${color};
}
.ring-${name}-${level}  {
  --gj-ring-color: ${color};
}
.shadow-${name}-${level} {
  --tw-shadow-color: ${color};
  --tw-shadow: var(--tw-shadow-colored);
}
`
}

let colorcss = ''
Object.keys(colors).forEach((k) => {
    const name = k.replace('color_', '')
    colors[k].forEach((color, i) => {
        const res = makeColorClasses(name, color_levels[i], color)
        colorcss += res
    })
})
cssContent += colorcss
cssContent += gradientToString
cssContent += makeColorClasses('white', false, '#ffffff')
cssContent += makeColorClasses('black', false, '#000000')

cssContent += `
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--gj-gradient-stops));
}
.bg-gradient-to-t {
  background-image: linear-gradient(to top, var(--gj-gradient-stops));
}
.bg-gradient-to-tr {
  background-image: linear-gradient(to top right, var(--gj-gradient-stops));
}
.bg-gradient-to-tl {
  background-image: linear-gradient(to top left, var(--gj-gradient-stops));
}
.bg-gradient-to-l {
  background-image: linear-gradient(to left, var(--gj-gradient-stops));
}
.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--gj-gradient-stops));
}
.bg-gradient-to-bl {
  background-image: linear-gradient(to bottom left, var(--gj-gradient-stops));
}
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--gj-gradient-stops));
}

`

const layout = `
.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }
.container-xl { max-width: 1280px; }
.container-2xl { max-width: 1536px; }
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.grid { display: grid; }
.inline-grid { display: inline-grid; }

.object-fill { object-fit: fill ; }
.object-contain { object-fit: contain; }
.object-cover { object-fit: cover; }

.overflow-hidden { overflow: hidden; }
.overflow-visible { overflow: visible; }
.overflow-scroll { overflow: scroll; }
.overflow-auto { overflow: auto; }
.overflow-x-hidden { overflow-x: hidden; }
.overflow-x-visible { overflow-x: visible; }
.overflow-x-scroll { overflow-x: scroll; }
.overflow-x-auto { overflow-x: auto; }
.overflow-y-hidden { overflow-y: hidden; }
.overflow-y-visible { overflow-y: visible; }
.overflow-y-scroll { overflow-y: scroll; }

.static { position: static; }
.fixed { position: fixed; }
.absolute { position: absolute; }
.relative { position: relative; }
.sticky { position: sticky; }
.top-0 { top: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }
.z-0 { z-index: 0; }
.z-10 { z-index: 10; }
.z-20 { z-index: 20; }
.z-30 { z-index: 30; }
.z-40 { z-index: 40; }
.z-50 { z-index: 50; }
.z-auto { z-index: auto; }

.top-0.\\5 {top: 0.125rem;}
.right-0.\\5 {right: 0.125rem;}
.bottom-0.\\5 {bottom: 0.125rem;}
.left-0.\\5 {left: 0.125rem;}

.top-1 {top: 0.25rem;}
.right-1 {right: 0.25rem;}
.bottom-1 {bottom: 0.25rem;}
.left-1 {left: 0.25rem;}

.top-2 {top: 0.5rem;}
.right-2 {right: 0.5rem;}
.bottom-2 {bottom: 0.5rem;}
.left-2 {left: 0.5rem;}

.top-3 {top: 0.75rem;}
.right-3 {right: 0.75rem;}
.bottom-3 {bottom: 0.75rem;}
.left-3 {left: 0.75rem;}

.top-4 {top: 1rem;}
.right-4 {right: 1rem;}
.bottom-4 {bottom: 1rem;}
.left-4 {left: 1rem;}

.top-5 {top: 1.25rem;}
.right-5 {right: 1.25rem;}
.bottom-5 {bottom: 1.25rem;}
.left-5 {left: 1.25rem;}

.top-6 {top: 1.5rem;}
.right-6 {right: 1.5rem;}
.bottom-6 {bottom: 1.5rem;}
.left-6 {left: 1.5rem;}

.top-7 {top: 1.75rem;}
.right-7 {right: 1.75rem;}
.bottom-7 {bottom: 1.75rem;}
.left-7 {left: 1.75rem;}

.top-8 {top: 2rem;}
.right-8 {right: 2rem;}
.bottom-8 {bottom: 2rem;}
.left-8 {left: 2rem;}

.top-9 {top: 2.25rem;}
.right-9 {right: 2.25rem;}
.bottom-9 {bottom: 2.25rem;}
.left-9 {left: 2.25rem;}

.top-10 {top: 2.5rem;}
.right-10 {right: 2.5rem;}
.bottom-10 {bottom: 2.5rem;}
.left-10 {left: 2.5rem;}

.top-11 {top: 2.75rem;}
.right-11 {right: 2.75rem;}
.bottom-11 {bottom: 2.75rem;}
.left-11 {left: 2.75rem;}

.top-12 {top: 3rem;}
.right-12 {right: 3rem;}
.bottom-12 {bottom: 3rem;}
.left-12 {left: 3rem;}
`
cssContent += layout

const flexgrid = `
.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col { flex-direction: column; }
.flex-col-reverse { flex-direction: column-reverse; }
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }
.flex-1 { flex: 1; }
.flex-auto { flex: auto; }
.flex-initial { flex: initial; }
.flex-none { flex: none; }
.grow-0 { flex-grow: 0; }
.grow { flex-grow: 1; }
.shrink-0 { flex-shrink: 0; }
.shrink { flex-shrink: 1; }
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
`
cssContent += flexgrid

const spacing = `
.space-x-0\\.5 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 0.125rem; }
.space-x-1 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 0.25rem; }
.space-x-1\\.5 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 0.375rem; }
.space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 0.5rem; }
.space-x-2\\.5 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 0.625rem; }
.space-x-3 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 0.75rem; }
.space-x-3\\.5 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 0.875rem; }
.space-x-4 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 1rem; }
.space-x-5 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 1.25rem; }
.space-x-6 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 1.5rem; }
.space-x-7 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 1.75rem; }
.space-x-8 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 2rem; }
.space-x-9 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 2.25rem; }
.space-x-10 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 2.5rem; }
.space-x-11 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 2.75rem; }
.space-x-12 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; margin-right: 3rem; }
.space-y-0\\.5 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 0.125rem; }
.space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 0.25rem; }
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 0.375rem; }
.space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 0.5rem; }
.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 0.625rem; }
.space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 0.75rem; }
.space-y-3\\.5 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 0.875rem; }
.space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 1rem; }
.space-y-5 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 1.25rem; }
.space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 1.5rem; }
.space-y-7 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 1.75rem; }
.space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 2rem; }
.space-y-9 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 2.25rem; }
.space-y-10 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 2.5rem; }
.space-y-11 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 2.75rem; }
.space-y-12 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.125rem; margin-bottom: 3rem; }
`
cssContent += spacing

const sizing = `
.h-0 { height: 0; }
.h-full { height: 100%; }
.h-screen { height: 100vh; }
.min-h-0 { min-height: 0; }
.min-h-full { min-height: 100%; }
.min-h-screen { min-height: 100vh; }
.max-h-0 { max-height: 0; }
.max-h-full { max-height: 100%; }
.max-h-screen { max-height: 100vh; }
.w-0 { width: 0; }
.w-full { width: 100%; }
.w-screen { width: 100vw; }
.min-w-0 { min-width: 0; }
.min-w-full { min-width: 100%; }
.min-w-screen { min-width: 100vw; }
.max-w-0 { max-width: 0; }
.max-w-full { max-width: 100%; }
.max-w-screen { max-width: 100vw; }

.w-px  { width: 1px; }
.h-px  { height: 1px; }
.w-0\\.5 { width: 0.125rem; }
.h-0\\.5 { height: 0.125rem; }
.w-1  { width: 0.25rem; }
.h-1  { height: 0.25rem; }
.w-1\\.5 { width: 0.375rem; }
.h-1\\.5 { height: 0.375rem; }
.w-2  { width: 0.5rem; }
.h-2  { height: 0.5rem; }
.w-2\\.5 { width: 0.625rem; }
.h-2\\.5 { height: 0.625rem; }
.w-3  { width: 0.75rem; }
.h-3  { height: 0.75rem; }
.w-3\\.5 { width: 0.875rem; }
.h-3\\.5 { height: 0.875rem; }
.w-4  { width: 1rem; }
.h-4  { height: 1rem; }
.w-5  { width: 1.25rem; }
.h-5  { height: 1.25rem; }
.w-6  { width: 1.5rem; }
.h-6  { height: 1.5rem; }
.w-7  { width: 1.75rem; }
.h-7  { height: 1.75rem; }
.w-8  { width: 2rem; }
.h-8  { height: 2rem; }
.w-9  { width: 2.25rem; }
.h-9  { height: 2.25rem; }
.w-10 { width: 2.5rem; }
.h-10 { height: 2.5rem; }
.w-11 { width: 2.75rem; }
.h-11 { height: 2.75rem; }
.w-12 { width: 3rem; }
.h-12 { height: 3rem; }
.w-14 { width: 3.5rem; }
.h-14 { height: 3.5rem; }
.w-16 { width: 4rem; }
.h-16 { height: 4rem; }
.w-20 { width: 5rem; }
.h-20 { height: 5rem; }
.w-24 { width: 6rem; }
.h-24 { height: 6rem; }
.w-32 { width: 8rem; }
.h-32 { height: 8rem; }
.w-40 { width: 10rem; }
.h-40 { height: 10rem; }
.w-48 { width: 12rem; }
.h-48 { height: 12rem; }
.w-56 { width: 14rem; }
.h-56 { height: 14rem; }
.w-64 { width: 16rem; }
.h-64 { height: 16rem; }
.w-72 { width: 18rem; }
.h-72 { height: 18rem; }
.w-80 { width: 20rem; }
.h-80 { height: 20rem; }
.w-96 { width: 24rem; }
.h-96 { height: 24rem; }
`
cssContent += sizing

const typography = `
.text-xs { font-size: 0.75rem; line-height: 1rem;}
.text-sm { font-size: 0.875rem; line-height: 1.25rem;}
.text-base { font-size: 1rem; line-height: 1.5rem;}
.text-lg { font-size: 1.125rem; line-height: 1.75rem;}
.text-xl { font-size: 1.25rem; line-height: 1.75rem;}
.text-2xl { font-size: 1.5rem; line-height: 2rem;}
.text-3xl { font-size: 1.875rem; line-height: 2.25rem;}
.text-4xl { font-size: 2.25rem; line-height: 2.5rem;}
.text-5xl { font-size: 2.5rem; line-height: 2.75rem;}
.text-6xl { font-size: 3rem; line-height: 3rem;}
.text-7xl { font-size: 3.75rem; line-height: 4rem;}
.text-8xl { font-size: 4.5rem; line-height: 4.5rem;}
.text-9xl { font-size: 6rem; line-height: 6rem;}
.italic { font-style: italic; }
.font-thin { font-weight: 100; }
.font-extralight { font-weight: 200; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.font-black { font-weight: 900; }
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }
`
cssContent += typography

const border = `
.rounded-none { border-radius: 0; }
.rounded-sm { border-radius: 0.125rem; }
.rounded { border-radius: 0.25rem; }
.rounded-md { border-radius: 0.375rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-2xl { border-radius: 1rem; }
.rounded-3xl { border-radius: 1.5rem; }
.rounded-full { border-radius: 9999px; }
.border { border: 1px solid; }
.border-0 { border: 0; }
.border-dashed { border-style: dashed; }
.border-dotted { border-style: dotted; }
.border-solid { border-style: solid; }
.border-2 { border: 2px solid; }
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --gj-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--gj-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--gj-divide-x-reverse)));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --gj-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--gj-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--gj-divide-y-reverse));
}

.outline-0 { outline-width: 0; }
.outline-1 { outline-width: 1px;}
.outline-2 { outline-width: 2px;}
.outline-4 { outline-width: 4px;}

.ring-0 {
  --gj-ring-offset-shadow: var(--gj-ring-inset) 0 0 0 var(--gj-ring-offset-width) var(--gj-ring-offset-color);
  --gj-ring-shadow: var(--gj-ring-inset) 0 0 0 calc(0px + var(--gj-ring-offset-width)) var(--gj-ring-color);
  box-shadow: var(--gj-ring-offset-shadow), var(--gj-ring-shadow), var(--gj-shadow, 0 0 #0000);
}
.ring-1 {
  --gj-ring-offset-shadow: var(--gj-ring-inset) 0 0 0 var(--gj-ring-offset-width) var(--gj-ring-offset-color);
  --gj-ring-shadow: var(--gj-ring-inset) 0 0 0 calc(1px + var(--gj-ring-offset-width)) var(--gj-ring-color);
  box-shadow: var(--gj-ring-offset-shadow), var(--gj-ring-shadow), var(--gj-shadow, 0 0 #0000);
}
.ring-2 {
  --gj-ring-offset-shadow: var(--gj-ring-inset) 0 0 0 var(--gj-ring-offset-width) var(--gj-ring-offset-color);
  --gj-ring-shadow: var(--gj-ring-inset) 0 0 0 calc(2px + var(--gj-ring-offset-width)) var(--gj-ring-color);
  box-shadow: var(--gj-ring-offset-shadow), var(--gj-ring-shadow), var(--gj-shadow, 0 0 #0000);
}
.ring-4 {
  --gj-ring-offset-shadow: var(--gj-ring-inset) 0 0 0 var(--gj-ring-offset-width) var(--gj-ring-offset-color);
  --gj-ring-shadow: var(--gj-ring-inset) 0 0 0 calc(4px + var(--gj-ring-offset-width)) var(--gj-ring-color);
  box-shadow: var(--gj-ring-offset-shadow), var(--gj-ring-shadow), var(--gj-shadow, 0 0 #0000);
}
`
cssContent += border

const effects = `

.shadow-sm {
  --gj-ring-offset-shadow: 0 0 #0000;
  --gj-ring-shadow: 0 0 #0000;
  --gj-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --gj-shadow-colored: 0 1px 2px 0 var(--gj-shadow-color);
  box-shadow: var(--gj-ring-offset-shadow, 0 0 #0000), var(--gj-ring-shadow, 0 0 #0000), var(--gj-shadow);
}
.shadow {
  --gj-ring-offset-shadow: 0 0 #0000;
  --gj-ring-shadow: 0 0 #0000;
  --gj-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --gj-shadow-colored: 0 1px 3px 0 var(--gj-shadow-color), 0 1px 2px -1px var(--gj-shadow-color);
  box-shadow: var(--gj-ring-offset-shadow, 0 0 #0000), var(--gj-ring-shadow, 0 0 #0000), var(--gj-shadow);
}
.shadow-md {
  --gj-ring-offset-shadow: 0 0 #0000;
  --gj-ring-shadow: 0 0 #0000;
  --gj-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --gj-shadow-colored: 0 4px 6px -1px var(--gj-shadow-color), 0 2px 4px -2px var(--gj-shadow-color);
  box-shadow: var(--gj-ring-offset-shadow, 0 0 #0000), var(--gj-ring-shadow, 0 0 #0000), var(--gj-shadow);
}
.shadow-lg {
  --gj-ring-offset-shadow: 0 0 #0000;
  --gj-ring-shadow: 0 0 #0000;
  --gj-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --gj-shadow-colored: 0 10px 15px -3px var(--gj-shadow-color), 0 4px 6px -4px var(--gj-shadow-color);
  box-shadow: var(--gj-ring-offset-shadow, 0 0 #0000), var(--gj-ring-shadow, 0 0 #0000), var(--gj-shadow);
}
.shadow-xl {
  --gj-ring-offset-shadow: 0 0 #0000;
  --gj-ring-shadow: 0 0 #0000;
  --gj-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --gj-shadow-colored: 0 20px 25px -5px var(--gj-shadow-color), 0 8px 10px -6px var(--gj-shadow-color);
  box-shadow: var(--gj-ring-offset-shadow, 0 0 #0000), var(--gj-ring-shadow, 0 0 #0000), var(--gj-shadow);
}

.opacity-0 { opacity: 0; }
.opacity-05 { opacity: 0.05; }
.opacity-10 { opacity: 0.1; }
.opacity-20 { opacity: 0.2; }
.opacity-25 { opacity: 0.25; }
.opacity-30 { opacity: 0.3; }
.opacity-40 { opacity: 0.4; }
.opacity-50 { opacity: 0.5; }
.opacity-60 { opacity: 0.6; }
.opacity-70 { opacity: 0.7; }
.opacity-75 { opacity: 0.75; }
.opacity-80 { opacity: 0.8; }
.opacity-90 { opacity: 0.9; }
.opacity-100 { opacity: 1; }
`
cssContent += effects

const interactivity = `
.cursor-pointer {
  cursor: pointer;
}
`
cssContent += interactivity

writeCSS(cssContent)
