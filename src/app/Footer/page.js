'use client'
import React from 'react'
import './footer.css'
import { motion } from "framer-motion"
export default function Footer() {
  return (
   <div className="fwrapper">
    <div className="fwrapper-top">
      <div className="first">
        <motion.div className='ram' whileTap={{color:"red"}}>HOME</motion.div>
        <motion.div className='ram' whileTap={{color:"red"}}>Documents</motion.div>
        <motion.div className='ram' whileTap={{color:"red"}}>FAQ</motion.div>
      </div>
      <div className="first second">
        <motion.div className='ram'  whileTap={{color:"red"}}>Health Log</motion.div>
        <motion.div className='ram' whileTap={{color:"red"}}>Weather</motion.div>
        <motion.div className='ram' whileTap={{color:"red"}}>Contact US</motion.div>

      </div>
    </div>
    <div className="fwrapper-bottom">HEALTH VIBE</div>
   </div>
  )
}
