import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from './Service';

const Allservices = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // test(services);

    // const test = (props) => {
    //     props.map(dio => console.log(dio))
    // }

    // test(services);


    return (

        <div id="services" className="container">
            <h1 className="title-color text-center mt-5 font-monospace">Our Services</h1>
            <div className="row row-cols-lg-2 row-cols-sm-1 row-cols-md-1 g-4">
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