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