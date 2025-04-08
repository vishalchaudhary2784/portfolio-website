import React from "react";
import { GiClawHammer } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { BsFillAwardFill } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";


const Experience = () => {
    return (
        <div id="Experience" className="p-10 md:p-24">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
            <div className="flex flex-wrap items-center justify-between ">
                <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10  ">
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <GoLaw color="#E34F26" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <BsFillAwardFill color="#1572B6" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <GiClawHammer color="#61DAFB" size={50} />
                    </span>

                </div>
                {/* <div> */}
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lgp-4 items-center ">
                    <PiStudentBold color="#4284F4" size={50} />
                    <span className="text-white">
                        <h2 className="leading-tight">Family lawyers</h2>
                        <p className="text-sm leading-tight font-thin ">01 may 2025 - Present</p>
                        <ul className="text-sm p-2">
                            <li> -Ex-5 years</li>
                            <li>- Work as lawyer</li>
                            <li>- Sinior lawyer</li>
                        </ul>
                    </span>
                </div>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lgp-4 items-center ">
                    <PiStudentBold color="#E50914" size={50} />
                    <span className="text-white">
                        <h2 className="leading-tight"> Criminal lawyers</h2>
                        <p className="text-sm leading-tight font-thin ">09 may 2025 - Present</p>
                        <ul className="text-sm p-2">
                            <li> -Ex-2 years</li>
                            <li>- Work as lawyer</li>
                            <li>- Sinior lawyer</li>
                        </ul>
                    </span>
                </div>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lgp-4 items-center ">
                    <PiStudentBold color="#FF9900" size={50} />
                    <span className="text-white">
                        <h2 className="leading-tight">Tax lawyers</h2>
                        <p className="text-sm leading-tight font-thin ">31 may 2025 - Present</p>
                        <ul className="text-sm p-2">
                            <li> -Ex-3 years</li>
                            <li>- Work as lawyer</li>
                            <li>- Sinior lawyer</li>
                        </ul>
                    </span>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Experience