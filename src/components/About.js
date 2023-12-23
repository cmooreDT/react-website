// src/components/About.js
import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto px-10">
                <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hello, 
                    <br className="hidden lg:inline-block" />
                    my name is Christine.
                </h1>
                <p className="w-full leading-relaxed">
                    I am a Detroit-based UX/UI web developer with over 15 years of professional experience in the retail, software, and HR industry. I work off mugs of hot jasmine green tea and lots of podcasts playing in my ears. During my downtime, I enjoy walking my dog Milhouse Van Houten, bingeing <em>Buffy the Vampire Slayer</em>, and cross stitching Sailor Moon characters.
                </p>
            </div>
        </section>
    );
}