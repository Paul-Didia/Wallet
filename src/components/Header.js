import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <nav>
                    <ul>
                        <NavLink to="/" activeclassname="nav-active"><li>Home</li></NavLink>
                        <NavLink to="/projets" activeclassname="nav-active"><li>Project</li></NavLink>
                        <NavLink to="/top" activeclassname="nav-active"><li>Top</li></NavLink>
                    </ul>
                </nav>

                <h1>Wallet.</h1>
            </div>
        </div>
    );
};

export default Header;