import React from 'react'
import { SiPostgresql, SiMongodb, SiMysql, SiFlask, SiJquery, SiPython, SiReact,SiHtml5, SiCss3,SiBootstrap, SiJavascript, SiMaterialdesign, SiTypescript, SiNodedotjs       } from "react-icons/si"
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
            {/* <motion.div
        className='skills-text'>
        Skills
    </motion.div> */}
            <div className='stack-container'>
                <div className='skills-text'>Skills</div> 
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
                         <SiReact className='stack-icon' />
                         <span className='icon-text'>React</span>
                         </a>    
                    </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/html/' className='stack-icon-link'>
                            <SiHtml5  className='stack-icon' />
                            <span className='icon-text'>HTML</span>
                            </a>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/Css/' className='stack-icon-link'>
                            <SiCss3  className='stack-icon' />
                            <span className='icon-text'>CSS</span>
                            </a>
                         </motion.li>
                    <motion.li variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/bootstrap/bootstrap_ver.asp' className='stack-icon-link'>
                            <SiBootstrap  className='stack-icon' />
                            <span className='icon-text'>Bootstrap</span>
                            </a>
                        </motion.li>
                        <motion.li variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/w3css/w3css_material.asp' className='stack-icon-link'>
                            <SiMaterialdesign  className='stack-icon' />
                            <span className='icon-text'>MaterialUI</span>
                            </a>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.mongodb.com/' className='stack-icon-link'>
                            <SiMongodb className='stack-icon' />
                            <span className='icon-text'>MongDB</span>
                            </a>
                        </motion.li>
                        <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/postgresql/index.php' className='stack-icon-link'>
                            <SiPostgresql className='stack-icon' />
                            <span className='icon-text'>PostgreSQL</span>
                            </a>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.mysql.com/' className='stack-icon-link'>
                            <SiMysql className='stack-icon' />
                            <span className='icon-text'>MySQL</span>
                            </a>
                       </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='hhttps://www.w3schools.com/js/DEFAULT.asp' className='stack-icon-link'>
                            <SiJavascript  className='stack-icon' />
                            <span className='icon-text'>JavaScript</span>
                            </a>
                        </motion.li>
                        <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/typescript/index.php' className='stack-icon-link'>
                            <SiTypescript  className='stack-icon' />
                            <span className='icon-text'>Typescript</span>
                            </a>
                        </motion.li>
                        <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/nodejs/default.a' className='stack-icon-link'>
                            <SiNodedotjs  className='stack-icon' />
                            <span className='icon-text'>Node.js</span>
                            </a>
                        </motion.li>
                        <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/jquery/default.asp' className='stack-icon-link'>
                            <SiJquery className='stack-icon' />
                            <span className='icon-text'>jQuery</span>
                            </a>
                        </motion.li>
                        <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        <a href='https://www.w3schools.com/python/default.asp' className='stack-icon-link'>
                            <SiPython  className='stack-icon' />
                            <span className='icon-text'>Python</span>
                            </a>
                        </motion.li>
                        <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                            <a href='' className='stack-icon-link'>
                            <SiFlask   className='stack-icon' />
                            <span className='icon-text'>Flask</span>
                            </a>
                        </motion.li>
                </motion.ul>
            </div>
        </div>
    );
}

export default AboutMe;