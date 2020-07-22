import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faPlanetRinged, faRocket} from "@fortawesome/pro-regular-svg-icons";
import {NavLink} from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">

            <div className="text-blue-600 dark:text-blue-300 text-xl">
                <FontAwesomeIcon icon={faPlanetRinged}/>
            </div>

            <ul className="mt-2 text-gray-700 dark:text-gray-400 ">

                <NavLink to={process.env.PUBLIC_URL + '/'} activeClassName="text-blue-600" exact className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300 rounded-lg flex flex-col items-center">
                    <FontAwesomeIcon icon={faHouse}/>

                    <span className="text-xs mt-2">Home</span>
                </NavLink>

                <NavLink to={process.env.PUBLIC_URL + '/launches'} activeClassName="text-blue-600" className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300 rounded-lg flex flex-col items-center">
                    <FontAwesomeIcon icon={faRocket}/>

                    <span className="text-xs mt-2">Launches</span>
                </NavLink>

            </ul>
        </nav>
    );
}

export default Nav;