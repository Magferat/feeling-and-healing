import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/custom.css'
import useFirebase from '../Hooks/useFirebase';

const Registration = () => {

    const { handleUserEmail, handleUserPass, handleUserName,
        userRegistration } = useFirebase();

    return (
        <div className="row container mx-auto mt-2 login-bg text-white ">
            <h2 className="text-center mt-5">Welcome to Feeling & Healing </h2>

            <form
                onSubmit={userRegistration}
                className=" p-5">
                {/* <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleUserName}
                            type="text" className="form-control" id="inputName" placeholder="Your Name" required />
                    </div></div> */}

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
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleUserPass}
                            type="password" className="form-control w-75" id="inputPassword3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        {/* <div className="form-check">
                            <input
                                onChange={toogleForLogin}
                                className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already An User?
                            </label>
                            {islogIn && (<Route path="/login" />)}
                        </div> */}
                        <Link to='/login'> Already An User? </Link>
                    </div>
                </div>
                <button
                    // onClick={userRegistration}
                    type="submit" className="btn nav-bg text-white">Register</button>
            </form></div>
    );
};



export default Registration;