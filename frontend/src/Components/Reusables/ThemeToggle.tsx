import { useEffect, useState } from "react";

function ThemeToggle() {
	// ✅ Declare the state inside the component
	const [darkMode, setDarkMode] = useState(() => {
		return localStorage.getItem("theme") === "dark";
	});

	useEffect(() => {
		const root = document.documentElement;

		if (darkMode) {
			root.classList.add("dark");
			root.style.backgroundColor = "#111"; // global background
			root.style.color = "#fff"; // global text
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			root.style.backgroundColor = "#fff";
			root.style.color = "#111";
			localStorage.setItem("theme", "light");
		}

		// optional smooth transition
		root.style.transition = "background-color 0.3s, color 0.3s";
	}, [darkMode]);

	const toggleTheme = () => setDarkMode((prev) => !prev);

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 transition"
			aria-label="Toggle Dark Mode"
		>
			{darkMode ? "🌙" : "☀️"}
		</button>
	);
}

export default ThemeToggle;
