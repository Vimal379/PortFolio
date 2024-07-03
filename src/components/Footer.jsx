import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaCanadianMapleLeaf } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
        <hr className='mt-8 border-[1px]' />
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex  text-2xl space-x-4'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaLinkedin/>
                        <FaTwitter/>
                    </div>
                    <hr className='border-[1.5px] border-gray-600 mt-2 w-[200px] text-center'/>
                    <div className='mt-4 flex gap-x-1'>
                        <span className='text-zinc-400'>created by Vimal Kumar </span>
                        <FaCanadianMapleLeaf size={20}/>
                    </div>
                </div>
            </div>
        </footer>
    </>
)

}

export default Footer