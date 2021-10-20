import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../CSS/custom.css'
import PrivateRoute from '../PrivateRoute/PrivateRoute';

// import { Link } from 'react-router-dom';
// import { useState } from 'react/cjs/react.development';

const DetailedService = () => {

    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);



    useEffect(() => {
        fetch("/data.JSON")
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [serviceDetails])

    let details = serviceDetails.find(detail => detail.id == serviceId)
    // const display = details;
    console.log(details);


    return (
        <div className="container row border my-5 text-center mx-auto row">

            <h2 className=" title-color text-center">Service Details </h2>
            <div className="col">
                <div className="card mx-auto">
                    <img src={details?.img} className=" mx-auto card-img-top w-25 img-fluid " alt="..." />
                    <div className="card-body">
                        <h1 className=" title-color">{details?.name}</h1>
                        <p className="card-text">{details?.dis1}</p>
                        <h3 className=" title-color">Steps Towards Wellness</h3>
                        <p className="card-text">{details?.dis2}</p>

                        <PrivateRoute> <small>  <Link to="/appoint" className='title-color'> Make An Appointment <i className="fas fa-arrow-right"></i> </Link> </small>
                        </PrivateRoute>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default DetailedService;