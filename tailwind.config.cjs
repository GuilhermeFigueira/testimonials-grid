/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Barlow Semi Condensed", "sans-serif"],
		},
		extend: {
			colors: {
				violet: "hsl(263, 55%, 52%)",
				blue: {
					dark_gray: "hsl(217, 19%, 35%)",
					dark_black: "hsl(219, 29%, 14%)",
					gray: "hsl(210, 46%, 95%)",
				},
				gray: "hsl(0, 0%, 81%)",
			},
		},
	},
	plugins: [],
};
