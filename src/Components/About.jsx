import React from 'react'
import { ABOUT_TEXT } from '../constants'
import profilePic from '../assets/silas.png'
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-gray-400 pb-4'>
        
      <h1 className='my-10 text-purple-900 text-center text-4xl'>About <span className='text-gray-300'>Me</span></h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center mb-6'>
                <motion.img
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className='rounded-2xl h-[250px] w-50' src={profilePic} alt="" />
            </div>
            </div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:justify-start'>
                 <p className='text-gray-400 my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
              </div>
            </motion.div>
      </div>
    </div>
  )
}

export default About