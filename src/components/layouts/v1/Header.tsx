import { motion, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logowhite from "@/components/icons/logo-white.svg";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { scrollY } = useScroll();

	const headerVariants = {
		top: {
			backgroundColor: "rgba(10, 29, 58, 0)",
			backdropFilter: "blur(0px)",
		},
		scrolled: {
			backgroundColor: "rgba(10, 29, 58, 0.8)",
			backdropFilter: "blur(20px)",
		},
	};
	useEffect(() => {
		const unsubscribe = scrollY.onChange((latest) => {
			setIsScrolled(latest > 50);
		});
		return () => unsubscribe();
	}, [scrollY]);

	return (
		<div>
			<motion.header
				className="fixed top-0 left-0 right-0 z-50 p-7 md:px-16 lg:px-24"
				initial="top"
				animate={isScrolled ? "scrolled" : "top"}
				variants={headerVariants}
				transition={{ duration: 0.3 }}
			>
				<nav className="flex justify-between items-center max-w-7xl mx-auto">
					<Link href="#" className="flex-shrink-0" aria-label="Home">
						<Logowhite className="w-12 h-12" />
					</Link>

					<ul className="hidden text-2xl font-bold md:flex space-x-12">
						<li>
							<Link
								href="#Profile"
								className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
							>
								Profile
							</Link>
						</li>
						<li>
							<Link
								href="#Projects"
								className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href="#contact"
								className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
							>
								Contact
							</Link>
						</li>
					</ul>

					<button
						className="md:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle menu"
					>
						<Menu size={24} />
					</button>
				</nav>
			</motion.header>
			{isMobileMenuOpen && (
				<motion.div
					className="fixed inset-0 z-40 bg-gray-900 bg-opacity-90 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<nav className="flex flex-col items-center justify-center h-full">
						<a
							href="#Profile"
							className="text-2xl mb-6"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Profile
						</a>
						<a
							href="#Projects"
							className="text-2xl mb-6"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Projects
						</a>
						<a
							href="#contact"
							className="text-2xl mb-6"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Contact
						</a>
					</nav>
				</motion.div>
			)}
		</div>
	);
}
