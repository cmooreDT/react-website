import React, {useState, useRef, useEffect} from "react";
import { HashLink as NavLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const ref = useRef();
    const [navbarOpen, setNavbarOpen] = useState(false);
    useEffect(() => {
        const handler = (event) => {
        if (
            navbarOpen &&
            ref.current &&
            !ref.current.contains(event.target)
        ) {
            setNavbarOpen(false);
        }
        };
        document.addEventListener('mousedown', handler);
        return () => {
        document.removeEventListener('mousedown', handler);
        };
    }, [navbarOpen]);
    return (
        <>
            <nav aria-label="site navigation" ref={ref} class="bg-off-black text-white font-serif fixed z-50 right-0 h-15 flex flex-col items-end md:block md:w-full md:py-4 border border-gray-300 md:border-x-0 md:border-t-0 rounded-md md:rounded-none md:shadow-none transition-all duration-400" role="navigation">
                <button id="menubutton" data-collapse-toggle="navbar-sticky" aria-expanded={navbarOpen} aria-haspopup="true" aria-controls="navbar-sticky" onClick={() => setNavbarOpen(!navbarOpen)} className="transition hover:text-gray-300 hover:ease-in-out md:hidden p-4">
                    {!navbarOpen ?
                        <FontAwesomeIcon icon={faBars} />:
                        <FontAwesomeIcon icon={faClose} />
                    }
                    <span className="sr-only">{navbarOpen ? 'close' : 'open'} mobile menu</span>
                </button>
                <div id="navbar-sticky" role="menu" aria-labelledby="menubutton" className={`${navbarOpen ? 'flex' :'hidden md:flex'} flex-col flex-wrap md:flex-row items-start md:items-center md:justify-end gap-x-5 mx-auto pb-4 md:pb-0 px-4 space-y-3 md:space-y-0 `}>
                    <NavLink role="menuitem" className="transition hover:text-gray-300 hover:underline hover:ease-in-out" smooth to="/#home">
                        Home
                    </NavLink>
                    <NavLink role="menuitem" className="transition hover:text-gray-300 hover:underline hover:ease-in-out" smooth to="/#resume">
                        Professional experience
                    </NavLink>
                    <NavLink role="menuitem" className="transition hover:text-gray-300 hover:underline hover:ease-in-out" smooth to="/#education">
                        Education
                    </NavLink>
                    <NavLink role="menuitem" className="transition hover:text-gray-300 hover:underline hover:ease-in-out" smooth to="/#skills">
                        Skills
                    </NavLink>
                    <NavLink role="menuitem" className="transition hover:text-gray-300 hover:underline hover:ease-in-out" smooth to="/#projects">
                        Projects
                    </NavLink>
                    <NavLink role="menuitem" className="transition hover:text-gray-300 hover:underline ease-in-out" smooth to="/#contact">
                        Contact
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Navbar;