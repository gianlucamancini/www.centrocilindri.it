const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwind,
    // eslint-disable-next-line no-process-env
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [autoprefixer] : [])
  ],
};
