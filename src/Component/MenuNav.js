import React from 'react';

function MenuNav(props) {
    return(
        <div class="text-base lg:flex-grow text-left font-thin text-black mt-8">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:underline mr-4">
                Tentang Kami
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:underline mr-4">
                Cara Kerja
            </a>    
        </div>
    )
}

export default MenuNav;