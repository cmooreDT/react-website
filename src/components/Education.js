// src/components/Education.js
import React from "react";
import data from "../data/education.json"

export default function Education() {
    return (
        <section id="education" className="pt-20">
            <div className="container mx-auto px-10">
                <div className="w-full lg:pr-24 md:pr-16 flex flex-col md:items-start text-left">
                    <h2 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Education 
                        {/* and Certifications */}
                    </h2>
                    {data.map((cert, index) => (
                        <div key={index} className="w-full pb-7 mb-7 last:pb-0 last:mb-0 border-b border-gray-300 last:border-b-0">
                            <h3 className="text-lg font-bold pb-1 text-white">{cert.institution}</h3>
                            <div className="w-full pb-1">
                                {cert.location}
                            </div>
                            <div className="w-full"> 
                                <ul className="list-disc pl-10">
                                    {cert.certificates.map((certificate, index) => {
                                        return <li key={index}>{certificate}</li>
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