import {motion} from 'framer-motion';

export default function Projects() {

  const projects = [
    { title: "Project 1", description: "A brief description of Project 1", image: "/placeholder.svg?height=300&width=300" },
    { title: "Project 2", description: "A brief description of Project 2", image: "/placeholder.svg?height=300&width=300" },
    { title: "Project 3", description: "A brief description of Project 3", image: "/placeholder.svg?height=300&width=300" },
    { title: "Project 4", description: "A brief description of Project 4", image: "/placeholder.svg?height=300&width=300" },
  ];

  return(
    <section id="Projects" className="offset-anchor py-16 relative z-30">
    <h2 className="text-5xl font-bold text-center mb-[8rem]">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
  )
}