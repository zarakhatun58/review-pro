import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/HafezFaruk/json-data/main/fakeData.json`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="row text-center py-5">
                        <div className="col section-title text-center">
                            <h2>Our Services</h2>
                            <span>Home</span>
                            <span> / Service</span>
                        </div>
                    </div>
                    <div className="row">
                        {
                            services.map(service => <Service
                            key={service.key}
                            service={service}
                            ></Service>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Services;