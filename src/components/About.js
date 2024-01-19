// src/components/About.js
import React from "react";

export default function About() {
    return (
        <section id="about" className="flex items-center">
            <div className="md:inline-block md:w-1/3 hidden xs:hidden pr-10">
                <img src="me.png" alt="" className="rounded-full border-4 border-white"></img>
            </div>
            <div className="md:inline-block md:w-2/3 sm:w-full lg:pr-24 md:pr-16 items-center">
                <h1 className="sm:text-4xl text-3xl mb-5 font-medium text-white">
                    Hello, 
                    <br className="hidden lg:inline-block" />
                    my name is Christine.
                </h1>
                <p className="w-full leading-relaxed mb-4">
                    I am a Detroit-based Senior UI/UX and Frontend Developer, Technical Consultant, and Tech Lead with nearly 20 years of professional experience in retail, SaaS, and HR industries. I work off mugs of hot jasmine green tea and lots of podcasts playing in my ears. 
                </p>
                <p className="w-full leading-relaxed">
                    During my downtime, I enjoy walking my dog Milhouse Van Houten, bingeing <em>Buffy the Vampire Slayer</em>, and cross stitching Sailor Moon characters.
                </p>
            </div>
        </section>
    );
}