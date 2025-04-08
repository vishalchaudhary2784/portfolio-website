import React from 'react'
import AboutImg from "../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
    return (
        <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 '>
            <div>
                <h2 className="text-2xl md:text-4xl font-bold mr-[20px]">Knowledgeable Lawyer</h2>

                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                    <img className='md:h-80' src={AboutImg} alt="AboutImg" />

                    <ul>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />

                            <span className='w-96'>
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Criminal Lawyers
                                </h1>
                                <p className="text-sm md:text-md mt-2 leading-tight">
                                    Criminal lawyers represent clients who have been accused of a crime.
                                    They advise and represent their clients in court,
                                    as well as educate them about their legal rights and options.
                                    Criminal lawyers may work for either the prosecution or the defense.
                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />

                            <span className='w-96'>
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Family lawyers
                                </h1>
                                <p className="text-sm md:text-md mt-2 leading-tight">
                                    Family lawyers act on matters such as divorce and separation,
                                    child contact and adoption,
                                    Local Authority care orders and financial settlements.
                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />

                            <span className='w-96'>
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Tax Lawyers
                                </h1>
                                <p className="text-sm md:text-md mt-2 leading-tight">
                                    A tax lawyer is a legal professional with expertise in handling
                                    tax-related matters for individuals, businesses,
                                    and organisations. They specialise in areas like tax planning,
                                    compliance, and litigation, offering valuable advice to minimise
                                    tax liabilities while adhering to legal frameworks.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About