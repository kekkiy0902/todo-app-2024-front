import { type Config } from 'tailwindcss';

const MAIN_CONTENT_WIDTH_FOR_PC = '920px';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.5rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '2rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['2rem', { lineHeight: '3rem' }],
    '4xl': ['2.5rem', { lineHeight: '3rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
    '8xl': ['6rem', { lineHeight: '1' }],
    '9xl': ['8rem', { lineHeight: '1' }],
  },
  theme: {
    extend: {
      width: {
        'main-content-for-pc': MAIN_CONTENT_WIDTH_FOR_PC,
      },
      maxWidth: {
        'main-content-for-pc': MAIN_CONTENT_WIDTH_FOR_PC,
      },
      colors: {
        'primary-blue': '#159BD6',
        /* アプリ全体の背景色 */
        'neutral-white': '#F8FAFC',
        /* テキストの基本色 */
        'base-black': '#1F2937',
      },
      zIndex: {
        1: '1',
        5: '5',
        100: '100',
      },
    },
    fontFamily: {
      sans: ['LINE Seed'],
    },
  },
  extend: {
    animation: {
      'fade-in': 'fade-in 0.5s linear forwards',
      marquee: 'marquee var(--marquee-duration) linear infinite',
      'spin-slow': 'spin 4s linear infinite',
      'spin-slower': 'spin 6s linear infinite',
      'spin-reverse': 'spin-reverse 1s linear infinite',
      'spin-reverse-slow': 'spin-reverse 4s linear infinite',
      'spin-reverse-slower': 'spin-reverse 6s linear infinite',
    },
    colors: ({ colors }: any) => ({
      gray: colors.neutral,
    }),
    keyframes: {
      'fade-in': {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
    },
    maxWidth: {
      '2xl': '40rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    },
  },
};

export default config;
