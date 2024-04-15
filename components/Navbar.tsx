import { Heart, Search, MessageCircle } from "lucide-react";
import React from "react";

const Navbar = () => {
	return (
		<header>
			<nav className="sticky top-0 flex items-center justify-between border bg-white p-2 shadow-sm">
				<div className="flex inline-block">
					<img src="/logo.svg" alt="logo" className="h-6 w-6 hidden sm:flex" />
					<div className="sm:ml-2">PrideGram!</div>
				</div> 
				<div className="flex justify-end items-center">
					<div className="hidden relative sm:flex">
						<Search className="absolute top-[50%] left-[20px] translate-y-[-50%] text-slate-500" />
						<input
							type="text"
							placeholder="Search"
							className="ml-2 rounded-xl bg-gray-100 p-2 pl-10"
						/>
					</div>
					<div className="flex inline-block">
						<Heart className="text-slate-900 ml-4" />
						<MessageCircle className="text-slate-900 ml-4" />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
