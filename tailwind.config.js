import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      colors: {
        // Transgender Pride Flag
        trans: {
          blue: '#5BCEFA',
          pink: '#F5A9B8',
          white: '#FFFFFF',
        },
        // Neutral surfaces tuned per mode
        ink: {
          50: '#f7f9fc',
          100: '#eef2f8',
          200: '#dde5f0',
          300: '#c3d0e3',
          400: '#93a6c2',
          500: '#64789a',
          600: '#475a7a',
          700: '#34435e',
          800: '#1f2940',
          900: '#131a2b',
          950: '#0a0e1a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Noto Sans SC',
          'Microsoft YaHei',
          'sans-serif',
        ],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'trans-stripes':
          'linear-gradient(180deg, #5BCEFA 0%, #5BCEFA 20%, #F5A9B8 20%, #F5A9B8 40%, #FFFFFF 40%, #FFFFFF 60%, #F5A9B8 60%, #F5A9B8 80%, #5BCEFA 80%, #5BCEFA 100%)',
        'trans-gradient': 'linear-gradient(120deg, #5BCEFA 0%, #F5A9B8 100%)',
        'trans-soft':
          'linear-gradient(120deg, rgba(91,206,250,0.16) 0%, rgba(245,169,184,0.16) 100%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(19,26,43,0.06), 0 8px 24px -12px rgba(19,26,43,0.25)',
        glow: '0 0 0 1px rgba(91,206,250,0.35), 0 12px 40px -12px rgba(245,169,184,0.55)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.trans.blue'),
            '--tw-prose-headings': theme('colors.ink.900'),
            '--tw-prose-bold': theme('colors.ink.900'),
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
              fontWeight: '600',
              borderBottom: '1px solid rgba(91,206,250,0.5)',
            },
            'a:hover': { borderBottomColor: theme('colors.trans.pink') },
            'h2, h3, h4': { scrollMarginTop: '6rem' },
            'h2': {
              borderBottom: '1px solid rgba(91,206,250,0.25)',
              paddingBottom: '0.35rem',
            },
            'blockquote': {
              borderLeftColor: theme('colors.trans.pink'),
              backgroundColor: 'rgba(245,169,184,0.08)',
              padding: '0.25rem 1rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              fontStyle: 'normal',
            },
            'code': {
              backgroundColor: 'rgba(91,206,250,0.12)',
              padding: '0.15rem 0.35rem',
              borderRadius: '0.35rem',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            'table': { fontSize: '0.95rem' },
            'th': {
              backgroundColor: 'rgba(91,206,250,0.10)',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-links': theme('colors.trans.blue'),
            '--tw-prose-headings': theme('colors.trans.white'),
            '--tw-prose-bold': theme('colors.trans.white'),
            '--tw-prose-body': theme('colors.ink.200'),
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
              fontWeight: '600',
              borderBottom: '1px solid rgba(91,206,250,0.5)',
            },
            'a:hover': { borderBottomColor: theme('colors.trans.pink') },
            'h2, h3, h4': { scrollMarginTop: '6rem' },
            'h2': {
              borderBottom: '1px solid rgba(91,206,250,0.25)',
              paddingBottom: '0.35rem',
            },
            'blockquote': {
              borderLeftColor: theme('colors.trans.pink'),
              backgroundColor: 'rgba(245,169,184,0.08)',
              padding: '0.25rem 1rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              fontStyle: 'normal',
            },
            'code': {
              backgroundColor: 'rgba(91,206,250,0.14)',
              padding: '0.15rem 0.35rem',
              borderRadius: '0.35rem',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            'th': {
              backgroundColor: 'rgba(91,206,250,0.12)',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
