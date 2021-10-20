import React from 'react';
import '../CSS/custom.css'

const About = () => {
    return (
        <div id="about" className="conteiner m-2">
            <h1 className="title-color text-center mt-5 font-monospace">About Us</h1>

            <div className="container mt-5 mb-5 shad p-0">

                <div className="row d-flex justify-content-between p-4 text-white fw-bold font-monospace mx-auto nav-bg shadow" >

                    <div className="col border-end">
                        <ul >
                            <li className="list ms-4"><img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png" alt="" className="img-fluid w-25 mt-4" /></li>
                            <li className="list"><h1>2950</h1></li>
                            <li className="list">Psychologist </li>
                        </ul></div>
                    <div className="col border-end">
                        <ul>
                            <li className="list ms-4"><img src="https://cdn-icons.flaticon.com/png/512/738/premium/738822.png?token=exp=1634556571~hmac=54987601fcfb4a1936e16b2d641a93e5"
                                className="img-fluid w-25 mt-4" alt="" /></li>
                            <li className="list"><h1>1520</h1></li>
                            <li className="list">All Branches </li>
                        </ul></div>
                    <div className="col border-end">
                        <ul>
                            <li className="list ms-4"><img src="https://cdn-icons.flaticon.com/png/512/3239/premium/3239045.png?token=exp=1634556643~hmac=88225cadcd3c6700a523104670fe6de3"
                                className="img-fluid w-25 mt-4" alt="" /></li>
                            <li className="list"><h1>3250</h1></li>
                            <li className="list">Total Patient </li>
                        </ul></div>
                    <div className="col">
                        <ul>
                            <li className="list ms-4"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135722.png" className="img-fluid w-25 mt-4" alt="" /></li>
                            <li className="list"><h1>2150</h1></li>
                            <li className="list">Achievement</li>
                        </ul>

                    </div>
                </div>

            </div>
            <div className="border">
                <div className="container my-3">
                    <h2 className="my-2 title-color">Our Story </h2>
                    <p>Starting in 2015, the Clinic continued our long-standing partnership with the Passaic Board of Education’s ACCESS After School Program.  Our partnership continues through the 2019-2020 School Year.

                        Our Passaic Board of Education partnership continued with Jump into Summer 1-5pm program from 2014-2019.

                        In August 2016, the Ida Gurtman Therapeutic Children’s Program changed locations from High Street in Passaic to 35 Orange Avenue in Clifton.  This move reestablished our previous relationship with Assumption of the Holy Virgin Orthodox Church.

                        In October 2016, the Clinic was donated an office space in 124 Gregory Avenue, Passaic.  This generous donation by Arnold and Ruth Shurkin. allowed the Clinic to open our Outpatient Annex facility in October 2017.

                        The Clinic purchased 108-114 Hoover Avenue in Passaic in November 2017 to expand our Outpatient Services.  After extensive renovations, our anticipated opening date will be early 2021.

                        In March of 2020, the Clinic adapted for the first-time tele-health services in response to the COVID-19 Pandemic.  Our client’s services were never interrupted due to our HIPPA compliant platform.</p>
                </div>
            </div>

        </div>
    );
};

export default About;