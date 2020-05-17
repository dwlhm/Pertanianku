import React, {useState} from 'react';
import '../css/tailwind.css';
import './Navigasi.css';

function NavigasiLandingPage(props) {


    return (
        <nav className={"flex items-center justify-between flex-wrap bg-teal-500 p-4 text-left "+ props.status} id="navtoggle">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Beranda
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Tentang Kami
                        </a>
                    </div>
                </div>
            </nav>
    )
}

export default NavigasiLandingPage;