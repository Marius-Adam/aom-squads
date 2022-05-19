import { motion } from 'framer-motion';
import React from 'react';

interface IMotionDiv {
  children: React.ReactNode;
  className?: string;
}

const MotionDiv = ({ children, className }: IMotionDiv) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
