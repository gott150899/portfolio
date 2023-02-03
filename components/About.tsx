import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                  My full name is <span className='text-[#FF3399] font-bold'>Tran Ty Go</span>. I am a developer. I have a passion for coding and bugs. I am excited to be here and looking forward to meeting and learning from all of you.
                </p>
                <Link href='/#project'>
                  <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                </Link>
            </div> 
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/assets/secret.png' alt='/' width='300' height='300'  />
            </div>
        </div>
    </div> 
  )
}

export default About