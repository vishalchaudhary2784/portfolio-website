import React from 'react';
import bannerImg from "../assets/law-1.jpeg";


const ProjectsCard = ({ title, main }) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-lg shadow-slate-900 rounded-2xl'>
        <img className='p-4 rounded-lg' src={bannerImg} alt="Project Banner" />  

        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal '>
            {title}
        </h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2'>
            {main}  
        </p>
        <h1 className="font-bold">Advocate :- SONAL RAJPUT</h1>
        <h1 className="font-bold">Contact No :- 7699988800</h1>
        <div className='mt-2 p-2 md:p-2 flex gap-2 md:gap-4 '>
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact
          </button>
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Help You
          </button>
        </div>
    </div>
  );
};

export default ProjectsCard;



