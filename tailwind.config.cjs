/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "media",
	theme: {
		extend: {
			'fcc': 'flex items-center justify-center'
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
