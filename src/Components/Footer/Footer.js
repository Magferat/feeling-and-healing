import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/custom.css"

const Footer = () => {
    return (
        <div className="row nav-bg">

            <div className='pt-5 footerStyle d-flex justify-content-center mx-auto'>
                <div className="p-2 col">
                    <h6>Hour Of Operation
                    </h6>
                    <small>
                        Monday – Saturday: 09:00 – 22.00
                    </small>

                    <h6>Call Us <i className="fas fa-phone-alt"></i></h6>
                    <small>
                        +08801876314163
                    </small>
                    <h6>Address</h6>
                    <small>
                        123 East 26th Street <br /> Mohakhali, Dhaka.
                    </small>

                </div>

                <div className='col p-2'>
                    <span className="border-bottom border-light fw-5">NAVIGATE</span>
                    <br />
                    <Link className="link-style" to="/home">Home</Link> <br />
                    <Link className="link-style" to="/about">About Us</Link> <br />
                    <Link className="link-style" to="/sirvices">Our Sirvices</Link> <br />
                    <Link className="link-style" to="/intern">Applay For InternShip</Link>
                    <Link className="link-style" to="/appointment">Make An A</Link>
                    <Link className="link-style" to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="row text-white border-top border-light pt-2 text-center">
                <h6>© 2021 Feeling and Healing. All rights reserved.</h6>
            </div>


        </div >
    );
};

export default Footer;