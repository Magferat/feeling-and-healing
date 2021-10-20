import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import '../CSS/custom.css'


const Login = () => {
    const { googleLogIn, logInManually, handleUserEmail,
        handleUserPass } = useAuth();




    return (
        <div className="row container mx-auto mt-5 login-bg text-white mb-5">
            <h2 className="text-center p-3 mt-5">Welcome to Feeling & Healing </h2>

            <form
                onSubmit={logInManually}
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
                    <button type="submit" className="btn nav-bg fw-bold text-white container-fluid
                    w-75 m-2 "><i className="mx-2 fas fa-sign-in-alt"></i> Login </button>
                    <h4 className="text-danger text-center py-2">Or, </h4>
                    <button onClick={googleLogIn} type="button" className="btn nav-bg container-fluid
             m-2  text-white mx-auto px-3"><i className="mx-2 fab fa-google"></i> Continue With Google </button>

                </div>

            </form>


        </div>
    );
};

export default Login;