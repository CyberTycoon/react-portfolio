import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/kevinRushProfile.png'
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5
    }
    
  }
})

const Hero = () => {
  return (
    <div className='border-b border-gray-400 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center md:items-start'>
            <motion.h1 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='py-6  font-medium text-gray-300  text-[50px] decoration-slate-300 font-serif tracking-tight md:mt-10 lg:text-[100px]'>
              Silas O<motion.span 
               variants={container(0.5)}
               initial="hidden"
               animate="visible"
              className='bg-gradient-to r from-pink-300 via-slate-500 to bg-fuchsia-800 bg-clip-text text-6xl  text-transparent '>kanlawon</motion.span>
            </motion.h1>
            <motion.span 
             variants={container(1)}
             initial="hidden"
             animate="visible"
            className='bg-gradient-to r from-pink-300 via-slate-500 to bg-fuchsia-800 bg-clip-text text-3xl lg:5xl tracking-tight text-transparent'>MERN Stack Developer</motion.span>
            <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-xl py-6 text-gray-400 text-lg tracking-tighter'>{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center h-full w-full'>
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}
            src={profilePic} alt="profilePic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero