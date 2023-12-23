// src/components/Skills.js
import React from "react";

export default function Skills() {
    return (
        <section id="skills" className="pt-20">
            <div className="container mx-auto px-10">
                <div className="w-full lg:pr-24 md:pr-16 flex flex-col md:items-start text-left">
                    <h2 className="sm:text-4xl text-3xl mb-4 font-medium text-white">Skills</h2>
                    <div className="w-full mb-7">
                        CSS3, SASS, LESS, HTML5, WCAG standards, Bootstrap 3/4/5, jQuery, Git, GitHub, SVN
                    </div>

                    <div className="w-full">
                        Currently dabbling in React and Tailwind CSS (that's what this site is built on)
                    </div>
                </div> 
            </div>
        </section>
    )
}