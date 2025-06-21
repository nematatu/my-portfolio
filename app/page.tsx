"use client";

import Particles from "@/components/ui/particles";
import Profile from "@/components/layouts/v1/Profile";
import Header from "@/components/layouts/v1/Header";
import Projects from "@/components/layouts/v1/Projects";
import Home from "@/components/layouts/v1/Home";
import Background from "@/components/backgrounds/v1-bg.svg";

export default function MinimalPortfolio() {
    const color = "#ffffff";
    return (
        <div className=" min-h-screen  text-white overflow-hidden relative">
            <Background className="fixed inset-0 z-0" />
            <Particles
                className="fixed inset-0 z-10"
                quantity={30}
                ease={100}
                color={color}
            />
            <Header />
            <main className="px-8 md:px-16 lg:px-24">
                <Home />
                <Profile />
                <Projects />
            </main>
        </div>
    );
}
