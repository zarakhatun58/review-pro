import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const SingleService = () => {
    const [services,setServices] = useState([]);
    let size = 4;
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
                            <h2>Education Subject</h2>
                        </div>
                </div>
                <div className="row">
                    {
                        services.slice(0,size).map((pd)=>(

                       
                    <div className="col-md-3">
                        <div className="service mb-4">
                            <div className="card">
                                <img className="card-img-top" src={pd.image} alt="" />
                                <div className="card-body">
                                <h4>{pd.title}</h4>
                                <h5>Teacher: {pd.instructor}</h5>
                                <h5>Price: ${pd.price}</h5>
                                <button className="btn btn-success text-white">Details</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                     ))}
                </div>
            </div>
        </div>
    );
};

export default SingleService;