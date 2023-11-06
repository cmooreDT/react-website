import React from "react";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import Resume from "./components/Resume";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import './App.css';

export default function App() {
    return (
        <main className="text-gray-300 bg-slate-950 body-font">
            {/* <Navbar /> */}
            <About />
            <Resume />
            <Certifications />
            <Contact />
            {/* <Projects />
            <Skills />
            <Testimonials /> */}
        </main>
    );
}
