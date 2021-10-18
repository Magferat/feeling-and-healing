import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
// import useFirebase from '../../Hooks/useFirebase';
import '../CSS/custom.css'
// import useFirebase from './Components//Hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();

    return (
        <>
            <div className="row nav-bg ">
                <div className="col d-flex flex-column ms-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCXy5Q-GLTTw9lya2RoJqFQw28Srz5feVBg&usqp=CAU" className="img-fluid nav-img mt-2" alt="" />
                    <small className="text-white fw-bolder">Feeling & Healing.</small>
                </div>

                <div className="col menu-items me-5">
                    <ul className="d-flex align-items-end justify-content-end mt-2">
                        <li className="list m-2 ">
                            <Link to="/home" className="link-style">Home</Link>
                        </li>
                        <li className="list m-2 ">
                            <Link className="link-style">Services</Link>
                        </li>
                        <li className="list m-2 "><Link className="link-style">Cases</Link>
                        </li>
                        <li className="list m-2 ">
                            <Link className="link-style">About</Link>
                        </li>
                        <li className="list m-2 ">
                            <Link to='/login' className="link-style">Login</Link>
                        </li>
                        <li className="list m-2 ">
                            <Link to='/register' className="link-style">Register</Link>
                        </li>
                        {
                            user?.email && <li className="list m-2 ">
                                <button
                                    onClick={logOut}
                                >log out</button>
                            </li>
                        }

                    </ul>
                </div>
            </div>



        </>
    );
};

export default Header;


