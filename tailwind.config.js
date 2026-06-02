export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.14)',
        glow: '0 18px 50px rgba(14, 165, 233, 0.22)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 38%), linear-gradient(135deg, rgba(14, 165, 233, 0.12), rgba(59, 130, 246, 0.03))',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
