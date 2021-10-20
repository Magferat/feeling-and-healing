import React from 'react';

const Intern = () => {
    return (
        <div>
            <div className="d-flex row my-5 px-2 flex-sm-column flex-lg-row justify-content-lg-center">
                <h1 className="text-info text-center">Apply For Internship!</h1>

                <div className="container ms-2 mt-3 col-sm">
                    <h1 className="title-color">STUDENT INTERNSHIP PROGRAM
                    </h1>
                    <p className="font-monospace">
                        The mission of the Student Internship Program of the Mental Health Clinic of Passaic is to provide an enriched clinical training experience focusing on building clinical and cultural competency for students preparing for a career in mental health.
                        <br /> <br />
                        The fundamental concepts that direct the internship programs are: <br />
                        6 . Wellness and Resilience Focused <br />
                        2 . Community Collaboration <br />
                        3 . Cultural Competence <br />
                        4 . Client Driven <br />
                        5 . Family Driven <br /> <br />
                        We offer internships for counseling and social work master’s degree students seeking placement in an outpatient counseling setting.


                    </p>
                    <p className="title-color">Please Fill this form <i lassName="mx-2 fas fa-sign-in-alt"></i></p>
                </div>
                <div className="container me-2 col-sm">
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
                        <label for="exampleFormControlTextarea1" class="form-label">Education & Experiences </label><br />
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn nav-bg
             m-2  text-white mx-auto px-3">Submit </button>
                </div></div>
        </div>
    );
};

export default Intern;