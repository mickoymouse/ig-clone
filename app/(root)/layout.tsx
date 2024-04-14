import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			* user stories
			<main>{children}</main>
			* menu bar
			<br />
		</>
	);
};

export default HomeLayout;
