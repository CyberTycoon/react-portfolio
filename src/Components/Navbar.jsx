import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import {motion} from "framer-motion"

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

const Navbar = () => {
    return (
        <nav className=' mb-20 flex items-center justify-between py-6 '>
            <div className='flex flex-shrink-0 items-center'>
                <motion.h1
                 variants={container(0)}
                 initial="hidden"
                 animate="visible"
                className=' bg-gradient-to r from-pink-300 via-slate-500 to bg-gray-300 bg-clip-text text-4xl tracking-tight text-transparent font-extrabold text-[50px] font-serif '>SO</motion.h1>
            </div>
            <div className='flex m-8 items-center justify-center gap-4 text-3xl text-gray-300'>
                <FaLinkedin/>
                <FaGithub />
                <FaInstagram />
                <FaSquareXTwitter />
            </div>
        </nav>
    )
}

export default Navbar