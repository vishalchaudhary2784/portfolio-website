import React from "react";
import ProjectsCard from "./ProjectsCard"; 
import ProjectsCard2 from "./ProjectsCard2";
import ProjectsCard3 from "./ProjectsCard3";

const Projects = () => {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white">
            <h1 className="text-2xl md:text-4xl text-white font-bold">TAME MEMBERS </h1>
            <div className="py-12 px-8 flex flex-wrap gap-5">
                <ProjectsCard
                    title="Family lawyers "
                    main="Family lawyers specialize in family law,
                     which regulates marriage, divorce,
                      child custody, and other family-related issues."
                />
                <ProjectsCard3
                    title="Criminal lawyers"
                    main="Criminal lawyers, also known as defense attorneys
           or public defenders, represent people or
            organizations accused of crimes."
                />
                <ProjectsCard2
                    title="Tax lawyers"
                    main="Tax lawyers are experts in interpreting and applying tax
           regulations to help individuals, businesses, 
           and organisations comply with tax laws
            while minimising their tax liabilities."
                />
            </div>
        </div>
    );
};

export default Projects;
