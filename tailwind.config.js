const getRange = (minValue, maxValue) => {
  return Array.from(
    { length: maxValue - minValue + 1 },
    (_, i) => i + minValue
  );
};

const sizes = [...getRange(0, 36), 48, 60, 72, 96, 180];
const baseFontSize = 16;
const spacing = Object.fromEntries([
  ...sizes.map((value) => [value, `${value / baseFontSize}rem`]),
  ['screen-width', '960px'],
  ['header-height', '72px'],
  ['footer-height', '120px'],
  ['modal-width', '480px'],
]);

const thicknesses = getRange(1, 8);
const borderWidth = Object.fromEntries(
  thicknesses.map((value) => [value, `${value}px`])
);
const outlineWidth = borderWidth;

const borderRadius = {
  ...Object.fromEntries(getRange(1, 16).map((value) => [value, `${value}px`])),
  full: '9999px',
};

const cssColors = [
  'main',
  'text',
  'text-footer',
  'text-quote',
  'bg',
  'blur',
  'bg-footer',
  'border',
  'overlay',
];
const colors = {
  ...Object.fromEntries(
    cssColors.map((key) => [key, `rgb(var(--color-${key}) / <alpha-value>)`])
  ),
  transparent: 'transparent',
};

const fontSizes = getRange(10, 36);
const fontWeights = [100, 300, 400, 500];
const fontSize = Object.fromEntries(
  fontSizes.flatMap((fontSize) =>
    fontWeights.map((fontWeight) => [
      `${fontSize}-${fontWeight}`,
      [`${fontSize / baseFontSize}rem`, { fontWeight }],
    ])
  )
);

const screens = { tablet: { max: '767px' } };

const dropShadow = {
  text: '0 0 1px rgb(var(--color-text))',
  modal: '0 0 8px rgba(0, 0, 0, 0.5)',
};

const zIndex = {
  base: 0,
  overlay: 1100,
  modal: 1200,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing,
    colors,
    borderWidth,
    outlineWidth,
    fontSize,
    screens,
    dropShadow,
    borderRadius,
    zIndex,
    extend: {},
  },
  plugins: [],
};
