/** @type {import('tailwindcss').Config} */
module.exports = {
  // ▼ フォルダの場所を直接指定して、絶対に読み込ませる！
  content: [
    "./*.html",
    "./biz/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['monospace'],
      },
      colors: {
        bizText: '#0f172a',
        bizGray: '#64748b',
        bizLight: '#f8fafc',
        bizAccent: '#0f3c85',
        bgBase: '#fafafa',
        neoBlack: '#121212',
        neoRed: '#FF4D4D'
      },
      animation: {
        'breathe': 'breathe 3s ease-in-out infinite'
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
