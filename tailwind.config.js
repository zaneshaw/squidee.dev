/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			animation: {
				"ping-slow": "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite"
			},
		}
	},
	plugins: []
};
