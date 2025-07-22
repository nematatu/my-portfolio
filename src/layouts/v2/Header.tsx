import Link from "next/link";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

export default function Header() {
	return (
		<header className=" text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
				<Link
					href="/"
					className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
				>
					<span className="dark:text-white text-xl">Somahc</span>
				</Link>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
					<Link href="/about" className="mr-5 hover:text-gray-300">
						About
					</Link>
					<Link href="/blog" className="mr-5 hover:text-gray-300">
						Blog
					</Link>
				</nav>
				<ThemeSwitch />
			</div>
		</header>
	);
}
