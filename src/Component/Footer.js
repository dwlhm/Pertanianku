    import React, { Fragment } from 'react';
    import MenuNav from './MenuNav';

    function Footer(props) {
        return( 
            <Fragment>
                <div className="p-10">
                    <MenuNav />
                    <p className="text-sm font-thin">Copyright © 2020</p>  
                </div>
            </Fragment> 
        )
    }

    export default Footer;