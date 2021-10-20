import React from 'react';
import '../CSS/custom.css'

const About = () => {
    return (
        <div id="about">
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

        </div>
    );
};

export default About;