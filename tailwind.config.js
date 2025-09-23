/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Cores Principais
        primary: {
          50: '#fef2f2',   // vermelho sangue mais claro
          100: '#fee2e2',  
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc2626',  // vermelho sangue principal
          600: '#b91c1c',  // vermelho sangue escuro
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#450a0a',  // vermelho sangue mais escuro
          950: '#1a0000'
        },
        
        // Escala de Cinzas (Preto ao Branco)
        neutral: {
          0: '#ffffff',    // branco puro
          50: '#fafafa',   
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',  
          950: '#0a0a0a',
          1000: '#000000'  // preto puro
        },

        // Cores Semânticas do Sistema
        success: {
          light: '#bbf7d0',
          DEFAULT: '#16a34a',
          dark: '#15803d'
        },
        
        warning: {
          light: '#fed7aa',
          DEFAULT: '#ea580c', 
          dark: '#c2410c'
        },
        
        error: {
          light: '#fecaca',
          DEFAULT: '#dc2626', // usando vermelho sangue
          dark: '#b91c1c'
        },
        
        info: {
          light: '#dbeafe',
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8'
        },

        // Aliases Semânticos
        background: {
          primary: '#ffffff',    // branco
          secondary: '#fafafa',  
          tertiary: '#f5f5f5',
          dark: '#0a0a0a',      // preto
          accent: '#fef2f2'     // vermelho sangue claro
        },
        
        text: {
          primary: '#000000',    // preto
          secondary: '#525252',
          tertiary: '#737373', 
          inverse: '#ffffff',    // branco
          accent: '#dc2626'      // vermelho sangue
        },
        
        border: {
          light: '#e5e5e5',
          DEFAULT: '#d4d4d4',
          dark: '#525252',
          accent: '#dc2626'      // vermelho sangue
        },
        
        accent: {
          primary: '#dc2626',    // vermelho sangue
          secondary: '#b91c1c',
          light: '#fef2f2',
          dark: '#7f1d1d'
        }
      },
      
      // Configurações de Fonte
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      
      // Espaçamentos customizados
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      
      // Sombras customizadas
      boxShadow: {
        'accent': '0 4px 6px -1px rgba(220, 38, 38, 0.1), 0 2px 4px -1px rgba(220, 38, 38, 0.06)',
        'accent-lg': '0 10px 15px -3px rgba(220, 38, 38, 0.1), 0 4px 6px -2px rgba(220, 38, 38, 0.05)',
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
      },
      
      // Animações customizadas
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}

