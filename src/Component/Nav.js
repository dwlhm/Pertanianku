import React, { Fragment } from 'react';

import LoginNav from './LoginNav';
import TitleNav from './TitleNav';

function Nav(props) {
    return(
        <nav className="bg-teal-400 text-black p-10 pt-1 pb-20">
            <LoginNav />
            <TitleNav />
        </nav>
    )
}

export default Nav;