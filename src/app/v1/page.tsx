"use client";

import Background from "@/components/backgrounds/v1-bg.svg";
import Header from "@/layouts/v1/Header";
import Profile from "@/layouts/v1/Profile";
import Particles from "@/layouts/v1/particles";
import Projects from "@/layouts/v1/Projects";
import Home from "@/layouts/v1/Home";

export default function MinimalPortfolio() {
	return (
		<div className=" min-h-screen  text-white overflow-hidden relative">
			<Background className="fixed inset-0 z-0" />
			<Particles />
			<Header />
			<main className="px-8 md:px-16 lg:px-24">
				<Home />
				<Profile />
				<Projects />
			</main>
		</div>
	);
}
