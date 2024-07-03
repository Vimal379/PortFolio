import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = async(data)=>{
        const userData = {
            name : data.name,
            email: data.email,
            msg: data.message
        }
        try {
            await axios.post('https://getform.io/f/lbjkkzja',userData)
            toast.success("Message send successfully")
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong!")
        }
    }
  return (
    <div name="contact" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 '>
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill the form to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5 '>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 w-96 px-8 py-6 rounded-md my-8'>
                <h1 className='font-semibold text-xl'>Send your message</h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700 font-semibold' htmlFor="name">Name:</label>
                    <input 
                    {...register('name', { required: true })}
                    className='shadow rounded-lg appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='name'
                    id='name'
                    type="text"
                    placeholder='Enter your name' />
                    {errors.name && <p>field is required.</p>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700 font-semibold' htmlFor="email">Email:</label>
                    <input 
                    {...register('email', { required: true })}
                    className='shadow rounded-lg appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name= 'email'
                    id='email'
                    type="email"
                    placeholder='Enter your Email' />
                    {errors.email && <p>field is required.</p>}

                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700 font-semibold' htmlFor="message">Message:</label>
                    <textarea 
                    {...register('message', { required: true })}
                    className='shadow rounded-lg appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    name='message'
                    id='message'
                    type="text"
                    rows={3}
                    placeholder='Enter your query' />
                    {errors.message && <p>field is required.</p>}
                </div>
                <button type='submit' className='bg-blue-500 text-white py-1 px-4 rounded mx-auto'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact