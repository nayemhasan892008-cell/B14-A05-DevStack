
import logo from '../assets/logo-text.png'

const Navbar = () => {
  return (
    <nav className='py-7 border-b border-gray-200 sticky top-0 bg-[#FFFFFF]'>

      <div className='flex justify-between items-center container mx-auto '>

   <div className='flex justify-between items-center gap-3'>
       <img src={logo} alt="" />
    
   </div>

  
      <ul className='flex justify-between items-center gap-7 '>
        <li className='text-[#DB2777] font-semibold text-sm'>Home</li>
        <li className='text-[#475569] font-medium text-sm'>Technology</li>
        <li className='text-[#475569] font-medium text-sm'>Projects</li>
        <li className='text-[#475569] font-medium text-sm'>About</li>
        <li className='text-[#475569] font-medium text-sm'>Contact</li>
      </ul>
      
    <div className='flex items-center gap-5'>
      <button className='text-[#334155] font-medium text-sm'>Sign In</button>
      <button className='font-semibold text-sm text-[#FFFFFF]  rounded-full  bg-[#D91B7E] py-2 px-5'>Sign Up</button>
    </div>
    </div>
    </nav>
      
  
  );
};

export default Navbar;