import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import '../CSS/custom.css'
import '../CSS/custom.css';

const Registration = () => {

    const { handleUserEmail, handleUserPass,
        newUserCreate, userName, error } = useAuth();

    return (
        <div className="row container mx-auto mt-2 login-bg text-white mb-5 ">
            <h2 className="text-center mt-5">Welcome to Feeling & Healing </h2>

            <form
                onSubmit={newUserCreate}
                className=" p-5">
                <div className="row mb-3 ">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label p-1">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={userName} className="form-control w-75" id="inputName" placeholder="Your Name" />
                    </div></div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleUserEmail}
                            type="email" className="form-control w-75"
                            placeholder="your@email.com"
                            id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label p-1">Password</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleUserPass}
                            type="password" className="form-control w-75"
                            placeholder="Follow the instractions" id="inputPassword3" required />
                    </div>
                    <h6>{error}</h6>
                    <p className="text-dark">
                        *Need at least two uppercase letters. <br />
                        *Need at least one special case letter.<br />
                        *Need at least two digits.<br />
                        *Need at least three lowercase letters. <br />
                    </p>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">

                        <Link to='/login'> Already An User? </Link>
                    </div>
                </div>
                <div className="container-fluid mx-auto p-3">
                    <button type="submit" className="btn nav-bg fw-bold text-white container-fluid
                    w-75 p-2 m-2"><i className="mx-2 fas fa-sign-in-alt"></i> Register </button></div>
            </form></div>
    );
};



export default Registration;