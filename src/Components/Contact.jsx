import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2
        className='my-10 text-center text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      <motion.div
        className='flex flex-col items-center space-y-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
      
        <motion.div
          className='w-64 p-4 bg-gray-800 rounded-full text-lg text-white text-center hover:bg-gradient-to-r from-pink-500 to-purple-500 transition-colors duration-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {CONTACT.phoneNo}
        </motion.div>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className='w-64 p-4 bg-gray-800 rounded-full text-lg text-white text-center block hover:bg-gradient-to-r from-pink-500 to-purple-500 transition-colors duration-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
