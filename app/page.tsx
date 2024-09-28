"use client"

import { useState, useEffect } from 'react'
import { motion, useAnimation, useScroll } from 'framer-motion'
import Particles from "@/components/ui/particles";
import {Menu} from "lucide-react"

export default function MinimalPortfolio() {
  const [typedText, setTypedText] = useState<string[]>([])
  const controls = useAnimation()

  const fullText = "Hello there!👋\n I'm amatatu!"
  const color = "#ffffff";
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const headerVariants = {
    top: {
      backgroundColor: "rgba(10, 29, 58, 0)",
      backdropFilter: "blur(0px)",
    },
    scrolled: {
      backgroundColor: "rgba(10, 29, 58, 0.8)",
      backdropFilter: "blur(10px)",
    },
  }

  const projects = [
    { title: "Project 1", description: "A brief description of Project 1", image: "/placeholder.svg?height=300&width=300" },
    { title: "Project 2", description: "A brief description of Project 2", image: "/placeholder.svg?height=300&width=300" },
    { title: "Project 3", description: "A brief description of Project 3", image: "/placeholder.svg?height=300&width=300" },
    { title: "Project 4", description: "A brief description of Project 4", image: "/placeholder.svg?height=300&width=300" },
  ];

  useEffect(() => {
    const typeText = async () => {
      await controls.start({ opacity: 1 })
      const lines = fullText.split("\n")

      for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex];
        for (let charIndex = 0; charIndex <= line.length; charIndex++) {
          setTypedText(prev => {
            const newLines = [...prev];
            newLines[lineIndex] = line.slice(0, charIndex);
            console.log(newLines)
            return newLines;
          })
          await new Promise(resolve => setTimeout(resolve, 80))
        }
        if (lineIndex < lines.length - 1) {
          setTypedText(prev => [...prev, ''])
        }
      }
    }
    typeText()
  }, [controls, fullText])
  return (

    <div className=" min-h-screen  text-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <svg preserveAspectRatio="xMidYMid slice" id="visual" viewBox="0 0 900 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#001220"></rect><defs><linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#0a1d3a" stop-opacity="1"></stop><stop offset="80%" stop-color="#0a1d3a" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#0a1d3a" stop-opacity="1"></stop><stop offset="80%" stop-color="#051a31" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_2" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#031629" stop-opacity="1"></stop><stop offset="80%" stop-color="#051a31" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_3" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#031629" stop-opacity="1"></stop><stop offset="80%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#0a1d3a" stop-opacity="1"></stop><stop offset="80%" stop-color="#0a1d3a" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#051a31" stop-opacity="1"></stop><stop offset="80%" stop-color="#0a1d3a" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_2" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#051a31" stop-opacity="1"></stop><stop offset="80%" stop-color="#031629" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_3" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#001220" stop-opacity="1"></stop><stop offset="80%" stop-color="#031629" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(900, 0)"><path d="M0 324.5C-34 295 -68 265.6 -102.9 248.5C-137.8 231.5 -173.6 226.9 -209.3 209.3C-245 191.7 -280.6 161.2 -299.8 124.2C-319 87.1 -321.7 43.6 -324.5 0L0 0Z" fill="#011424"></path><path d="M0 243.4C-25.5 221.3 -51 199.2 -77.2 186.4C-103.4 173.6 -130.2 170.2 -157 157C-183.7 143.8 -210.5 120.9 -224.8 93.1C-239.2 65.4 -241.3 32.7 -243.4 0L0 0Z" fill="#03182d"></path><path d="M0 162.2C-17 147.5 -34 132.8 -51.5 124.3C-68.9 115.7 -86.8 113.4 -104.7 104.7C-122.5 95.9 -140.3 80.6 -149.9 62.1C-159.5 43.6 -160.9 21.8 -162.2 0L0 0Z" fill="#071b36"></path><path d="M0 81.1C-8.5 73.8 -17 66.4 -25.7 62.1C-34.5 57.9 -43.4 56.7 -52.3 52.3C-61.2 47.9 -70.2 40.3 -74.9 31C-79.7 21.8 -80.4 10.9 -81.1 0L0 0Z" fill="#0a1d3a"></path></g><g transform="translate(0, 600)"><path d="M0 -324.5C36.6 -307.1 73.2 -289.8 114.8 -277.2C156.4 -264.6 202.8 -256.7 229.5 -229.5C256.1 -202.2 262.8 -155.5 275.3 -114C287.8 -72.6 306.2 -36.3 324.5 0L0 0Z" fill="#011424"></path><path d="M0 -243.4C27.5 -230.4 54.9 -217.3 86.1 -207.9C117.3 -198.4 152.1 -192.5 172.1 -172.1C192 -151.6 197.1 -116.6 206.5 -85.5C215.9 -54.4 229.6 -27.2 243.4 0L0 0Z" fill="#03182d"></path><path d="M0 -162.2C18.3 -153.6 36.6 -144.9 57.4 -138.6C78.2 -132.3 101.4 -128.4 114.7 -114.7C128 -101.1 131.4 -77.8 137.7 -57C143.9 -36.3 153.1 -18.1 162.2 0L0 0Z" fill="#071b36"></path><path d="M0 -81.1C9.2 -76.8 18.3 -72.4 28.7 -69.3C39.1 -66.1 50.7 -64.2 57.4 -57.4C64 -50.5 65.7 -38.9 68.8 -28.5C72 -18.1 76.5 -9.1 81.1 0L0 0Z" fill="#0a1d3a"></path></g></svg>

      </div>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 py-4 px-8 md:px-16 lg:px-24"
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        variants={headerVariants}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <a href="#" className="flex-shrink-0" aria-label="Home">
            <svg width="90" height="34" viewBox="0 0 290 234" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.5 233.5C19.3 191.5 17.3333 171.333 14 166.5C5.66667 146.667 -5.1 96 18.5 52C26 70.5 35.3333 59.3333 37.5 53C39.7237 46.5 35.4 37.2 23 42C34.6667 16.3333 73.1 -24.1 133.5 19.5C157 43.6667 202 99.6 194 130C190.333 146.5 170.6 180.8 121 186C119.333 186.5 117.3 188.4 122.5 192C129 196.5 187.5 179.5 202.5 132C201 141 212.9 167.9 272.5 203.5C279.833 210 293.4 224.7 289 231.5L0.5 233.5ZM93.5 39.5C85.3333 30.3333 64.4 17.5 46 39.5C40.8 50.3 40.8333 70 41.5 78.5C39.9 92.5 56.8333 132 65.5 150C83.5 126 92.6667 100 95 90C101.4 65.6 96.6667 46.1667 93.5 39.5ZM129 39.5C124.667 38 115 40 116 52.5C116.16 54.4944 119.5 64.5 130.5 60.5C137.5 56.5 134.778 41.5 129 39.5Z" fill="white" />
              <path d="M54.5 42C64.9 32 79.8333 37.8333 86 42C89.3333 49.5 94.3 69.2 87.5 88C84.5 98.5 76.2 122.2 67 133C56.8333 114.833 40.1 71.2 54.5 42Z" fill="white" />
            </svg>
          </a>

          <ul className="hidden md:flex space-x-12">
            <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
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
            <a href="#about" className="text-2xl mb-6" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="text-2xl mb-6" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-2xl mb-6" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
        </motion.div>
      )}
      {/* <Image 
        className='fixed inset-0 z-0' 
        src="/blob-scene-haikei.png" 
        layout='fill'
        objectFit='cover' 
        alt="image" 
        /> */}

      <Particles
        className="fixed inset-0 z-10"
        quantity={30}
        ease={100}
        color={color}
        refresh
      />
      <main className="px-8 md:px-16 lg:px-24">

        <section id="hello" className=" flex flex-col items-center mt-[2rem] min-h-[calc(100vh-100px)] relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // 初期状態でスケールを小さくする
            animate={{ opacity: 1, scale: 1 }} // アニメーション後に元のスケールに戻す
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
            className="mb-12 "
          >
            <div className='my-12 flex flex-col items-center'>
              <div className='bg-haikei'></div>
              <motion.h1
                className="text-3xl font-bold my-10 md:text-5xl lg:text-6xl"
                initial={{ opacity: 0 }}
                animate={controls}
              >
                {/* <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 0.7, repeatType: 'reverse' }}
                >
                  <div className='w-19 bg-w
                  hite'></div>
                </motion.span> */}
                {typedText.map((line, index) => (
                  <span key={index} className="block">
                    {index == 1 ? (
                      <>
                        <span className="inline-block">{line.slice(0, 4)}</span>
                        <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-500 md:text-6xl lg:text-8xl">
                          {line.slice(4)}
                        </span>
                      </>
                    ) : (
                      <span>{line}</span>

                    )
                    }
                    {index === typedText.length - 1 && <span className="cursor"></span>}
                  </span>
                ))}
              </motion.h1>
            </div>

          </motion.div>
          <div className=' c-scrolldown'>
            <div className='c-line'></div>
          </div>
        </section>

        <section id="projects" className=" py-16 relative z-30">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.05 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <style jsx>{`
      .cursor{
        width:10px;
        height:60px;
        background-color:white;
        display:inline-block;
        animation:blink 1s step-end infinite;
        margin-left:15px;
      }
      @keyframes blink{
        50%{
          opacity:0;
        }
      }
      
      .c-scrolldown {
          width: 1px;
          height: 120px;
          position: absolute;
          bottom: 80px;
          left: 0;
          right: 0;
          margin: 0 auto;
          overflow: hidden;
        }
        .c-scrolldown .c-line {
          width: 100%;
          height: 100%;
          display: block;
          background: linear-gradient(to bottom, white 50%, rgba(255, 255, 255, 0) 50%);
          background-position: 0 -120px;
          background-size: 100% 200%;
          animation: scrolldown 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
        }
        @keyframes scrolldown {
          0% {
            background-position: 0 -120px;
          }
          75% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 120px;
          }
        }
    `}</style>
    </div>
  )
}
