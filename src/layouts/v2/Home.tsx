import Link from "next/link";
import Logo from "@/components/icons/logo.svg";
import { FadeIn, FadeInWithStagger } from "@/components/ui/FadeIn";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

export default function Home() {
	return (
		<FadeInWithStagger>
			<div className="w-5/6 md:w-1/2 lg:w-1/4 mx-auto">
				<div className="absolute top-8 right-8">
					<ThemeSwitch />
				</div>
				<div className="w-full pt-10 md:pt-12 pr-12 pl-12 mb-8">
					<FadeIn>
						<div className="rounded-[28px] p-[8px] border-[1.5px] bg-white dark:bg-gray-800 border-solid border-gray-700 dark:border-gray-200 ">
							<Logo className="rounded-[20px] border-[1.5px] bg-blue-400 border-solid border-gray-700 dark:border-gray-200" />
						</div>
					</FadeIn>
					<FadeIn>
						<p className="font-bold text-2xl tracking-widest my-8">Amtt</p>
					</FadeIn>
					<FadeIn>
						<div className="flex items-center space-x-4 md:space-x-8">
							<div className="w-[13px] h-[12px] md:w-[15px] md:h-[13px] rounded-[3px] md:rounded-[4px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]" />
							<div className="w-full h-[1px] bg-gray-700 dark:bg-gray-200" />
						</div>
					</FadeIn>
				</div>

				<div className="flex flex-col items-center mr-8 text-lg tracking-widest">
					<div className="relative space-y-1">
						<FadeIn>
							<Link
								href="/about"
								className="transition-colors hover:text-blue-500"
							>
								<div className="p-3 flex space-x-8 items-center">
									<div className="w-[11px] h-[11px] md:w-[12px] md:h-[12px] rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]" />
									<p className="font-bold">About</p>
									<p className="absolute left-24">{">"}</p>
								</div>
							</Link>
						</FadeIn>
						<FadeIn>
							<Link
								href="/works"
								className=" transition-colors hover:text-blue-500"
							>
								<div className="p-3 flex space-x-8 items-center">
									<div className="w-[11px] h-[11px] md:w-[12px] md:h-[12px] rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]" />
									<p className="font-bold">Works</p>
									<p className="absolute left-24">{">"}</p>
								</div>
							</Link>
						</FadeIn>
						<FadeIn>
							<Link
								href="/blog"
								className=" transition-colors hover:text-blue-500"
							>
								<div className="p-3 flex space-x-8 items-center">
									<div className="w-[11px] h-[11px] md:w-[13px] md:h-[12px] rounded-[3px] bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-200 border-solid border-[1.5px]" />
									<p className="font-bold">Blog</p>
									<p className="absolute left-24">{">"}</p>
								</div>
							</Link>
						</FadeIn>
					</div>
				</div>
			</div>
		</FadeInWithStagger>
	);
}
