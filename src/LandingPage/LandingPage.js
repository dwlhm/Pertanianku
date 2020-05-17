import React from 'react';
import '../css/tailwind.css';
import './LandingPage.css';

function LandingPage() {

    return(
        <div id="landingPage" className="flex items-center justify-center bg-gray-900 p-20">
            <div id="landingPageLeft" className=" mr-10 shadow-xl">
                <iframe src="https://www.youtube.com/embed/RcTtIofYIho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div id="landingPageRight">
                <h3 className="text-left"><span>Kegunaan:</span></h3>
                <div className="flex items-center">
                    <i className="fas fa-desktop mr-4 w-10 text-4xl text-center mb-2 mt-2"></i><span>Monitoring kondisi tanaman strawberry secara realtime</span>
                </div>
                <div className="flex items-center">
                    <i className="fab fa-nutritionix mr-4 w-10 text-4xl text-center mb-2 mt-2"></i><span>Kontrol pemberian nutrisi kepada tanaman</span>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-bug mr-4 w-10 text-4xl text-center mb-2 mt-2"></i><span>Kontrol hama pengganggu tanaman</span>
                </div>
            </div>
        </div>
    )
    
}

export default LandingPage;