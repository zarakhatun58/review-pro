import React from 'react';
import './Service.css';

const Service = (props) => {
    const {title,instructor,image,price} =props.service;
    return (
            <div className="col-md-4">
                <div className="service mb-4">
                    <div className="card">
                        <img className="card-img-top" src={image} alt="" />
                        <div className="card-body">
                            <h5>{title}</h5>
                            <h6>{instructor}</h6>
                            <h6>${price}</h6>
                            <button className="btn btn-success text-white">Details</button> 

                        </div>
                        </div>
                </div>
            </div>
    );
};

export default Service;