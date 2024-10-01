import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu } from "lucide-react"
import Link from 'next/link';
import '@/app/styles/Header.css'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()

    const headerVariants = {
        top: {
            backgroundColor: "rgba(10, 29, 58, 0)",
            backdropFilter: "blur(0px)",
        },
        scrolled: {
            backgroundColor: "rgba(10, 29, 58, 0.8)",
            backdropFilter: "blur(20px)",
        },
    }
    useEffect(() => {
        const unsubscribe = scrollY.onChange((latest) => {
            setIsScrolled(latest > 50)
        })
        return () => unsubscribe()
    }, [scrollY])

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
                        <svg width="90" height="34" viewBox="0 0 290 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.5 233.5C19.3 191.5 17.3333 171.333 14 166.5C5.66667 146.667 -5.1 96 18.5 52C26 70.5 35.3333 59.3333 37.5 53C39.7237 46.5 35.4 37.2 23 42C34.6667 16.3333 73.1 -24.1 133.5 19.5C157 43.6667 202 99.6 194 130C190.333 146.5 170.6 180.8 121 186C119.333 186.5 117.3 188.4 122.5 192C129 196.5 187.5 179.5 202.5 132C201 141 212.9 167.9 272.5 203.5C279.833 210 293.4 224.7 289 231.5L0.5 233.5ZM93.5 39.5C85.3333 30.3333 64.4 17.5 46 39.5C40.8 50.3 40.8333 70 41.5 78.5C39.9 92.5 56.8333 132 65.5 150C83.5 126 92.6667 100 95 90C101.4 65.6 96.6667 46.1667 93.5 39.5ZM129 39.5C124.667 38 115 40 116 52.5C116.16 54.4944 119.5 64.5 130.5 60.5C137.5 56.5 134.778 41.5 129 39.5Z" fill="white" />
                            <path d="M54.5 42C64.9 32 79.8333 37.8333 86 42C89.3333 49.5 94.3 69.2 87.5 88C84.5 98.5 76.2 122.2 67 133C56.8333 114.833 40.1 71.2 54.5 42Z" fill="white" />
                        </svg>
                    </Link>

                    <ul className="hidden text-2xl font-bold md:flex space-x-12">
                        <li><Link href="#Profile" className="hover-effect-header">Profile</Link></li>
                        <li><Link href="#Projects" className="hover-effect-header">Projects</Link></li>
                        <li><Link href="#contact" className="hover-effect-header">Contact</Link></li>
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
                        <a href="#Profile" className="text-2xl mb-6" onClick={() => setIsMobileMenuOpen(false)}>Profile</a>
                        <a href="#Projects" className="text-2xl mb-6" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                        <a href="#contact" className="text-2xl mb-6" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                    </nav>
                </motion.div>
            )}
        </div>
    );
};