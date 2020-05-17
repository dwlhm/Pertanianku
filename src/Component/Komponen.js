import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';
import Body from './Body';
import AlatLaman from './AlatLaman';
import AlatLamanBaru from './AlatLamanBaru';

import './Komponen.css';

function Komponen(props) {
    return(
        <Router>
            <Nav />

            <Route exact path="/" component={Body} />
            <Route path="/unit/:alat" component={AlatLaman} />
            <Route path="/unit-baru" component={AlatLamanBaru} />

            <Footer />
        </Router>
    )
}

export default Komponen;