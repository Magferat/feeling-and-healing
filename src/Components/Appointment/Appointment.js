import React from 'react';

const Appointment = () => {
    return (
        <div className="d-flex row flex-lg-row my-5 px-2 flex-sm-column justify-content-lg-center">
            <h1 className="text-info text-center">Make An Appointment!</h1>
            <div className="container mt-3 col-sm">
                <h1 className="title-color">Hello, You Need consultation?</h1>
                <p className="font-monospace">
                    The Mission of the Feeling & Heeling is to help adults, children and families grow stronger by finding mental balance, building life, and coping skills and improving overall wellbeing.

                    The main focus of is intervention is to help clients become positive, productive members of their communities.
                </p>
                <p className="title-color">Please Fill this form <i className="mx-2 fas fa-sign-in-alt"></i></p>
            </div>
            <div className="container col-sm">
                <div className="mb-3 ">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10"> <br />
                        <input type="text" className="form-control " id="inputName" />
                    </div></div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label> <br />
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message </label><br />
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" className="btn nav-bg
             m-2  text-white mx-auto px-3">Submit </button>
            </div></div>
    );
};

export default Appointment;