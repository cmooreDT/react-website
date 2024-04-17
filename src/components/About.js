// src/components/About.js
import React from "react";

export default function About() {
    return (
        <section id="about" className="flex md:flex-row flex-col items-center pb-20 lg:py-32 border-b-2 border-red-700">
            <div className="w-full md:w-3/5 text-lg">
                <img src="ChrstineMoore.svg" alt="" className="w-10/12 mx-auto py-5"></img>
                <h1 className="sr-only">
                    Hello, my name is Christine Moore.
                </h1>
                <p className="mb-2">
                    <span className="sr-only">I am a</span> Detroit-based Senior UI/UX and Front-end Developer, Technical Consultant, and Tech Lead with nearly 20 years of professional experience in e-commerce, SaaS, and HR industries.
                </p>
                <p>
                    I excel at providing technical leadership by mentoring developers and guiding customers on technical issues and best practices.
                </p>
            </div>
        </section>
    );
}