import React from 'react'
import { IoIosMenu } from "react-icons/io";

const Navbar = () =>  {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Aisha</div> 
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'>Home</li>
                <li className='menuLink'>Project</li>
                <li className='menuLink'>Skill</li>
                <li className='menuLink'>Testimonals</li>
                <li className='menuLink'>Contact</li>
            </ul>
            <IoIosMenu className='md:hidden' size={30} />

    </div>
  </div>
  )
}

export default Navbar;
