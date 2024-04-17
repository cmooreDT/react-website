// src/components/Skills.js
import React from "react";

export default function Skills() {
    return (
        <section id="skills" className="py-20 border-b-2 border-red-700">
            <div className="w-full lg:pr-24 md:pr-16 flex flex-col md:items-start text-left">
                <h2 className="sm:text-4xl text-3xl mb-4 font-medium">Skills</h2>
                <div className="mb-7">
                    CSS3, SASS, LESS, HTML5, Bootstrap 4/5, jQuery, JavaScript, WordPress, GitHub enterprise, Git, SVN, BitBucket, Node, WCAG standards, Figma, Jira, Smartsheet, Confluence, writing external and internal documentation
                </div>

                <div className="mb-7">
                    Currently dabbling in more React and Tailwind CSS (that's what this site is built on)
                </div>

                <div>
                    I can also cross stitch Sailor Moon characters and spooky stuff really well.
                </div>
            </div>
        </section>
    )
}