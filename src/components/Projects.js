// src/components/Projects.js
import React from "react";
import data from "../data/projects.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
    return (
        <section id="projects">
            <div className="container mx-auto px-10 mt-16">
                <div className="w-full lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 text-left">
                    <h2 className="sm:text-4xl text-3xl mb-4 font-medium text-white">Projects</h2>
                    {data.map((project, index) => (
                        <div key={index} className="w-full pb-7 mb-7 last:pb-0 last:mb-0 border-b border-gray-300 last:border-b-0">
                            <h3 className="text-lg font-bold pb-1 text-white">
                                <Link className="transition hover:text-gray-300 hover:ease-in hover:underline" to={project.url}>{project.title} <FontAwesomeIcon icon={faArrowRight} /></Link>
                            </h3>
                            <div className="w-full pb-1">
                                {project.features}
                            </div>
                            <div className="w-full"> 
                                <ul className="list-disc pl-10">
                                    {project.techStack.map((language, index) => {
                                        return <li key={index}>{language}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}