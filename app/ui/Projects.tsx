"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X} from 'lucide-react';
import { Icon } from '@iconify/react';
import nextjsIcon from '@iconify-icons/logos/nextjs-icon';
import tailwindIcon from '@iconify-icons/logos/tailwindcss-icon';
import typeScriptIcon from '@iconify-icons/logos/typescript-icon';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import postgresqlIcon from '@iconify-icons/logos/postgresql';
interface Technology {
    name: string;
    icon: React.ElementType;
}

const technologyIcons: { [key: string]: Technology } = {
    "Next.js": { name: 'Next.js', icon: () => <Icon icon={nextjsIcon} /> },
    "Tailwind CSS": { name: 'Tailwind CSS', icon: ()=><Icon icon={tailwindIcon}/ >},
    "TypeScript": { name: 'TypeScript', icon: ()=><Icon icon={typeScriptIcon}/ >},
    "Node.js": { name: 'Node.js', icon: ()=><Icon icon={nodejsIcon}/ >},
    "PostgreSQL": { name: 'PostgreSQL', icon: ()=><Icon icon={postgresqlIcon}/ >},
};

interface Project {
    title: string;
    description: string;
    image: string;
    longDescription: string;
    url: string;
    githubUrl: string;
    technologies: string[];
}

const projects: Project[] = [
    {
        title: "Portfolio",
        description: "This Portfolio",
        image: "/Portfolio.png",
        longDescription: "フロントの勉強用に作りました！",
        url: "https://amatatu.com",
        githubUrl: "https://github.com/nematatu/next-portfolio",
        technologies: ["Next.js", "Tailwind CSS","TypeScript"]
    },
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="Projects" className="offset-anchor py-16 relative z-30">
            <h2 className="text-5xl font-bold text-center mb-[8rem]">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-4 rounded-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => setSelectedProject(project)}
                    >
                        <Image width={300} height={100} src={project.image} alt={project.title} className="w-full h-auto rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-400">{project.description}</p>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 3 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className='bg-gray-800 p-8 rounded-lg max-w-2xl w-full mx-4 relative'
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                                aria-label='Close modal'
                            >
                                <X size={24} />
                            </button>
                            <h3 className='text-3xl text-center font-bold mb-8'>              {selectedProject.title}
                            </h3>
                            <Image src={selectedProject.image} alt={selectedProject.title} width={600} height={200} className='w-full h-auto rounded-lg mb-4' />
                            <p className='text-gray-300 my-6'>{selectedProject.longDescription}</p>
                            <div className='my-4 flex flex-row space-x-7'>
                                <h4 className='text-xl font-semibold mb-2'>
                                    Technologies Used :
                                </h4>
                                <div className='flex flex-wrap gap-4'>
                                    {selectedProject.technologies.map((tech, index) => {
                                        const technology = technologyIcons[tech]
                                        if (!technology) return null
                                        const Icon = technology.icon
                                        return (
                                            <div key={index} className='flex flex-col items-center'>
                                                <Icon size={32} className='text-gray-300' aria-hidden="true"/>
                                                <span className='text-xs text-gray-400 mt-1'>{technology.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className=" flex space-x-4">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Visit Project
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  GitHub Repository
                </a>
              </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}  