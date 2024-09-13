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
                   
                Hi, I'm Barkley, a full-stack developer with a passion for building dynamic digital solutions. I love turning creative ideas into reality and find great satisfaction in seeing projects come to life after investing time and effort.

                I'm always eager to learn and embrace new challenges that push me to grow as a developer. I thrive in collaborative environments where teamwork fuels innovation, and I'm excited to be part of projects that bring fresh ideas to the table. Let's create something amazing together!
                   
                </p>
                <div>
                    <img src={photo} className='shot' />
                </div>
            </div>
            <motion.div
        className='skills-text'>
        Skills
    </motion.div>
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
                        <a href='https://reactjs.org/' className='stack-icon-link'>
                <TbBrandReact className='stack-icon' />
                <span className='icon-text'>React</span>
            </a>
                        
                    </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/html/' className='stack-icon-link'>
                            <TbBrandHtml5 className='stack-icon' />
                            <span className='icon-text'>HTML</span>
                            </a>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/Css/' className='stack-icon-link'>
                            <TbBrandCss3 className='stack-icon' />
                            <span className='icon-text'>CSS</span>
                            </a>
                         </motion.li>
                    <motion.li variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://getbootstrap.com/' className='stack-icon-link'>
                            <TbBrandBootstrap className='stack-icon' />
                            <span className='icon-text'>Bootstrap</span>
                            </a>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.mongodb.com/' className='stack-icon-link'>
                            <TbBrandMongodb className='stack-icon' />
                            <span className='icon-text'>MongDB</span>
                            </a>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.mysql.com/' className='stack-icon-link'>
                            <TbBrandMysql className='stack-icon' />
                            <span className='icon-text'>MySQL</span>
                            </a>
                       </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='hhttps://www.w3schools.com/js/DEFAULT.asp' className='stack-icon-link'>
                            <TbBrandJavascript className='stack-icon' />
                            <span className='icon-text'>JavaScript</span>
                            </a>
                        </motion.li>
                </motion.ul>
            </div>
        </div>
    );
}

export default AboutMe;