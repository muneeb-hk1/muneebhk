import React from 'react';
import { 
  FaLinkedin, 
  FaXTwitter, 
  FaEnvelope 
} from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-4 text-1xl py-10">
      
      <a 
        href="https://www.linkedin.com/in/muneebhk/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-zinc-600 hover:text-blue-600 transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a 
        href="https://x.com/muneeb_hk" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-zinc-600 hover:text-black transition-colors duration-200"
        aria-label="X (Twitter)"
      >
        <FaXTwitter />
      </a>

      <a 
        href="mailto:muneebkhan9569@gmail.com" 
        className="text-zinc-600 hover:text-red-600 transition-colors duration-200"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>

      {/* <a 
        href="https://substack.com/@muneebhk" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-zinc-600 hover:text-orange-600 transition-colors duration-200"
        aria-label="Substack"
      >
        <SiSubstack />
      </a> */}

    </div>
  );
};

export default Footer;