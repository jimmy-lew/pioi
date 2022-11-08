/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
			
					"primary": "#d6d1cb",
								
					"secondary": "#FF6600",
								
					"accent": "#09BB6F",
								
					"neutral": "#ede8e4",
								
					"base-100": "#222",
								
					"info": "#0ea5e9",
								
					"success": "#22c55e",
								
					"warning": "#f59e0b",
								
					"error": "#be123c",
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
