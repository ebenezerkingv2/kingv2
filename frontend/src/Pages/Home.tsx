// --------------------------------------------------
// App
// --------------------------------------------------

// --------------------------------------------------

const Home = () => {
	return (
		<div className="homePage__parent bg-[#8b40ff] text-[#f6f0ec] h-screen w-screen flex flex-col items-center px-[1rem]">
			<header className="flex flex-col items-center mt-[2rem]">
				<h1 className="homePage___heading text-[1.5rem] md:text-[2rem] lg:text-[2rem] font-bold text-center">
					Full-Stack Developer
				</h1>
				<p className="homePage___subheading text-[0.8rem] md:text-[1rem] flex items-center gap-[0.2rem] mt-[-0.5rem] text-center">
					<span className="text-[1rem]">{"{"}</span>
					<span>Over 2 years of experience</span>
					<span className="text-[1rem]">{"}"}</span>
				</p>
			</header>
			<article className="homePage__bio mt-[3rem]">
				I build full-stack applications using the JavaScript ecosystem. On the
				frontend, I work with React, TypeScript, Vite, TailwindCSS, and
				Material-UI. On the backend, I develop API&apos;s with Node.js and
				Express, and I use MongoDB for database management.
			</article>
		</div>
	);
};

export default Home;
