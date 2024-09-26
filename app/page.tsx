"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MinimalPortfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  const projects = [
    { title: "Project 1", description: "A brief description of Project 1", image: "/placeholder.svg?height=300&width=300" },
    { title: "Project 2", description: "A brief description of Project 2", image: "/placeholder.svg?height=300&width=300" },
    { title: "Project 3", description: "A brief description of Project 3", image: "/placeholder.svg?height=300&width=300" },
    { title: "Project 4", description: "A brief description of Project 4", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="py-8 px-8 md:px-16 lg:px-24">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <a href="#" className="flex-shrink-0">
            <svg width="90" height="34" viewBox="0 0 290 234" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.5 233.5C19.3 191.5 17.3333 171.333 14 166.5C5.66667 146.667 -5.1 96 18.5 52C26 70.5 35.3333 59.3333 37.5 53C39.7237 46.5 35.4 37.2 23 42C34.6667 16.3333 73.1 -24.1 133.5 19.5C157 43.6667 202 99.6 194 130C190.333 146.5 170.6 180.8 121 186C119.333 186.5 117.3 188.4 122.5 192C129 196.5 187.5 179.5 202.5 132C201 141 212.9 167.9 272.5 203.5C279.833 210 293.4 224.7 289 231.5L0.5 233.5ZM93.5 39.5C85.3333 30.3333 64.4 17.5 46 39.5C40.8 50.3 40.8333 70 41.5 78.5C39.9 92.5 56.8333 132 65.5 150C83.5 126 92.6667 100 95 90C101.4 65.6 96.6667 46.1667 93.5 39.5ZM129 39.5C124.667 38 115 40 116 52.5C116.16 54.4944 119.5 64.5 130.5 60.5C137.5 56.5 134.778 41.5 129 39.5Z" fill="white" />
              <path d="M54.5 42C64.9 32 79.8333 37.8333 86 42C89.3333 49.5 94.3 69.2 87.5 88C84.5 98.5 76.2 122.2 67 133C56.8333 114.833 40.1 71.2 54.5 42Z" fill="white" />
            </svg>
          </a>
          <ul className="flex space-x-6 md:space-x-12">
            <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="px-8 md:px-16 lg:px-24">
        <section id="about" className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.svg
              className="w-full h-auto"
              viewBox="0 0 290 234"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M0.5 233.5C19.3 191.5 17.3333 171.333 14 166.5C5.66667 146.667 -5.1 96 18.5 52C26 70.5 35.3333 59.3333 37.5 53C39.7237 46.5 35.4 37.2 23 42C34.6667 16.3333 73.1 -24.1 133.5 19.5C157 43.6667 202 99.6 194 130C190.333 146.5 170.6 180.8 121 186C119.333 186.5 117.3 188.4 122.5 192C129 196.5 187.5 179.5 202.5 132C201 141 212.9 167.9 272.5 203.5C279.833 210 293.4 224.7 289 231.5L0.5 233.5Z"
                variants={draw}
                custom={0}
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <motion.path
                d="M93.5 39.5C85.3333 30.3333 64.4 17.5 46 39.5C40.8 50.3 40.8333 70 41.5 78.5C39.9 92.5 56.8333 132 65.5 150C83.5 126 92.6667 100 95 90C101.4 65.6 96.6667 46.1667 93.5 39.5Z"
                variants={draw}
                custom={1}
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <motion.path
                d="M129 39.5C124.667 38 115 40 116 52.5C116.16 54.4944 119.5 64.5 130.5 60.5C137.5 56.5 134.778 41.5 129 39.5Z"
                variants={draw}
                custom={2}
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <motion.path
                d="M54.5 42C64.9 32 79.8333 37.8333 86 42C89.3333 49.5 94.3 69.2 87.5 88C84.5 98.5 76.2 122.2 67 133C56.8333 114.833 40.1 71.2 54.5 42Z"
                variants={draw}
                custom={3}
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </motion.svg>
          </motion.div>
          </section>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            山田太郎
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            フルスタックエンジニア。ミニマルなデザインと効率的なコードで、
            ユーザー体験を向上させるウェブアプリケーションを作成しています。
          </motion.p>

        <section id="projects" className="py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative aspect-square"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-24 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-xl text-gray-400 mb-4">
            お問い合わせは以下のメールアドレスまでお願いします：
          </p>
          <a href="mailto:contact@example.com" className="text-2xl hover:text-gray-300 transition-colors">
            contact@example.com
          </a>
        </section>
      </main>

      <footer className="text-center text-gray-500 py-8">
        <p>&copy; 2024 山田太郎. All rights reserved.</p>
      </footer>
    </div>
  )
}