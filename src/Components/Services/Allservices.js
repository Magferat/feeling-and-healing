import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from './Service';

const Allservices = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (

        <div id="services" className="border border-3 container my-5 p-3" >
            <div className="container w-75 "> <h1 className="title-color text-center mt-5 font-monospace">Our Services</h1> </div>

            <div className=" mx-auto row row-cols-lg-2 row-cols-sm-1 row-cols-md-1 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>
                    )
                }
            </div>
        </div>


    );
};

export default Allservices;