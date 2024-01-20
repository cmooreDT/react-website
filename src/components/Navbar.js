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
            <nav aria-label="site navigation" ref={ref} class="border border-gray-300 md:border-t-0 md:border-r-0 md:border-b md:border-l-0 rounded-md md:rounded-none md:shadow-none transition-all duration-400 fixed h-15 text-white bg-slate-950 md:w-full md:py-4 z-50" role="navigation">
                <button onClick={() => setNavbarOpen(!navbarOpen)} className="transition hover:text-gray-300 hover:ease-in md:hidden p-4" data-collapse-toggle="navbar-sticky" aria-expanded={navbarOpen} aria-controls="navbar-sticky">
                    {!navbarOpen ?
                        <FontAwesomeIcon icon={faBars} />:
                        <FontAwesomeIcon icon={faClose} />
                    }
                    <span className="sr-only">{navbarOpen ? 'close' : 'open'} mobile menu</span>
                </button>
                <div className={`${navbarOpen ? 'flex' :'hidden md:flex'} flex-col items-start justify-between mx-auto pb-4 md:pb-0 px-4 space-y-3 md:space-y-0 md:flex-row flex-wrap md:items-center`} id="navbar-sticky">
                    <NavLink className="transition hover:text-gray-300 hover:underline" smooth to="/#home">
                        Home
                    </NavLink>
                    <NavLink className="transition hover:text-gray-300 hover:underline" smooth to="/#resume">
                        Professional experience
                    </NavLink>
                    <NavLink className="transition hover:text-gray-300 hover:underline" smooth to="/#education">
                        Education
                    </NavLink>
                    <NavLink className="transition hover:text-gray-300 hover:underline" smooth to="/#skills">
                        Skills
                    </NavLink>
                    <NavLink className="transition hover:text-gray-300 hover:underline" smooth to="/#projects">
                        Projects
                    </NavLink>
                    <NavLink className="transition hover:text-gray-300 hover:underline" smooth to="/#contact">
                        Contact
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Navbar;