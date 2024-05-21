import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ image }) => {
  return (
    <motion.img
      className="Corner-Logo"
      src={image}
      alt="Logo"
      initial={{ scale: 0 }}
      animate={{ scale: [0.5, 1.2, 0.9, 1] }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  );
};

export default AnimatedLogo;
