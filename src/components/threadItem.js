import React from 'react';
import { Link } from 'react-router-dom';
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { postedAt } from '../utils/convertTime';
import PropTypes from 'prop-types';

function ThreadItem({  title, body, createdAt, ownerId, upVotesBy, downVotesBy, totalComments }){
        return (
                <div className='item-list mt-5'>
                        <Link to='/detail' className='text-decoration-none'><h5>{title}</h5></Link>
                        <p>{body.replace(/(<([^>]+)>)/gi, "")}</p>
                        <div className='d-flex'>
                                <span>Made by <b>{ownerId}</b></span>
                                <span className="mx-2 text-muted">{postedAt(createdAt)}</span>
                        </div>
                        <div className='d-flex mt-2'>
                                <FiThumbsUp className='mt-1'/> <span className='mx-2'>{upVotesBy.length}</span>
                                <FiThumbsDown className='mt-1' /> <span className='mx-2'>{downVotesBy.length}</span> 
                        </div>
                        <h6 className='mt-2'>Comments ({totalComments})</h6>
                        <hr></hr>
                </div>
        );
}

const threadItemShape = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        ownerId: PropTypes.string.isRequired,
        upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
        downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
        totalComments: PropTypes.number.isRequired,
        // user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
        ...threadItemShape,
        // like: PropTypes.func,
}

export { threadItemShape };


export default ThreadItem;