/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "15px",
		}, screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
	},
	plugins: [],
}
