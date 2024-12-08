import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get In Touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                    Drop me a line, give me a call, or send me a message by submitting a form.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <  MdOutlineMailOutline size={30} /> dareemrafiq100@gmail.com
                </div>
                <div className='flex gap-5 items-center' data-aos="zoom-in-up">
                    <BsTelephone   size = {30} /> 0332-3137573

                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-yellow-600'
                    id="name"/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type="email"
                    className='h-[40px] bg-transparent border border-yellow-600'
                    id="email"/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='msg'>Message</label>
                    <textarea
                    className= "bg-transparent border border-yellow-600"
                    id="msg" rows={8}>
                    </textarea>
                </div>
                <button className='bg-yellow-600 p-2 px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
