import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import '../CSS/custom.css'
// import useFirebase from './Components//Hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();

    return (


        <>
            <nav class="row navbar navbar-expand-lg nav-bg mx-0 pe-3">
                <div class="container-fluid">
                    <div className="col container d-flex flex-column">

                        <img src="https://cdn-icons.flaticon.com/png/512/3475/premium/3475693.png?token=exp=1634718571~hmac=b34e1ca864009a4dd6266a249eb4c20f" className="img-fluid nav-img ms-3 mt-1" alt="" />
                        <small className="text-white mt-2 fw-bolder">Feeling &
                            Healing</small>

                    </div>
                    <button class="navbar-toggler bg-light ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-sliders-h"></i>
                        {/* <span class="navbar-toggler-icon "></span> */}
                    </button>
                    <div class="collapse navbar-collapse col" id="navbarTogglerDemo01">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item list m-2">
                                <HashLink to="/home" className="link-style"> Home
                                </HashLink>
                            </li>
                            <li class="nav-item list m-2">
                                <HashLink to="/home#about" className="link-style">About</HashLink>
                            </li>
                            <li class="nav-item list m-2">
                                <HashLink to="/home#services" className="link-style">Services</HashLink>
                            </li>

                            <li class="nav-item list m-2">

                                <Link to='/internShip' className="link-style">Internship</Link>

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
                                    Welcome <br />
                                    {user.displayName}
                                </li>
                            }
                            {
                                user?.email &&
                                <button className="btn nav-bg text-white"
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
/*
<div className="row nav-bg ">
                <div className="col d-flex flex-column ms-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCXy5Q-GLTTw9lya2RoJqFQw28Srz5feVBg&usqp=CAU" className="img-fluid nav-img mt-2" alt="" />
                    <small className="text-white fw-bolder">Feeling & Healing.</small>
                </div>

                <div className="col  me-5  ">

                    <ul className="d-flex align-items-end justify-content-end mt-2 navbar-collapse collapse">
                        <li className="list m-2 ">
                            <HashLink to="/home" className="link-style"> Home
                            </HashLink>

                        </li>
                        <li className="list m-2 ">

                            <HashLink to="/home#services" className="link-style">Services</HashLink>
                        </li>
                        <li className="list m-2 ">

                            <HashLink to="/home#about" className="link-style">About</HashLink>
                        </li>

                        <li className="list m-2 ">
                            <Link to='/internShip' className="link-style">Internship</Link>
                        </li>
                        {
                            !(user?.email) && <li className="list m-2 ">
                                <Link to='/login' className="link-style">Login</Link>
                            </li>
                        }

                        {
                            !(user?.email) && <li className="list m-2 ">
                                <Link to='/register' className="link-style">Register</Link>
                            </li>
                        }

                        {
                            user?.email &&
                            <li className="list m-2 text-warning fw-bold">
                                Welcome <br />
                                {user.displayName}
                            </li>
                        }
                        {
                            user?.email &&
                            <button className="btn nav-bg text-white"
                                onClick={logOut}> log out
                            </button>


                        }



                    </ul>
                </div>
            </div>


*/


