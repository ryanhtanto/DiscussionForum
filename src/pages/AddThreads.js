import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import AddThreadsForm from '../components/addThreadForm';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';

function AddThreads() {
        const dispatch = useDispatch();
        const navigate = useNavigate()
        const onAddThread = (title, category, body) => {
                dispatch(asyncAddThread({ title, category, body }));
                navigate('/')
        };

        return (
                <section className='p-5'>
                        <div className='d-flex'>
                                <Link to='/' className='text-decoration-none'>
                                        <FiArrowLeft/>
                                </Link>
                                <h3 className='mx-3'>Threads</h3>
                        </div>
                        <AddThreadsForm addThread={onAddThread}/>
                </section>
        );
}

export default AddThreads;
