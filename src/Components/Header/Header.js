import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import '../CSS/custom.css'
// import useFirebase from './Components//Hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();

    return (


        <>
            <nav className="row navbar navbar-expand-lg nav-bg mx-0 pe-3">
                <div className="container-fluid">
                    <div className="col container d-flex">

                        <img src="https://cdn-icons-png.flaticon.com/512/1787/1787077.png" className="img-fluid nav-img ms-3 mt-1" alt="" />
                        <span className="text-warning font-monospace mt-2 fs-4 fw-bolder">Feeling &
                            Healing</span>

                    </div>
                    <button className="navbar-toggler bg-light ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-sliders-h"></i>
                        {/* <span className="navbar-toggler-icon "></span> */}
                    </button>
                    <div className="collapse navbar-collapse col" id="navbarTogglerDemo01">

                        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                            <li className="nav-item list m-2">
                                <HashLink to="/home" className="link-style"> Home
                                </HashLink>
                            </li>
                            <li className="nav-item list m-2">
                                <HashLink to="/home#about" className="link-style">About</HashLink>
                            </li>
                            <li className="nav-item list m-2">
                                <HashLink to="/home#services" className="link-style">Services</HashLink>
                            </li>
                            <li className="nav-item list m-2">
                                <HashLink to="/appointment" className="link-style">Appointment</HashLink>
                            </li>
                            <li className="nav-item list m-2">
                                <HashLink to="/intern" className="link-style">Internship</HashLink>
                            </li>



                            {
                                !(user?.email) && <li className="nav-item list m-2 ">
                                    <Link to='/login' className="link-style">Login</Link>
                                </li>
                            }

                            {
                                !(user?.email) && <li className="nav-item list m-2 ">
                                    <Link to='/register' className="link-style">Register</Link>
                                </li>
                            }
                            {
                                user?.email &&
                                <li className="list m-2 text-warning fw-bold">
                                    Hello, <br />
                                    {user?.displayName} !

                                </li>
                            }
                            {
                                user?.email &&
                                <button className="btn nav-bg text-white fw-bold list m-2"
                                    onClick={logOut}> log out
                                </button>


                            }

                        </ul>

                    </div>
                </div>
            </nav>


        </>
    );
};

export default Header;
