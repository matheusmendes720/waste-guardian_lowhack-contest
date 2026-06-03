/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22C55E',
          dark: '#16A34A',
          light: '#4ADE80',
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#FCFDFC',
          muted: '#F7F8F7',
          overlay: 'rgba(28,38,30,0.45)'
        },
        ink: {
          DEFAULT: '#111827',
          secondary: '#6B7280',
          muted: '#9CA3AF',
          onPrimary: '#FFFFFF'
        },
        border: {
          DEFAULT: '#E5E7EB',
          strong: '#CBD5E1'
        },
        success: { bg: '#D1FAE5', fg: '#047857', border: '#34D399' },
        warning: { bg: '#FEF3C7', fg: '#B45309', border: '#F59E0B' },
        danger: { bg: '#FEE2E2', fg: '#B91C1C', border: '#EF4444' },
        gold: '#FACC15',
        bronze: '#B45309',
        silver: '#C0C5CC',
        streak: '#F97316'
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      borderRadius: {
        sm: '6px', md: '10px', lg: '14px', xl: '20px', '2xl': '28px', full: '9999px'
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 12px rgba(0,0,0,0.08)',
        lg: '0 10px 25px rgba(0,0,0,0.10)',
        xl: '0 20px 40px rgba(0,0,0,0.15)'
      },
      animation: {
        'breathe': 'breathe 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 400ms ease-out forwards',
        'slideUp': 'slideUp 300ms ease-out forwards',
        'pulseScale': 'pulseScale 2s ease-in-out infinite'
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' }
        },
        fadeIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' }
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      }
    }
  },
  plugins: []
}
