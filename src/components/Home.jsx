import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <>
        <div name="home" className='max-w-screen-2xl container mx-auto  px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row  '>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-3 sm:order-2  order-1'>
                <span>Welcome in my Feed</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
                    <h1>Hello, I'm a</h1>
                    <ReactTyped
                        className='text-red-700 font-bold'
                        strings={["Developer", "Coder","Programer"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </div>
                <p className='sm:text-sm md:text-md text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure vitae distinctio totam et odit voluptas cum officiis eveniet, at cumque, animi corporis exercitationem sed, asperiores minus nisi? Consequuntur, animi?</p>
                <br />
                {/* soical icon */}
                <div className="flex  flex-col  md:flex-row justify-between space-y-4 md:space-y-0 items-center">
                    <div className='space-y-2'>
                        <h1 className='font-bold '>Available on</h1>
                        <ul className='flex space-x-2 '>
                            <li className='text-xl md:text-3xl  cursor-pointer '>
                                <a href="#">
                                    <FaLinkedin/>
                                </a>
                            </li>
                            <li className='text-xl md:text-3xl  cursor-pointer '>
                                <a href="#">
                                    <FaGithub/>
                                </a>
                            </li>
                            <li className='text-xl md:text-3xl  cursor-pointer '>
                                <a href="#">
                                    <FaInstagramSquare/>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-bold'>Currently working on</h1>
                        <ul className='flex space-x-2 justify-center '>
                            <li className='text-xl md:text-3xl hover:scale-110 rounded-full border-[2px] cursor-pointer '><FaReact/></li>
                            <li className='text-xl md:text-3xl hover:scale-110 rounded-full border-[2px] cursor-pointer '><RiTailwindCssFill/></li>
                            <li className='text-xl md:text-3xl hover:scale-110 rounded-full border-[2px] cursor-pointer '><TbBrandRedux/></li>
                        </ul>
                    </div>    

                </div>
                    <div className='overflow-hidden mt-8'>
                        <h1 className='uppercase text-6xl font-bold text-nowrap '>Frontend / Backend / HTML / CSS / JAVASCRIPT / REact-js / NOde-js / mongodb / Frontend / Backend / HTML / CSS / JAVASCRIPT / REact-js / NOde-js / mongodb</h1>
                        
                        
                    </div> 
            </div>
            <div className='md:w-1/2 sm:mt-8 md:ml-48 md:mt-20 sm:order-1 md:order-2'>
                <img src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-professional-web-developer-3d-illustration-png-image_13322701.png"  alt='dg' className='object-cover object-center md:w-full ' />
            </div>

        </div>
        <hr className=' mt-8 md:mt-0 border-[1px]'/>
        </div>
    
    </>
  )
}

export default Home