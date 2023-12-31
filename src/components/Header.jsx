import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx"
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/Logo.png"
import { AiOutlineClose } from 'react-icons/ai';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="bg-white  border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                <Link className="flex items-center">
                    <img src={logo} className="h-8 " alt=" Logo" />
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    {
                        isOpen ? <AiOutlineClose size={30} /> :
                            <RxHamburgerMenu size={30} />
                    }
                </button>
                <div className={` w-full md:block md:w-auto ${isOpen ? "block" : "-mt-96 sm:-mt-0"} duration-1000`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">

                        <li>
                            <NavLink to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/donation" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">Donation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">Statistics</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;
