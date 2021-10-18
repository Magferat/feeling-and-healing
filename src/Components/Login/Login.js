import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import '../CSS/custom.css'
// import useFirebase from './Components//Hooks/useFirebase';
// import useFirebase from './Compone/Hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle, signInManually, handleUserEmail,
        handleUserPass } = useFirebase();




    return (
        <div className="row container mx-auto mt-2 login-bg text-white ">
            <h2 className="text-center mt-5">Welcome to Feeling & Healing </h2>

            <div className="container ">
                <button onClick={signInUsingGoogle}>Google Sign In</button>


            </div>
            <form
                onSubmit={signInManually}
                className=" p-5">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleUserEmail}

                            type="email" className="form-control w-75" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleUserPass}

                            type="password" className="form-control w-75" id="inputPassword3" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            {/* <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">

                               
                            </label> */}
                            <Link to='/register'> Not An User? </Link>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn nav-bg text-white">Login</button>
            </form></div>
    );
};

export default Login;