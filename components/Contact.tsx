import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full rounded-xl'>
                        <div>
                            <img className='rounded-xl hover:scale-[1.02] ease-in duration-300 lg:hover:scale-105' src="/assets/about.jpeg" alt="" />
                        </div>
                        <div>
                            <h2 className='py-2'>Tran Ty Go</h2>
                            <p className='text-[#0099FF] font-bold'>Front-End Developer</p>
                            <p className='py-4'>Love myself - Love family - Love everybody</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn size={25} />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub size={25} />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail size={25} />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10}></textarea>
                            </div>
                            <button type='button' className='w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] opacity-50 cursor-not-allowed'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                         <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact