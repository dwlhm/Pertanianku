import React, { Fragment } from 'react';

function LoginNav(props) {
    return(
        <Fragment>
            <div className="flex justify-end items-center">
                <button className="text-black bg-white shadow w-64 mt-2 rounded overflow-hidden flex items-center" id="pencarian">
                    <button className="px-4 py-2"><i class="far fa-user"></i></button>
                    <h3 className="bg-white focus:outline-none block w-64 appearance-none leading-normal text-black">Dwi Ilham Maulana</h3>
                    <i class="fas fa-angle-down pr-5" aria-hidden="true"></i>
                </button>
            </div>
        </Fragment>
    )    
}

export default LoginNav;