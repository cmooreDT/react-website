import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Carousel from "./components/Carousel";
import './App.css';

export default function App() {
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <main id="home" className="bg-stone-200 text-off-black font-serif container mx-auto pt-20 px-5 md:px-2 lg:px-10">
                <Routes>
                    <Route
                        path="/"
                        element={(
                            <>
                            <About />
                            <Resume />
                            <Education />
                            <Skills />
                            <Projects />
                            <Contact />
                            </>
                        )}
                    />
                    <Route path="/carousel" element={<Carousel />} />
                </Routes>
            </main>
            <footer className="mb-5 text-center text-sm">
                christinecodes.com
            </footer>
        </Router>
    );
}
