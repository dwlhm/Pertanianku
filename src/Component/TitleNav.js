import React, { Fragment } from 'react';
import MenuNav from './MenuNav';

function TitleNav(props) {
    return(
        <Fragment>
            <h1 className="text-2xl font-thin">Pertanianku Platform</h1>
            <h2 className="text-xl font-normal">#MeningkatkanProduksiBuahStroberi</h2> 
        </Fragment>
    )
}

export default TitleNav;