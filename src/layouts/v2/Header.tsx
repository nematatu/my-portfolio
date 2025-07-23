"use client";

import Link from "next/link";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

export default function Header() {
	return (
		<header className="flex items-center justify-center">
			<div className="w-full md:w-2/3">
				<div className="rounded-[28px] p-[8px] border-[1.5px] bg-white dark:bg-gray-800 border-solid border-gray-700 dark:border-gray-200 dark:bg-gray-700 flex justify-between items-center px-6">
					<Link href="/" className="flex space-x-4">
						<p className="text-sm md:text-lg italic text-xl font-bold tracking-widest">
							Amtt.
						</p>
					</Link>
					<div>
						<ThemeSwitch />
					</div>
				</div>
			</div>
		</header>
	);
}
