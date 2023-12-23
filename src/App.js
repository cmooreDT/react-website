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
            <Navbar />
            <main id="home" className="text-gray-300 font-sans pt-20">
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
        </Router>
    );
}
