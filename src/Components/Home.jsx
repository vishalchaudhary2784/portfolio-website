import React from 'react'
import avatarImg from "../assets/7358602-removebg-preview.png";
import TextChange from './TextChange';


const Home = () => {
    return (
        <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
            <div className='md:w-2/4 md:pt-10'>
                <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter '>
                 <TextChange />
                    </h1>
                <p className='text-sm md:text-2xl tracking-tight'>
                    Khushi Jangra is a highly skilled and knowledgeable lawyer.
                    She has a deep understanding of legal principles and case laws.
                    Her dedication to justice makes her stand out in the legal field.
                    She is known for her sharp analytical and argumentative skills.
                    Clients trust her for her honest and strategic legal advice.
                    She has successfully handled many complex legal cases.
                    Her confidence and professionalism make her a respected advocate.
                    She always prioritizes the rights and interests of her clients.
                    Her ability to research and present strong arguments is remarkable.
                    Khushi Jangra is truly one of the best lawyers in her field.
                </p>
                <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
         duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
            </div>
            <div><img className='' src={avatarImg} alt="AvatarImg" /></div>
        </div>
    )
}

export default Home