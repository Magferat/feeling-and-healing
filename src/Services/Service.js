import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/custom.css'

const Service = (props) => {

    const { img, name, dis1 } = props.service;
    return (

        <>
            <div className="container p-0 mt-5 service-style " >
                <div className="card col h-100 border-0 text-center card-style" >

                    <img src={img} className="img-fluid w-50 mt-4  mx-auto rounded-circle" alt="item" />
                    <div className="card-body">
                        <h5 className="title-color ">{name}</h5>
                        <small className=" font-monospace"> {dis1}</small><br />
                        <small><Link class='title-color'> Read More <i className="fas fa-arrow-right"></i> </Link> </small>

                        {/* onClick={login} */}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Service;