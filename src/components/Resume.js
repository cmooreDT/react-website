// src/components/About.js
import React from "react";
import data from "../data/resume.json";

export default function Resume() {
    return (
        <section id="resume" className="pt-20">
            <div className="container mx-auto px-10">
                <div className="w-full lg:pr-24 md:pr-16 flex flex-col md:items-start text-left">
                    <h2 className="sm:text-4xl text-3xl mb-4 font-medium text-white">Professional experience</h2>
                    {data.map((job, index) => (
                        <div key={index} className="w-full pb-7 mb-7 last:pb-0 last:mb-0 border-b border-gray-300 last:border-b-0">
                            <h3 className="text-lg font-bold pb-1 text-white">{job.role}</h3>
                            <div className="w-full pb-1">
                                <div className="md:inline-block md:w-1/3 sm:w-full pr-10">
                                    {job.company}
                                </div>
                                <div className="md:inline-block md:w-2/3">
                                    {job.location}
                                </div>
                            </div>
                            <div className="w-full"> 
                                <ul className="list-disc pl-10">
                                    {job.duties.map((duty, index) => {
                                        return <li key={index}>{duty}</li>
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