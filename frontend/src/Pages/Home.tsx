// =====================================
// src/Pages/Home.tsx
// =====================================

import King from "../Assets/King.webp";
import parkLights from "../Assets/parkLights.webp";
import { motion } from "framer-motion";

const springZoom = {
	initial: { opacity: 0, scale: 0.5 },
	animate: { opacity: 1, scale: 1 },
	transition: {
		type: "spring" as const,
		stiffness: 40,
		damping: 15,
	},
};

const Home = () => {
	return (
		<div className="homePage__parent w-full flex flex-col flex-grow">
			{/* ========================= Hero Section ========================== */}
			<div className="homePage__twins w-full flex flex-col md:flex-row flex-grow">
				{/* Mobile Hero */}
				<div
					className="relative block md:hidden w-full flex-grow min-h-[50vh] flex flex-col justify-center text-center bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${parkLights})` }}
				>
					<div className="absolute inset-0 bg-black/30"></div>
					<div className="relative z-10 px-[1rem]">
						<p className="text-[0.9rem] mb-2 text-white">My name is Eben</p>
						<h1 className="text-[1.2rem] font-bold text-white">
							I'm a Developer
						</h1>
						<p className="text-[0.8rem] mt-2 text-white">MERN stack</p>
					</div>
				</div>

				{/* Desktop Hero */}
				<div className="hidden md:flex items-center justify-between space-x-8 my-[2rem]">
					<motion.div
						className="p-[1rem]"
						initial={springZoom.initial}
						animate={springZoom.animate}
						transition={springZoom.transition}
					>
						<img
							src={King}
							alt="Ebenezer Tiewei"
							className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full object-cover border-4 border-[#450693]"
						/>
					</motion.div>

					<div className="flex flex-col">
						<h1 className="text-[2rem] lg:text-[2.5rem] font-bold">
							MERN Full-Stack Developer
						</h1>
						<p className="text-[1rem] lg:text-[1.2rem] flex items-center gap-[0.2rem] mt-[-0.5rem]">
							<span>{"{"}</span>
							<span>With over 2 years of experience</span>
							<span>{"}"}</span>
						</p>
					</div>
				</div>
			</div>

			{/* ========================= Mobile stacked content ========================== */}
			<div className="block md:hidden flex flex-col gap-8 px-4 py-8">
				{/* About */}
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

				{/* Projects */}
				<section className="bg-[#450693] text-[#f6f0ec] w-full flex flex-col p-4 rounded">
					<h2 className="text-xl font-bold mb-2">Projects</h2>
					<p>Some mobile Projects content...</p>
				</section>

				{/* Services */}
				<section className="bg-[#8b40ff] text-[#f6f0ec] w-full flex flex-col p-4 rounded">
					<h2 className="text-xl font-bold mb-2">Services</h2>
					<p>Some mobile Services content...</p>
				</section>

				{/* Contact */}
				<section className="bg-[#450693] text-[#f6f0ec] w-full flex flex-col p-4 rounded">
					<h2 className="text-xl font-bold mb-2">Contact</h2>
					<p>Some mobile Contact content...</p>
				</section>
			</div>
		</div>
	);
};

export default Home;
