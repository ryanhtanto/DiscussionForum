import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
        return (
                <section>
                        <h3 className='p-5 py-5'>Register to Forum Discussion</h3>
                        <div className='p-5 py-3'>
                                <form>
                                        <div className="mb-3">
                                                <input type="text" className="form-control" id="username" placeholder="Name" />
                                        </div>
                                        <div className="mb-3">
                                                <input type='password' className="form-control" id="password" placeholder="Password"></input>
                                        </div>
                                        <div className="mb-3">
                                                <input type='password' className="form-control" id="copassword" placeholder="Comfirm Password"></input>
                                        </div>
                                        <div className="d-grid gap-2">
                                                <button type="button" className='btn btn-light'><b>Submit</b></button>
                                        </div>
                                </form>
                                <p className='mt-3'>Have an account? <Link to="/login">Sign in</Link></p>
                        </div>
                </section>
        );
}

export default Register;
