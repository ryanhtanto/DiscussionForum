import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

function AddThreads() {
        return (
                <section className='p-5'>
                        <div className='d-flex'>
                                <Link to='/' className='text-decoration-none'>
                                        <FiArrowLeft/>
                                </Link>
                                <h3 className='mx-3'>Threads</h3>
                        </div>
                        <div className=''>
                                <h3 className='mt-5'>Add Threads</h3>
                                <form className='mt-4'>
                                        <div className="mb-3">
                                                <input type="text" className="form-control" id="title" placeholder="Title" />
                                        </div>
                                        <div className="mb-3">
                                                <textarea className="form-control textarea" placeholder="Leave a comment here" id="comments"></textarea>
                                        </div>
                                        <div className="d-grid gap-2">
                                                <button type="button" className='btn btn-light'><b>Submit</b></button>
                                        </div>
                                </form>
                        </div>
                </section>
        );
}

export default AddThreads;
