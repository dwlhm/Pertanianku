import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';

function AlatLamanNav(props) {

    let { alat } = useParams();

    return(
        <div className="flex items-center justify-end">
            <a href="/"><i class="fas fa-angle-left pr-5 pl-2"></i></a><h3 className="text-xl text-white font-semibold">{props.alat}</h3>
            <div className="text-xs lg:flex-grow text-right font-thin text-black">
                <Link to={`/unit/${props.alat}`} class="block mt-4 lg:inline-block lg:mt-0 hover:shadow-lg mr-4 bg-white pl-4 pt-1 pr-4 pb-1 rounded">
                    Dashboard
                </Link>
                <Link to={`/unit/${props.alat}/history`} class="block mt-4 lg:inline-block lg:mt-0 hover:shadow-lg mr-4 bg-white pl-4 pt-1 pr-4 pb-1 rounded">
                    History
                </Link>  
            </div>
        </div>
    )
}

export default AlatLamanNav;