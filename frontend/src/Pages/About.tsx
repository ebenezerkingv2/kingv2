// =====================================
// src/Pages/About.tsx
// =====================================

const About = () => {
	return (
		<div className="w-full">
			{/* Desktop About page */}
			<div className="hidden md:block aboutPage__content bg-[#8b40ff] text-[#f6f0ec] w-full flex flex-col flex-grow p-8">
				<article className="aboutPage__content--bio text-center">
					<h2 className="text-2xl font-bold mb-4">About Me</h2>
					<p>
						Hello and welcome to the start of a new journey! I build full-stack
						applications using the JavaScript ecosystem. On the frontend, I work
						with React, TypeScript, Vite, TailwindCSS, and Material-UI. On the
						backend, I develop APIs with Node.js and Express, and I use MongoDB
						for database management.
					</p>
				</article>
			</div>

			{/* Mobile stacked content */}
			<div className="block md:hidden flex flex-col gap-8 px-4 py-8">
				<section className="bg-[#8b40ff] text-[#f6f0ec] w-full flex flex-col p-4 rounded">
					<h2 className="text-xl font-bold mb-2">About Me</h2>
					<p>
						Hello and welcome to the start of a new journey! I build full-stack
						applications using the JavaScript ecosystem. On the frontend, I work
						with React, TypeScript, Vite, TailwindCSS, and Material-UI. On the
						backend, I develop APIs with Node.js and Express, and I use MongoDB
						for database management.
					</p>
				</section>

				<section className="bg-[#450693] text-[#f6f0ec] w-full flex flex-col p-4 rounded">
					<h2 className="text-xl font-bold mb-2">Projects</h2>
					<p>Some mobile Projects content...</p>
				</section>

				<section className="bg-[#8b40ff] text-[#f6f0ec] w-full flex flex-col p-4 rounded">
					<h2 className="text-xl font-bold mb-2">Services</h2>
					<p>Some mobile Services content...</p>
				</section>

				<section className="bg-[#450693] text-[#f6f0ec] w-full flex flex-col p-4 rounded">
					<h2 className="text-xl font-bold mb-2">Contact</h2>
					<p>Some mobile Contact content...</p>
				</section>
			</div>
		</div>
	);
};

export default About;
