import React, { useState, Fragment, useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';

import AlatLamanDashboardCard from './AlatLamanDashboardCard';

function AlatLamanDashboard(props) {

    const [ data, setData ] = useState({
        intensitas_cahaya: {
            name: "Intensitas Cahaya",
            value: "Loading",
            status: 0,
            recommendation: "Loading"
        },
        kelembapan_tanah: {
            name: "Kelembapan Tanah",
            value: "Loading",
            status: 0,
            recommendation: "Loading"
        },
        kelembapan_udara: {
            name: "Kelembapan Udara",
            value: "Loading",
            status: 0,
            recommendation: "Loading"
        },
        ph_tanah: {
            name: "PH Tanah",
            value: "Loading",
            status: 0,
            recommendation: "Loading"
        },
        suhu: {
            name: "Suhu",
            value: "Loading",
            status: 0,
            recommendation: "Loading"
        }
      })

    useEffect(() => {
        let pusher = new Pusher("9a3faee0990b6f25cfa3", {
            cluster: "ap1",
            encrypted: true
        });

        let channel = pusher.subscribe('data-notif');

        channel.bind('new-data', (data) => {
                setData(data);
        });

        pusher.connection.bind('connected', () => {
            axios.get('https://strawxserver.herokuapp.com/data1')
                .then(response => {
                    setData(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        })
    })

    return(
        <div className="flex justify-center flex-wrap">
            { Object.entries(data).map((t,k) => <AlatLamanDashboardCard name={t[1].name} value={t[1].value} status={t[1].status} recommendation={t[1].recommendation} />) }
        </div>
    )
}

export default AlatLamanDashboard;