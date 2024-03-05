import React from 'react'
// import icons
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
                        
                    </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                         </motion.li>
                    <motion.li variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                       </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        </motion.li>
                    <motion.li
                        variants={iconVariants}
                        whileHover={'hover'}
                        animate='animate'
                        transition='transition'>
                        </motion.li>
                </motion.ul>
            </div>
        </div>
    );
}

export default AboutMe;