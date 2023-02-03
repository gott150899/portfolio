import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import React, { useEffect, useState } from "react";

const Navbar = () =>{
    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(pre => !pre)
    }

    return (
        <div className='fixed top-0 w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]'>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href='/'>
                    <Image src='/assets/meo_1.jpg' alt="/" width='50' height='50' />
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href='/#skill'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href='/#project'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href='/#contact '>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div className="md:hidden cursor-pointer" onClick={handleNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
                }>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src='/assets/meo_1.jpg' alt="/" width='50' height='50' />
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"  onClick={handleNav}>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Do anything you want {':>'}
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href='/' onClick={() => setNav(false)}>
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href='/#about' onClick={() => setNav(false)}>
                                <li className="py-4 text-sm">About</li>
                            </Link>
                            <Link href='/#skill' onClick={() => setNav(false)}>
                                <li className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href='/#project' onClick={() => setNav(false)}>
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href='/#contact' onClick={() => setNav(false)}>
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-16">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
            </div>

        </div>
    )
}

export default Navbar