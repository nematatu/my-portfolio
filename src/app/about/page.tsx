"use client";

import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";
import { EaseDriver, FadeIn, FadeInWithStagger } from "@/components/ui/FadeIn";
import Header from "@/layouts/v2/Header";

export default function About() {
	return (
		<FadeInWithStagger>
				<Header />
			<div className="w-full md:w-1/2 mx-auto space-y-8">
				<FadeIn>
					<div className="flex flex-col mt-9 md:mt-12">
						<div className="flex space-x-4 md:space-x-8 items-center mb-8">
							<div className="w-[12px] h-[12px] md:w-[15px] md:h-[15px] rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px] mt-1" />
							<p className="text-2xl md:text-3xl font-bold tracking-widest">
								About/
							</p>
						</div>
						<div className="flex justify-between space-x-3 md:space-x-4 px-2">
							<p className="whitespace-pre-line tracking-widest">
								バドミントンと写真が好き
								<br />
								沖縄出身 宮崎在住
							</p>
							<div className="flex flex-col items-end justify-end">
								<div className="flex items-center space-x-3 md:space-x-4">
									<Link target="_blank" href="https://twitter.com/T_kanntoku">
										<FaXTwitter className="w-5 h-5 md:w-6 md:h-6" />
									</Link>
									<Link target="_blank" href="https: //github.com/nematatu">
										<FaGithub className="w-5 h-5 md:w-6 md:h-6" />
									</Link>
									<Link target="_blank" href="https://zenn.dev/kotopasi">
										<SiZenn className="text-blue-300 w-5 h-5 md:w-6 md:h-6" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</FadeIn>
				<EaseDriver />
				<FadeIn>
					<div className="flex flex-col mb-8">
						<div className="flex space-x-4 md:space-x-8 items-center mb-8">
							<div className="w-[9px] h-[9px] md:w-[12px] md:h-[12px] rounded-sm bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px] mt-1" />

							<p className="flex items-start text-xl md:text-2xl font-bold tracking-widest">
								Skill
							</p>
						</div>
						<div className="whitespace-pre-line tracking-widest space-y-4 px-2">
							<p className="tracking-widest font-bold text-lg md:text-xl">
								Frontend
							</p>
							TypeScript / Next.js / React
							<br />
							<p className="tracking-widest font-bold text-lg md:text-xl">
								Backend
							</p>
							Python / Bun / Deno
						</div>
					</div>
				</FadeIn>
			</div>
		</FadeInWithStagger>
	);
}
