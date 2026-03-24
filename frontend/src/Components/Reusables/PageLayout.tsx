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
		<section className={`flex-1 flex flex-col ${className}`}>
			{/* ================= HEADER (TOP) */}
			<div className="w-full">{header}</div>

			{/* ================= BODY (CENTERED) */}
			<div className="flex-1 flex items-center justify-center w-full">
				{children}
			</div>
		</section>
	);
};

export default PageLayout;
