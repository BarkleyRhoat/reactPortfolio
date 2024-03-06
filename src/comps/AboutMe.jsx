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
                    Hello I am Barkley and I am a full stack developer. I have a passion for creating and building things. I am a quick learner and I am always looking for new challenges. I am a team player.
                   
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
                        </motion.li>
                        <a href='hhttps://www.w3schools.com/js/DEFAULT.asp'><TbBrandJavascript className='stack-icon' /></a>
                </motion.ul>
            </div>
        </div>
    );
}

export default AboutMe;