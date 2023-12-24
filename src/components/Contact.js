// src/components/Contact.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <section id="contact" className="pt-20">
            <div className="container mx-auto px-10 pb-20">
                <div className="w-full lg:pr-24 md:pr-16 flex flex-col md:items-start text-left">
                    <h2 className="sm:text-4xl text-3xl mb-4 font-medium text-white">Contact</h2>
                    <ul className="flex items-center">
                        <li className="pr-5">
                            <a className="transition hover:text-white hover:ease-in" href="mailto:&#099;&#104;&#114;&#105;&#115;&#116;&#105;&#110;&#101;&#064;&#099;&#104;&#114;&#105;&#115;&#116;&#105;&#110;&#101;&#099;&#111;&#100;&#101;&#115;&#046;&#099;&#111;&#109;" aria-label="Email me"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
                        </li>
                        <li className="pr-5">
                            <a className="transition hover:text-white hover:ease-in" href="http://www.linkedin.com/in/cmoore716" rel="noreferrer" target="_blank" aria-label="LinkedIn profile"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        </li>
                        <li className="pr-5">
                            <a className="transition hover:text-white hover:ease-in" href="https://github.com/cmooreDT" rel="noreferrer" target="_blank" aria-label="GitHub profile"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        </li>
                    </ul>
                </div> 
            </div>
        </section>
    )
}