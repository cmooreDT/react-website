// src/components/Projects.js
import React from "react";
import projects from "../data/projects.json";
// import communities from "../data/communities.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
    return (
        <section id="projects" className="py-20 border-b-2 border-red-700">
            <div className="w-full lg:pr-24 md:pr-16 flex flex-col md:items-start text-left">
                <h2 className="sm:text-4xl text-3xl mb-4 font-medium">Projects</h2>
                {projects.map((project, index) => (
                    <div key={index} className="w-full pb-7 mb-7 last:pb-0 last:mb-0 border-b border-gray-400 last:border-b-0">
                        <h3 className="text-lg font-bold pb-1">
                            {project.title}
                        </h3>
                        <div className="w-full pb-1">
                            {project.url && (
                                <Link className="inline-block pr-4 transition hover:text-gray-600 hover:ease-in hover:underline" to={project.url}>Demo <FontAwesomeIcon icon={faArrowRight} /></Link>
                            )}
                            {project.codepen && (
                                <Link className="inline-block pr-4 transition hover:text-gray-600 hover:ease-in hover:underline" to={project.codepen} target="_blank">CodePen <FontAwesomeIcon icon={faCodepen} /></Link>
                            )}
                            {project.repo && (
                                <Link className="inline-block pr-4 transition hover:text-gray-600 hover:ease-in hover:underline" to={project.repo} target="_blank">GitHub repo <FontAwesomeIcon icon={faGithub} /></Link>
                            )}
                        </div>
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

{/* <div className="w-full lg:pr-24 md:pr-16 mt-5 flex flex-col md:items-start text-left">
    <h3 className="text-lg font-bold pb-1">
        Communities
    </h3>
    {communities.map((community, index) => (
        <div key={index} className="w-full mb-3 last:pb-0 last:mb-0">
            <Link className="inline-block pr-4 transition hover:text-white hover:ease-in hover:underline" to={community.url} target="_blank">{community.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
            <ul className="list-disc pl-10">
                {community.features.map((language, index) => {
                    return <li key={index}>{language}</li>
                })}
            </ul>
        </div>
    ))}
</div> */}
        </section>
    );
}