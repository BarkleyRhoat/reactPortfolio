import React from 'react';
import { anticipate, motion } from 'framer-motion';
import { PiLinkedinLogoFill, PiGithubLogoFill } from 'react-icons/pi'
import {childVariants, containerVariants, headerVariants, paragraphVariant, iconVariants} from '../variants/homeVariants'

// Functional component for the Home Page
const HomePage = () => {
    return (
        // Framer Motion: Applying motion to the main container div with predefined variants
        <motion.div
            variants={containerVariants}
            initial='initial'
            transition='transition'
            animate='animate'
            className='home-div'>
            <motion.h1
                variants={headerVariants}
                animate='animate'
                transition='transition'
                className='title'>Barkley Rhoat</motion.h1> 
            <motion.p className='border'
                variants={childVariants}
                transition='transition'
                initial='initial'
                animate='animate'
            ></motion.p>
            <motion.p
            // Framer Motion: Animated paragraph with predefined variants
                variants={paragraphVariant}
                initial='initial'
                animate='animate'
                transition='transition'
            >RhoatDesigns</motion.p>
            {/* Container for social media icons */}
            <div className='icon-div'>
                <motion.a
                // Framer Motion: Animated LinkedIn icon with predefined variants
                    variants={iconVariants}
                    initial='initial'
                    animate='animate'
                    transition='transition'
                    whileHover='whileHover'
                    href='https://www.linkedin.com/in/barkleyrhoat/'
                ><PiLinkedinLogoFill className='home-icon'></PiLinkedinLogoFill></motion.a>
                <motion.a
                // Animated GitHub icon with predefined variants
                    variants={iconVariants}
                    initial='initial'
                    animate='animate'
                    transition='transition'
                    whileHover='whileHover'
                    href='https://github.com/BarkleyRhoat'
                ><PiGithubLogoFill className='home-icon'></PiGithubLogoFill></motion.a>
            </div>
        </motion.div>
    );
}

export default HomePage