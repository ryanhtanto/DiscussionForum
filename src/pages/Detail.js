import React, { useState } from 'react';
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Detail() {
        const [showCommentBox, setShowCommentBox] = useState(false);
        return (
                <section>
                        <div>
                                <div className='detail mt-5'>
                                        <div className='d-flex'>
                                                <Link to='/' className='text-decoration-none'>
                                                        <FiArrowLeft/>
                                                </Link>
                                                <span className='mx-3'>Threads</span>
                                        </div>
                                        <div className='mt-3'>
                                                <h5>Pengalaman Belajar di DICODING</h5>
                                                <p>Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.</p>
                                                <div className='d-flex'>
                                                        <span>Made by <b>Dimas Saputra</b></span>
                                                        <span className="mx-2 text-muted">2 Hours ago</span>
                                                </div>
                                                <div className='d-flex mt-2'>
                                                        <FiThumbsUp /> 
                                                        <FiThumbsDown className='mx-4' />
                                                        <FiMessageCircle onClick={() => setShowCommentBox(!showCommentBox)} />
                                                </div>
                                                {showCommentBox && (
                                                        <div>
                                                                <h6 className='mt-2'>Leave a Comments</h6>
                                                                <form>
                                                                        <textarea className="form-control textarea" placeholder="Leave a comment here" id="comments"></textarea>
                                                                        <div className="d-grid gap-2 mt-3">
                                                                                <button type="button" className='btn btn-light'><b>Submit</b></button>
                                                                        </div>
                                                                </form>
                                                                <div className='mt-3 comments'>
                                                                <h6>Comments (1)</h6>
                                                                <div className='detail-comment'>
                                                                        <h6 className='mt-4'><b>Dimas Saputra</b></h6>
                                                                        <span className="text-muted">2 Hours ago</span>
                                                                        <p>Nice!</p>
                                                                        <div className='d-flex mt-2'>
                                                                                <FiThumbsUp/>
                                                                                <FiThumbsDown className='mx-4' />
                                                                        </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                )}
                                                <hr></hr>
                                        </div>
                                        
                                </div>
                        </div>
                </section>
        );
}

export default Detail;
