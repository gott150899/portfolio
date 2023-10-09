import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const textArray = ['Full-Stack Developer', 'Front-End Developer', 'Back-End Developer'];

const Main = () =>{
    const [roleText, setRoleText] = useState('')
    const [start, setStart] = useState(0);
    const [isNext, setIsNext] = useState(true);
    const [delay, setDelay] = useState(50)

    useEffect(() =>{
        setTimeout(() =>{
            const currentText = textArray[start]
            if(isNext){
                if(roleText.length < currentText.length){
                    const split = currentText.split('')
                    setRoleText(roleText + split[roleText.length])
                }else{
                    setIsNext(false)
                    setDelay(500)
                }
            }else{
                if(roleText.length !== 0){
                    setRoleText(roleText.slice(0, -1))
                    setDelay(50)
                }else{
                    setIsNext(true)
                    if(start === textArray.length - 1){
                        setStart(0)
                    }else{
                        setStart(start + 1)
                    }
                }
            }
        }, delay)
    }, [roleText, isNext])
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm{' '}
                        <span className='text-[#5651e5]'>Tran Ty Go</span>
                    </h1>
                    <h2 className="py-2 text-gray-700">
                        {roleText}
                        <span className='animate-[flicker_1s_infinite]'>_</span>
                    </h2>
                    <p className='py-4 text-gray-600 m-auto'>
                        Hi there. I'm a person who likes fixing bugs more than coding
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href={process.env.LINKEDIN_URL} target='_blank' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn size={25} />
                        </a>
                        <a href={process.env.GITHUB_URL} target='_blank' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub size={25} />
                        </a>
                        <a href={`mailto:${process.env.EMAIL}`} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail size={25} />
                        </a>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <BsFillPersonLinesFill size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;