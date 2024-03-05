import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxSun, RxMoon } from 'react-icons/all';
import ReactSwitch from "react-switch";
import {navBarVariants} from "../variants/navBarVariants";

const NavBar = ({toggleTheme}) => {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
        toggleTheme();
    };

    return (
        <div className="sidenav">
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' href="#Home">Home</motion.a>
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' href="#About">Bio</motion.a>
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' href="#Projects">Projects</motion.a>
      <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' href="#Contact">Contact</motion.a>
        {/* <motion.a
        variants={navBarVariants}
        animate='animate'
        whileHover='whileHover' href="#Resume">Resume</motion.a> */}
      <ReactSwitch
        onChange={handleChange}
        checked={checked}
        uncheckedIcon={< RxSun className="sun" />}
        checkedIcon={< RxMoon className="moon" />}
        className='switch'></ReactSwitch>


    </div>
    )
}

export default NavBar;