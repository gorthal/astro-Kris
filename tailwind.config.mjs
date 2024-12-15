/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/pages/*.{astro,html,js,md}',
		'./src/pages/resistance.astro',
    	'./index.html',
	],
	theme: {
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("rippleui"),
	],
	

}
