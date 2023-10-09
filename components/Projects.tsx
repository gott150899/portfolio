import CONSTANT from '@/utils/constant';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { TiAttachmentOutline } from 'react-icons/ti';

const Projects = () => {
  return (
    <div id='project' className='w-full  px-2 py-11'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full '>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4 mb-5'>My practices</h2>
            {
                CONSTANT.PROJECTS.map((project, index) => (
                    <React.Fragment key={index}>
                        <div  className='flex flex-col mb-10 gap-x-3 sm:flex-row'>
                            <div className='flex-1'>
                                <Image className='m-auto rounded-xl shadow-xl shadow-gray-400 w-[200px] h-[200px] object-cover' src={project.thumbnailUrl} alt='/' width='200' height='200' />
                            </div>
                            <div className='w-full sm:w-[70%]'>
                                <h3 className='my-4 text-center sm:text-left sm:mt-0'>{project.projectName}</h3>
                                <p className='mb-4 min-h-[48px]'>{project.overview}</p>
                                <div className='flex flex-wrap gap-5 mb-4 sm:gap-2'>
                                {
                                    project.technologies.map((tech, index) => (
                                        <div key={index} className='flex items-center gap-2 w-fit sm:w-[30%]'>
                                            <AiFillCheckCircle size={20} color='#00BFFF' />
                                            <span>{tech}</span>
                                        </div>
                                    ))
                                }
                                </div>
                                <Link className='flex justify-center sm:justify-start' href={`/project/${project.idPath}`}><button className='px-4 py-2 rounded-full'>View Detail</button></Link>
                            </div>
                        </div>
                        {
                            (index !== CONSTANT.PROJECTS.length - 1) &&
                            <div className='mb-[3rem] sm:hidden'>
                                <div className='w-[80%] h-[2px] bg-[#2096c959] m-auto'></div>
                            </div>
                        }
                    </React.Fragment>
                ))
            }
        </div>
    </div>
  )
}

export default Projects