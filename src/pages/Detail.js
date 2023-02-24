import React, { useEffect } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ThreadDetail from '../components/threadDetail';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function Detail() {
        const { id } = useParams();
        const {
                threadDetail = null,
        } = useSelector((states) => states);

        const dispatch = useDispatch();

        useEffect(() => {
                dispatch(asyncReceiveThreadDetail(id));
        }, [id, dispatch]);

        if (!threadDetail) {
                return null;
        }

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
                                </div>
                                <ThreadDetail {...threadDetail}/>
                        </div>
                </section>
        );
}

export default Detail;
