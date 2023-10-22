const flowbite = require('flowbite/plugin');
const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json', './node_modules/flowbite/**/*.js'],
	plugins: [flowbite, typography],
};
