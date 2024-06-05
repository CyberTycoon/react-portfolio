import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-gray-400 pb-4 px-3'>
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className='text-gray-500 text-center text-4xl my-20'>Projects</motion.h1>
      <div>
        {PROJECTS.map((project,index) => (
           
                <div key={index} className='flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                <motion.img 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:0.5}}
                src={project.image} alt={project.title} w={150} h={100} className='mb-10 rounded mt-5'/>
                </div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                className='w-full max-w-xl lg:w-3/4  lg:ml-20 text-white'>
                <h6 className='mt-4 text-2xl'>{project.title}</h6>
                <p className='mb-7 text-neutral-500 pt-2 text-1xl'>{project.description}</p>
                {project.technologies.map((tech,index) => (<span key={index} className='mr-2 rounded bg-neutral-900 py-1 px-2 text-sm text-purple-900 font-medium '>{tech}</span>))}
                </motion.div>
                </div>
        ))}
      </div>
    </div>
  )
}

export default Projects