import { useState } from "react";
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {Link} from 'react-scroll'


const Navbar = () => {
    const [icon, setIcon] = useState(false)
    const items = ["home", "about","experience","portfolio","contact" ]

  return (
<div className='max-w-screen-2xl container mx-auto h-16 px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white'>
    <div className='flex justify-between h-16 items-center '>
        <div className='flex space-x-2'>
            <img src="https://th.bing.com/th/id/OIP.AbGafkazjc_S1pZPh0B9cQHaIm?w=168&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-12 h-12 rounded-full'/>
            <h1 className='font-semibold text-xl cursor-pointer'>Vimal 
                <p className='text-sm'>Web Developer</p>
            </h1>
        </div>
        <div className='flex'>
             <ul className='hidden md:flex space-x-8 '>
               {
                items.map((lnk,id)=>(
                    <li key={id} className="font-semibold capitalize cursor-pointer hover:scale-110 duration-200 " >
                        <Link to={lnk}
                        smooth={true}
                        duration={200}
                        offset={-70}
                        activeClass="active">
                            {lnk}
                        </Link>
                    </li>
                ))
               }
            </ul>
            <div onClick={()=>setIcon(!icon)} className='md:hidden sm:block '>
                {icon ? <RxCross2 size={25}/> :  <IoMenu size={25} /> }
            </div>
        </div>


    </div>
    {
        icon  && (<div>
        <ul className='md:hidden bg-white px-4 border-[2px] shadow-xl cursor-pointer flex flex-col  space-y-2 rounded-md items-start justify-center absolute top-[60%] right-10
          '>
            {
                items.map((lnk,id)=>(
                    <li key={id} className="hover:underline capitalize cursor-pointer font-semibold text-xl " >
                        <Link to={lnk}
                        smooth={true}
                        duration={200}
                        offset={-70}
                        activeClass="active">
                            {lnk}
                        </Link>
                    </li>
                ))
            }
                </ul>
        </div>)
    }
    
</div>
  )
}

export default Navbar