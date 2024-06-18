import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>

    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/amit-mishra-656676303/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/EivorRrz" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.instagram.com/e_i_v_o_r__/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>

  </nav>

}

export default Navbar
