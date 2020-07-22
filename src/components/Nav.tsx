import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faPlanetRinged, faRocket} from "@fortawesome/pro-regular-svg-icons";
import { Link, NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">

            <div className="text-blue-600 dark:text-blue-300 text-xl">
                <FontAwesomeIcon icon={faPlanetRinged}/>
            </div>

            <ul className="mt-2 text-gray-700 dark:text-gray-400 ">

                <NavLink to="/" activeClassName="text-blue-600" exact className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300 rounded-lg flex flex-col items-center">
                    <FontAwesomeIcon icon={faHouse}/>

                    <span className="text-xs mt-2">Home</span>
                </NavLink>

                <NavLink to="/launches" activeClassName="text-blue-600" className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300 rounded-lg flex flex-col items-center">
                    <FontAwesomeIcon icon={faRocket}/>

                    <span className="text-xs mt-2">Launches</span>
                </NavLink>

            </ul>

            {/*<div className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200 dark:text-blue-500 rounded-full">*/}

            {/*    <a href="/">*/}
            {/*        <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">*/}
            {/*            <path*/}
            {/*                d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7*/}
            {/*7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0*/}
            {/*003-3V10c0-5-4.03-9-9-9z"></path>*/}
            {/*        </svg>*/}
            {/*    </a>*/}

            {/*</div>*/}

        </nav>
    );
}

export default Nav;