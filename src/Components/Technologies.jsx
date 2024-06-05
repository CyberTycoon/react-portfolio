import React from 'react'
import { SiReact } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial:{y:-10},
  animate: {
    y:[10,-10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-gray-500 pb-24'>
     <motion.h1
     whileInView={{opacity:1, y:0}}
     initial={{opacity:0, y:-100}}
     transition={{duration:1.5}}
     className='my-20 text-gray-500 text-center text-4xl'>Technologies</motion.h1>
     <motion.div
     whileInView={{opacity:1, x:0}}
     initial={{opacity:0, x:-100}}
     transition={{duration:1.5}}
     className='flex flex-wrap items-center justify-center gap-4'>
      <motion.div
      variants={iconVariants(2)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiReact className='text-cyan-500 text-4xl'/>
      </motion.div>
      <motion.div 
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiNextjsFill className='text-white text-4xl'/>
      </motion.div>
      <motion.div
      variants={iconVariants(2)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiMongodb className='text-green-500 text-4xl'/>
      </motion.div>
      <motion.div
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiTypescript className='text-blue-500 text-4xl'/>
      </motion.div>
      <motion.div
      variants={iconVariants(2)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiTailwindCssFill className='text-blue-500 text-4xl'/>
      </motion.div>
     </motion.div>
    </div>
  )
}

export default Technologies