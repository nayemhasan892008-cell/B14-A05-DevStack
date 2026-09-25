import React from 'react';
import  devlogo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 my-6'>
       
       
      <div className='flex justify-between items-start container mx-auto border-b border-gray-200 py-20'>

        <div className='space-y-5'>
          <img src={devlogo} alt="" />
          <p className='font-normal text-xs text-[#64748B]'>Curated tools, technologies, and resources for developers building <br />
          modern software.</p>

          <div className='flex items-center gap-5'>
            <a href="#" className='font-semibold text-xs text-[#475569]'   >GitHub</a>
            <a href="#" className='font-semibold text-xs text-[#475569]'>Twitter</a>
            <a href="#" className='font-semibold text-xs text-[#475569]'>LinkedIn</a>
          </div>

        </div>

        <div>
          <h5 className='font-bold text-12 text-[#0F172A]'>PRODUCT</h5>
          <ul className='mt-6 space-y-4 text-xs font-normal text-[#64748B]'>
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        <div>
           <h5 className='font-bold text-12 text-[#0F172A]'>COMPANY</h5>
           <ul className='mt-6 space-y-4 text-xs font-normal text-[#64748B]'>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
           </ul>
        </div>

        <div>
           <h5 className='font-bold text-12 text-[#0F172A]'>LEGAL</h5>
          <ul className='mt-6 space-y-4 text-xs font-normal text-[#64748B]'>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

      
      </div>

      <div className='flex items-center justify-between container mx-auto pt-7 pb-10'>
        <p className='font-normal text-[#94A3B8]  text-xs '>© 2026 Dev Stack. All rights reserved.</p>
        <div className='flex items-center justify-between gap-4 font-normal text-[#94A3B8]  text-xs'>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;