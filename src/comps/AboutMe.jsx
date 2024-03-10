import React from 'react'
import {TbBrandReact, TbBrandHtml5, TbBrandCss3, TbBrandBootstrap, TbBrandMongodb, TbBrandMysql, TbBrandJavascript  } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { ulVariants, iconVariants } from '../variants/aboutPageVariants';
import photo from '../assets/aboutMePhoto.JPG'

const AboutMe = () => {
    return (
        <div className='about-me-container'>
            <div className="about-me">
                <p className='about-me-paragraph'>
                   
Greetings! I'm Barkley, your dynamic full-stack developer extraordinaire! Infused with an insatiable passion for crafting and constructing digital marvels, I find unparalleled satisfaction in bringing my creative visions to life. The thrill of completing a project, born from the dedication and time invested, is an unmatched high for me.

My penchant for perpetual growth propels me into the realm of quick learning, always hungry for fresh challenges that push the boundaries of my skill set. A devoted team player, I thrive in collaborative environments, where collective efforts amplify the magic of creation. Let's embark on the journey of innovation together!
                   
                </p>
                <div>
                    <img src={photo} className='shot' />
                </div>
            </div>
            {/* <div>Skills</div> */}
            <div>
                <motion.ul
                    variants={ulVariants}
                    animate='animate'
                    transition='transition'
                    className='stack'>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        initial='initial'
                        animate='animate'
                        transition='transition'>
                        <a href='https://reactjs.org/'><TbBrandReact className='stack-icon' /></a> 
                        
                    </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/html/'><TbBrandHtml5 className='stack-icon' /></a>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/Css/'><TbBrandCss3 className='stack-icon' /></a>
                         </motion.li>
                    <motion.li variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://getbootstrap.com/'><TbBrandBootstrap className='stack-icon' /></a>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.mongodb.com/'><TbBrandMongodb className='stack-icon' /></a>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.mysql.com/'><TbBrandMysql className='stack-icon' /></a>
                       </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='hhttps://www.w3schools.com/js/DEFAULT.asp'><TbBrandJavascript className='stack-icon' /></a>
                        </motion.li>
                        
                </motion.ul>
            </div>
        </div>
    );
}

export default AboutMe;