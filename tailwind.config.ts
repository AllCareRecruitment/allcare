import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        proPlanHeaderPink: 'var(--color-pro-plan-header)',
        proPlanBodyPink: 'var(--color-pro-plan-body)',
        basicPlanHeaderBlue: 'var(--color-basic-plan-header)',
        basicPlanBodyBlue: 'var(--color-basic-plan-body)',
        ultimatePlanHeaderBrown: 'var(--color-ultimate-plan-header)',
        ultimatePlanBodyBrown: 'var(--color-employers-bg)',
        planGetStartedButton: 'var(--color-plan-get-started-button)',
        selectPlanBackground: 'var(--color-plan-selection-bg)',
      },
      // Add these keyframes and animation properties:
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
