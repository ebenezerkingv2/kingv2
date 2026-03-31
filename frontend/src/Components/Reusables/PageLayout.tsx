// =====================================
// src/Components/Reusables/PageLayout.tsx
// ===================================== PAGE LAYOUT COMPONENT

import React from "react";

type PageLayoutProps = {
	header: React.ReactNode;
	children: React.ReactNode;
	className?: string;
};

// =====================================
const PageLayout = ({ header, children, className = "" }: PageLayoutProps) => {
	return (
		<section
			className={`min-h-screen flex-1 flex flex-col md:mx-auto md:w-[90%] lg:w-[60%] px-[1rem] ${className}`}
		>
			{/* ================= HEADER (TOP) */}
			<div className="w-full md:pt-[1rem] pb-[5rem] md:pb-[10rem]">
				{header}
			</div>

			{/* ================= BODY (CENTERED) */}
			<div className="flex-1 flex w-full">{children}</div>
		</section>
	);
};

export default PageLayout;
