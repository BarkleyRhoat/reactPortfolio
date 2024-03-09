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
    transition={{ duration: 2, ease: 'ease-in-out', loop: Infinity }}>
      <h2>Welcome</h2>
    </motion.div>
  );
};

export default Header;





