import React from "react";
import { HashLink as NavLink } from 'react-router-hash-link';
 
const Navbar = () => {
    return (
        <>
            <nav class="fixed h-15 text-gray-300 bg-slate-950 body-font w-full border-b border-gray-300">
                <div class="flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink smooth to="/#home">
                        Home
                    </NavLink>
                    <NavLink smooth to="/#resume">
                        Professional experience
                    </NavLink>
                    <NavLink smooth to="/#education">
                        Education
                    </NavLink>
                    <NavLink smooth to="/#skills">
                        Skills
                    </NavLink>
                    <NavLink smooth to="/#projects">
                        Projects
                    </NavLink>
                    <NavLink smooth to="/#contact">
                        Contact
                    </NavLink>
                </div>
            </nav>
        </>
    );
};
 
export default Navbar;