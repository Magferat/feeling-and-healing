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
        <>
            <div className="container">
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

        </>
    );
};

export default Allservices;