/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
		  {
			light: {
			  ...require("daisyui/src/theming/themes")["light"],
			  primary: "#005baa",
			  "primary-focus": "mediumblue",
			},
		  },
		],
	  }
}
