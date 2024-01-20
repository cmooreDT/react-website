// src/components/Skills.js
import React from "react";

export default function Skills() {
    return (
        <section id="skills" className="pt-20">
            <div className="w-full lg:pr-24 md:pr-16 flex flex-col md:items-start text-left">
                <h2 className="sm:text-4xl text-3xl mb-4 font-medium text-white">Skills</h2>
                <div className="w-full mb-7">
                CSS3, SASS, LESS, HTML5, Bootstrap 4/5, jQuery, JavaScript, WordPress, WCAG standards, Figma, writing external and internal documentation
                </div>

                <div className="w-full">
                    Currently dabbling in React and Tailwind CSS (that's what this site is built on)
                </div>
            </div>
        </section>
    )
}