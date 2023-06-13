import Navbar from "@/components/layouts/Navbar";
import { FC, ReactNode } from "react";
import "server-only";
import "./globals.css";

export const metadata = {
	title: "Norbert O Portfolio",
	description: "My Own Portfolio Website",
};

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
	return (
		<html lang="en">
			<body>
				<div className="h-screen bg-navy-blue pt-12">
					<Navbar />
					{props.children}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
