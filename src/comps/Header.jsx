import React from 'react';
import { headVariants } from '../variants/headVariants';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div 
    className='header' 
    variants={headVariants.animatedHeader} 
    initial="from" 
    animate="to" 
    transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}>
      <h2>Welcome</h2>
    </motion.div>
  );
};

export default Header;





