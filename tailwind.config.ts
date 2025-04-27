import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
        heading: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        "apple-white": "#FFFFFF",
        "apple-gray": {
          50: "#F9F9F9",
          100: "#F2F2F2",
          200: "#E6E6E6",
          300: "#D1D1D6",
          400: "#AEAEB2",
          500: "#8E8E93",
          600: "#636366",
          700: "#48484A",
          800: "#3A3A3C",
          900: "#1C1C1E",
        },
        "apple-blue": {
          500: "#0A84FF",
          600: "#007AFF",
          700: "#0066CC",
        },
        "apple-indigo": "#5E5CE6",
        "apple-purple": "#BF5AF2",
        "apple-pink": "#FF2D55",
        "apple-red": "#FF3B30",
        "apple-orange": "#FF9500",
        "apple-yellow": "#FFCC00",
        "apple-green": "#34C759",
        "apple-teal": "#5AC8FA",
        "apple-sky-blue": {
          50: "#F0F8FF",
          100: "#E6F2FF",
          200: "#CCE5FF",
          300: "#99CCFF",
          400: "#66B2FF",
          500: "#33A1FF",
          600: "#0A84FF",
          700: "#007AFF",
          800: "#0066CC",
          900: "#004C99"
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'apple-sm': '0 2px 6px rgba(0, 0, 0, 0.1)',
        'apple-md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'sky-blue': '0 4px 15px rgba(10, 132, 255, 0.15)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        "accordion-up": {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "typing": {
          "0%": { width: "0" },
          "100%": { width: "100%" }
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" }
        },
        "scale-up": {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-right": "fade-in-right 0.7s ease-out forwards",
        "fade-in-left": "fade-in-left 0.7s ease-out forwards",
        "typing": "typing 3.5s steps(40, end)",
        "blink": "blink 0.7s step-end infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s infinite",
        "scale-up": "scale-up 0.3s ease-out forwards"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
