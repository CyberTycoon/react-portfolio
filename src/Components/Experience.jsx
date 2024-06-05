import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
        whileInView={{opacity: 1,y:0}}
        initial={{opacity: 0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl text-gray-400'>Experience</motion.h1>
        <div className='text-gray-400'>
            {EXPERIENCES.map((Experience, index)=> (<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{Experience.year}</p>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x: 0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className='w-full max-w-xl lg:3/4'>
                    <h6 className='mb-2 font-semibold'>{Experience.role }- <span className='text-sm text-purple-300'>{Experience.company}</span></h6>
                    <p className='mb-4 text-400'>{Experience.description}</p>
                    {Experience.technologies.map((tech,index)=>{
                        return (
                            <span key={index} className='inline-block mr-1 bg-purple-900 px-2 py-1 text-xs font-semibold text-neutral-200 '>{tech}</span>
                        )
                    })}
                </motion.div>

                </div>))}
        </div>
    </div>
  )
}

export default Experience