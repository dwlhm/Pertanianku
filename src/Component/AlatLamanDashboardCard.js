import React from 'react';

function AlatLamanDashboardCard(props) {
    return(
        <div className={`float-left inline-block w-2/6 mb-5 h-56 rounded shadow-lg flex items-center justify-center bg-white mr-5 p-5 w-1/4 flex-col text-center ${!props.status ? 'bg-red-400' : 'bg-teal-200'}`}>
            <h3 className="text-base">{ props.name }</h3>
            <h2 className="text-4xl">{ props.value }</h2>
            <h2 className="text-base font-bold whitespace-no-wrap">{ props.recommendation }</h2>
        </div>
    )
}

export default AlatLamanDashboardCard;