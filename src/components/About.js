// src/components/About.js
import React from "react";

export default function About() {
    return (
        <section id="about" className="flex md:flex-row flex-col items-center pb-20 lg:py-32 border-b-2 border-off-black">
            <div className="w-full md:w-3/5 text-lg">
                <img src="ChrstineMoore.svg" alt="" className="w-10/12 mx-auto py-5"></img>
                <h1 className="sr-only">
                    Hello, my name is Christine Moore.
                </h1>
                <p className="w-full leading-relaxed">
                    <span className="sr-only">I am a</span> Detroit-based Senior UI/UX and Frontend Developer, Technical Consultant, and Tech Lead with nearly 20 years of professional experience in e-commerce, SaaS, and HR industries.
                </p>
            </div>
            <div className="w-full md:w-2/5 mx-auto pt-5 md:pt-0 md:pl-5">
                <img src="me.png" alt="" className="w-1/2 md:w-10/12 mx-auto rounded-full border-4 border-off-black shadow-sm shadow-off-black"></img>
            </div>
        </section>
    );
}