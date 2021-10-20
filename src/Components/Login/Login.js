import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import '../CSS/custom.css'


const Login = () => {
    const { googleLogIn, logInManually, error, handleUserEmail,
        handleUserPass } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogIn = () => {
        googleLogIn()

            .then(result => {
                history.push(redirect_uri);
            });

    }
    const handleLogInManually = e => {
        e.preventDefault();
        logInManually()

            .then(result => {
                history.push(redirect_uri);
            })

    }


    return (
        <div className="row container mx-auto mt-5 login-bg text-white mb-5">
            <h2 className="text-center p-3 mt-5"> Please Login </h2>

            <form
                onSubmit={handleLogInManually}
                className="px-5 mx-auto ">


                <div className="row  mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label ">Email</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleUserEmail}
                            type="email" className="form-control w-75"
                            placeholder="your@email.com"
                            id="inputEmail3" />
                    </div>

                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 p-1 col-form-label ">Password</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleUserPass}

                            type="password" className="form-control w-75"
                            placeholder="your password" id="inputPassword3" />
                        <h6 className="text-danger">{error}</h6>
                    </div>
                </div>

                <div className="row container mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <Link to='/register'> Not An User? </Link>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mb-5">
                    <button type="submit" className="btn nav-bg fw-bold text-white
                 "><i className="mx-2 fas fa-sign-in-alt mb-2"></i>         Login </button> <br />
                    <h5 className="text-danger ">Or,</h5>
                    <button onClick={handleGoogleLogIn} type="button" className="btn nav-bg text-white mt-2"><i className="mx-2 fab fa-google"></i> Continue With Google </button>

                </div>

            </form>


        </div>
    );
};

export default Login;