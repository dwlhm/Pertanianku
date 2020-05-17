import React from 'react';
import { useParams, BrowserRouter as Router, Route } from 'react-router-dom';

import AlatLamanNav from './AlatLamanNav';
import AlatLamanDashboard from './AlatLamanDashboard';
import AlatLamanHistory from './AlatLamanHistory';

function AlatLaman(props) {

    let { alat } = useParams();

    return(
        <div className="m-10" id="alatlaman">
            <Router>
                <AlatLamanNav alat={alat} />
                <div className="pt-5">
                    <Route exact path={`/unit/${alat}`} component={AlatLamanDashboard} />
                    <Route path={`/unit/${alat}/history`} component={AlatLamanHistory} />
                </div>
            </Router>
        </div>
    )
}

export default AlatLaman;