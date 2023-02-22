import React from 'react';
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Home() {
        return (
                <section>
                        <h3 className='mt-5'>Forum Discussion</h3>
                        <div className='py-1'>
                                <div className='item-list mt-5'>
                                        <Link to='/detail' className='text-decoration-none'><h5 >Pengalaman Belajar di DICODING</h5></Link>
                                        <p>Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.</p>
                                        <div className='d-flex'>
                                                <span>Made by <b>Dimas Saputra</b></span>
                                                <span className="mx-2 text-muted">2 Hours ago</span>
                                        </div>
                                        <div className='d-flex mt-2'>
                                                <FiThumbsUp/>
                                                <FiThumbsDown className='mx-4' />
                                        </div>
                                        <h6 className='mt-2'>Comments (1)</h6>
                                        <hr></hr>
                                </div>
                        </div>
                        <Link to={`/addThread`}>
                                <div className='float'>
                                        <FiPlus className='my-float'/>
                                </div>
                        </Link>
                </section>
        );
}

export default Home;
