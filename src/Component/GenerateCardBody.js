import React, { Fragment } from 'react';
import CardBody from './CardBody';

function GenerateCardBody(props) {
    var names = ['Unit 1', 'Unit 2', 'Unit 3', '+'];
        var namesList = names.map(function(name){
                return <CardBody isi={name} />;
            })
    return(
        <div className="flex justify-start items-center pl-10 pr-10" id="generatecardbody">
            {namesList}
        </div>
    )
}

export default GenerateCardBody;