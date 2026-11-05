/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      colors: {
        dark: {
          bg: '#090a0f',
          surface: '#10131c',
          card: '#151926',
          border: '#1f2638',
          text: '#f1f5f9',
          muted: '#94a3b8',
        },
        light: {
          bg: '#fafbfe',
          surface: '#ffffff',
          card: '#f3f5fa',
          border: '#e2e6f0',
          text: '#0f172a',
          muted: '#64748b',
        },
        accent: {
          blue: '#0284c7',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          glow: 'rgba(6, 182, 212, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
