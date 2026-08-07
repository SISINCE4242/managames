/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#05070a',
          soft: '#0a0f0d',
          card: '#0d1411',
        },
        mana: {
          50: '#eafff3',
          100: '#c8ffe1',
          200: '#96f7c4',
          300: '#5ceda3',
          400: '#2ee083',
          500: '#12c96b',
          600: '#06a355',
          700: '#068146',
          800: '#0a663a',
          900: '#0a5432',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk Variable"', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(46,224,131,.25), 0 0 36px -8px rgba(46,224,131,.55)',
        'glow-lg': '0 0 0 1px rgba(46,224,131,.3), 0 0 90px -20px rgba(46,224,131,.75)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%, -6%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%, 4%, 0) scale(.95)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(.85)', opacity: '.9' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 26s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.6s ease-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
