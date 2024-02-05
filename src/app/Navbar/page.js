'use client'
import React from 'react'
import './Navbar.css'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation';
export default function Navbar() {
  const router=useRouter();
  return (
   <nav className='nwrapper'>
    <div className="nwrapper-left">
<div className="image"></div>
    </div>
    <div className="nwrapper-right">
   <motion.div className='menu'>
    <motion.div whileTap={{color:'red'}}className='menu-list' onClick={()=>router.push("/")}>HOME</motion.div>
    <motion.div whileTap={{color:'red'}}className='menu-list'>Documents</motion.div>
    <motion.div whileTap={{color:'red'}}className='menu-list'onClick={()=>router.push('/Faq')}>FAQ</motion.div>
    <motion.div whileTap={{color:'red'}}className='menu-list' onClick={()=>router.push('/Bmi')}>Health Logs</motion.div>
    <motion.div whileTap={{color:'red'}}className='menu-list' onClick={()=>router.push('/Contact')}>Contact US</motion.div>
   </motion.div>
    </div>
   </nav>
  )
}
