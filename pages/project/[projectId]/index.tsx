import CONSTANT, { Project } from '@/utils/constant';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';

interface PropertyProps{
    project: Project
}

const Property = ({ project }: PropertyProps) => {
    const router = useRouter();

    const handleRedirect = (pathname: string) =>{
        if(!pathname) return;
        window.open(pathname, '_blank')
    }

  return (
    <>
        <Head>
            <title>Tran Ty Go | {project.projectName}</title>
            <meta property="og:title" content={`Tran Ty Go | ${project.projectName}`} />
            <meta name='description' content={project.showDescription} />
            <meta property="og:description" content={project.showDescription} />
            <meta property="og:url" content={`${process.env.ROOT_URL}/project/${project.idPath}`} />
            <meta property='og:image' content={`${process.env.ROOT_URL}${project.thumbnailUrl}`} />
        </Head>
        {
            project ? 
            <div className='w-full mt-[6rem]'>
                <div className='w-screen h-[30vh]  relative'>
                    <div className='absolute top-0 left-0 w-full h-[30vh]  bg-black/80 z-10 '>
                        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white'>
                            <h2 className='py-2 text-style-blue' >{project.projectName}</h2>
                            <h3 className='text-style-red'>
                                {
                                    project.mainTechs.join(' / ')
                                }
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto p-2 gap-x-2 flex flex-col md:flex-row items-center'>
                    <div className='items-stretch'>
                        <h2>Overview</h2>
                        <p className='mb-4'>
                            {project.overview}
                        </p>
                        <h3>Time line</h3>
                        <h4 className='mb-4'>{project.timeLine}</h4>
                        <h3 className='mb-2'>Experience gained</h3>
                        <div className='mb-4'>
                            {
                                project.experience ? project.experience : 
                                <>
                                    {
                                        project.experienceObject.map((exp, index) => (
                                            <p key={index}>
                                                <span className='text-[#FF3399]'>{exp.name}</span>{' '}
                                                <span>{exp.content}</span>
                                            </p>
                                        ))
                                    }
                                </>
                            }
                        </div>
                        <button className={`px-8 py-2 mt-4 mr-8 ${!project.linkDemo ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => handleRedirect(project.linkDemo)}>Demo</button>
                        <button className={`px-8 py-2 mt-4 ${!project.linkRepo ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => handleRedirect(project.linkRepo)}>Code</button>
                    </div>
                    <div className='w-full sm:w-[70%] shadow-xl shadow-gray-400 rounded-xl p-4 mt-8'>
                        <div className='p-2'>
                            <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='flex flex-wrap gap-x-4 justify-center'>
                                {
                                    project.technologies.map((tech, index) => (
                                        <p key={index} className='text-gray-600 py-2 flex items-center text-lg'>
                                            <RiRadioButtonFill color={index % 2 ? '#FF3399' : '#0099FF'} className='pr-1' /> {tech}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div> : ''
        }
    </>
    
  )
}

export default Property

export const getServerSideProps = (context: any) =>{
    const {projectId} = context.params
    if(!projectId) return;

    const index = CONSTANT.PROJECTS.findIndex(p => p.idPath === projectId)

    if(index < 0){
        const { res } = context;
        res.setHeader("location", "/");
        res.statusCode = 302;
        res.end();
        return;
    }
    const project = CONSTANT.PROJECTS[index]
    return {
        props:{
            project
        }
    }
}