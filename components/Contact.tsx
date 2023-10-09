import { ContactInfo } from '@/models/contact.model';
import CONSTANT from '@/utils/constant';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(CONSTANT.ERR_MSG.required).max(50, 'Just accept 50 characters'),
    phoneNumber: yup.string().required(CONSTANT.ERR_MSG.required).matches(/^0[35789]\d{8}$/, 'Phone number is not valid'),
    email: yup.string().required(CONSTANT.ERR_MSG.required).matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is not valid'),
    subject: yup.string().required(CONSTANT.ERR_MSG.required).max(200, 'Just accept 200 characters'),
    message: yup.string().required(CONSTANT.ERR_MSG.required)
})

const Contact = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactInfo>({
        defaultValues: {
            name: '',
            phoneNumber: '',
            email: '',
            subject: '',
            message: ''
        },
        resolver: yupResolver(schema)
    })

    const onSubmitForm = async (data: ContactInfo) =>{
        try{
            const resp = await axios.post('/api/contact', data)
            toast('😍 I have received your information. I will respond to you as quickly as possible', {
                type: 'default'
            })
        }catch{
            toast('Some thing was wrong. Please try again later', {
                type: 'error'
            })
        }
    }

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
                                <p className='text-[#0099FF] font-bold'>Full-Stack Developer</p>
                                <p className='py-4'>Love myself - Love family - Love everybody</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <a href={process.env.LINKEDIN_URL} target='_blank' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form onSubmit={handleSubmit(onSubmitForm)} >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input 
                                            {...register('name')}
                                            className={`border-2 rounded-lg p-3 flex border-gray-300 ${errors.name ? 'border-[#ff4135]' : ''}`} 
                                            type="text" 
                                        />
                                        <div className='h-[21px]'>
                                            {
                                                errors.name && <span className='text-[14px] text-[#ff4135]'>{errors.name.message}</span>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input 
                                            {...register('phoneNumber')}
                                            className={`border-2 rounded-lg p-3 flex border-gray-300 ${errors.phoneNumber ? 'border-[#ff4135]' : ''}`}
                                            type="text" 
                                        />
                                        <div className='h-[21px]'>
                                            {
                                                errors.phoneNumber && <span className='text-[14px] text-[#ff4135]'>{errors.phoneNumber.message}</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input 
                                        {...register('email')}
                                        className={`border-2 rounded-lg p-3 flex border-gray-300 ${errors.email ? 'border-[#ff4135]' : ''}`}
                                        type="email" 
                                    />
                                    <div className='h-[21px]'>
                                        {
                                            errors.email && <span className='text-[14px] text-[#ff4135]'>{errors.email.message}</span>
                                        }
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input 
                                        {...register('subject')}
                                        className={`border-2 rounded-lg p-3 flex border-gray-300 ${errors.subject ? 'border-[#ff4135]' : ''}`}
                                        type="text" 
                                    />
                                    <div className='h-[21px]'>
                                        {
                                            errors.subject && <span className='text-[14px] text-[#ff4135]'>{errors.subject.message}</span>
                                        }
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea 
                                        {...register('message')}
                                        className={`border-2 rounded-lg p-3 flex border-gray-300 ${errors.message ? 'border-[#ff4135]' : ''}`} 
                                        rows={10}
                                    >
                                    </textarea>
                                    <div className='h-[21px]'>
                                        {
                                            errors.message && <span className='text-[14px] text-[#ff4135]'>{errors.message.message}</span>
                                        }
                                    </div>
                                </div>
                                <button 
                                    type='submit' 
                                    className={`
                                    w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 
                                    rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]
                                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    Send Message
                                </button>
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
            <ToastContainer 
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </div>
    )
}

export default Contact