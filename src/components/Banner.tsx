import React from 'react';
import bannerimg  from "../assets/banner-stack.png"

const Banner = () => {
  return (
    <section className='my-6 container mx-auto'>
      <div className='flex items-center justify-between'>
      <div>
        <h1 className='font-extrabold text-6xl text-[#0F172A] '>Build Your Ideal <br />  <span className='font-extrabold text-6xl bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent '>Development Stack</span> </h1>
        <p className='font-normal text-[#475569] text-lg my-10'>Explore frontend, backend, database, and tooling options,<br />
       compare them side by side, and put together the stack that fits your <br />
       next project.</p>

        <div className='flex items-center gap-3 my-10'>
          <button className='py-3 px-4 bg-linear-to-r from-[#F97316] to-[#EC4899] text-[#FFFFFF] font-semibold text-sm rounded-md'>Explore Technologies</button>
          <button className='py-3 px-11 font-normal text-sm border border-gray-200 rounded-md'>Learn More</button>
        </div>

      </div>

        <div>
          <img src={bannerimg} alt="" />
        </div>
      
      </div>
    </section>
  );
};

export default Banner;