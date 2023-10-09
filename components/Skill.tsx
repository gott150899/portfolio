import CONSTANT from '@/utils/constant'
import Image from 'next/image'
import React from 'react'
import skillStyles from 'styles/skill.module.scss'

const Skill = () => {
  return (
    <div id='skill' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4 '>What I can do</h2>
            
            <div className={skillStyles.wrapper}>
                {
                    CONSTANT.SKILLS.map((skill, index) => (
                        <div className={skillStyles.item} key={index}>
                            <Image className={skillStyles.img} src={skill.thumbnail} alt='/' width='64' height='64' />
                            <h3 className='text-xl'>{skill.skillName}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skill