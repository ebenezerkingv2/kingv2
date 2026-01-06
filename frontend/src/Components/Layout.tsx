// --------------------------------------------------
// Layout Component
// --------------------------------------------------
import Navbar from "./Navbar";
// --------------------------------------------------
interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className="flex-grow">{children}</main>
			<footer></footer>
		</div>
	);
};

export default Layout;
