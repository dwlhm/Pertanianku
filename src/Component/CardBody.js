import React from 'react';
import { Link } from 'react-router-dom';

function BodyCard(props) {
    return(
        <Link to={props.isi == '+' ? 'unit-baru': '/unit/'+props.isi} className="max-w-sm h-56 rounded shadow-lg flex items-center justify-center bg-white mr-5 p-5 w-1/4 flex-col">
            {props.isi !== '+'? <i className="fas fa-leaf text-2xl"></i> : null }
            
            <p className="text-6xl font-hairline">{props.isi}</p>
        </Link>
    )
}

export default BodyCard;