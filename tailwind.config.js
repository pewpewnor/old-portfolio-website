/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"navy-blue": "#0A044E",
				"shade-blue": "#152239",
				"light-shade-blue": "#303C5A",
			},
			fontFamily: {
				neue: "Helvetica Neue",
			},
		},
	},
	plugins: [],
};
