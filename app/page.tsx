"use client"

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Particles from "@/components/ui/particles";
import Image from 'next/image'

export default function MinimalPortfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [typedText, setTypedText] = useState<string[]>([])
  const controls = useAnimation()

  const fullText = "Hello there!\n I'm amatatu!"
  const color = "#ffffff";


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

    <div className=" min-h-screen bg-gray-950 text-white overflow-hidden ">
      <header className="py-8 px-8 z-10 relative md:px-16 lg:px-24">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <a href="#" className="flex-shrink-0">
            <svg width="90" height="34" viewBox="0 0 290 234" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.5 233.5C19.3 191.5 17.3333 171.333 14 166.5C5.66667 146.667 -5.1 96 18.5 52C26 70.5 35.3333 59.3333 37.5 53C39.7237 46.5 35.4 37.2 23 42C34.6667 16.3333 73.1 -24.1 133.5 19.5C157 43.6667 202 99.6 194 130C190.333 146.5 170.6 180.8 121 186C119.333 186.5 117.3 188.4 122.5 192C129 196.5 187.5 179.5 202.5 132C201 141 212.9 167.9 272.5 203.5C279.833 210 293.4 224.7 289 231.5L0.5 233.5ZM93.5 39.5C85.3333 30.3333 64.4 17.5 46 39.5C40.8 50.3 40.8333 70 41.5 78.5C39.9 92.5 56.8333 132 65.5 150C83.5 126 92.6667 100 95 90C101.4 65.6 96.6667 46.1667 93.5 39.5ZM129 39.5C124.667 38 115 40 116 52.5C116.16 54.4944 119.5 64.5 130.5 60.5C137.5 56.5 134.778 41.5 129 39.5Z" fill="white" />
              <path d="M54.5 42C64.9 32 79.8333 37.8333 86 42C89.3333 49.5 94.3 69.2 87.5 88C84.5 98.5 76.2 122.2 67 133C56.8333 114.833 40.1 71.2 54.5 42Z" fill="white" />
            </svg>
          </a>


          {/* <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="900" height="600" fill="#6600FF"></rect><g filter="url(#blur1)"><circle cx="813" cy="303" fill="#00CC99" r="357"></circle><circle cx="807" cy="546" fill="#6600FF" r="357"></circle><circle cx="623" cy="561" fill="#00CC99" r="357"></circle><circle cx="179" cy="367" fill="#00CC99" r="357"></circle><circle cx="383" cy="365" fill="#6600FF" r="357"></circle><circle cx="247" cy="598" fill="#00CC99" r="357"></circle></g></svg> */}


          <ul className="flex space-x-6 md:space-x-12">
            <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>
        <Image className='z-0' src="/blob-scene-haikei.png" layout='fill'objectFit='cover' alt="image" />

      <Particles
        className="fixed inset-0 z-5"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      <main className="px-8 md:px-16 lg:px-24">

        <section id="about" className=" flex flex-col items-center min-h-[calc(100vh-80px)] text-center">
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
                    {index === typedText.length - 1 && <span className="curosor"></span>}
                  </span>
                ))}
              </motion.h1>
            </div>

          </motion.div>
        </section>

        <section id="projects" className=" py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className=" p-4 rounded-lg cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hoveredProject === index ? 1 : 0.5, y: hoveredProject === index ? 0 : 20 }}
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
        height:47px;
        background-color:white;
        display:inline-block;
        animation:blink 1s step-end infinite;
        margin-left:10px;
      }
      @keyframes blink{
        50%{
          opacity:0;
        }
      }
      .bg-haikei {
      background-image: url('/app/public/blurry-gradient-haikei.svg');
            }
    `}</style>
    </div>
  )
}
