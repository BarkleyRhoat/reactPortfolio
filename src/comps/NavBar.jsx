import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from 'react-icons/fi';
import ReactSwitch from "react-switch";
import {navBarVariants} from "../variants/navBarVariants";
import '../index.css'


const NavBar = ({toggleTheme}) => {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
        toggleTheme();
    };

    const handleDownload = () => {
      const resumePath = './Resume(6).pdf';
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Resume(6).pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
        <div className="sidenav">
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' 
        href="#Home">Home</motion.a>
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover'
         href="#About">Bio</motion.a>
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' 
        href="#Projects">Projects</motion.a>
         <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover'
        onClick={handleDownload}
        href="#Resume">Resume</motion.a>
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' 
        href="#Contact">Contact</motion.a>
      <ReactSwitch
        onChange={handleChange}
        checked={checked}
        uncheckedIcon={< FiSun className="sun" />}
        checkedIcon={< FiMoon className="moon" />}
        className='switch switch-background'>
        </ReactSwitch>


    </div>
    )
}

export default NavBar;