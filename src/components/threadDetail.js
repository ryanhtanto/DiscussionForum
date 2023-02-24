import React, { useState } from 'react';
import { FiMessageCircle } from "react-icons/fi";
import PropTypes from 'prop-types';
import { postedAt } from '../utils/convertTime';
import ThreadComment from './threadComment';

function ThreadDetail({ id, title, body, createdAt, owner, category, comments }) {
        const [showCommentBox, setShowCommentBox] = useState(false);

        return (
                <>
                        <div className='mt-3'>
                                <h5>{title}</h5> 
                                <p className='mb-2'>{body.replace(/(<([^>]+)>)/gi, "")}</p>
                                <span className='category p-1 px-2'>#{category}</span>
                                <div className='d-flex mt-2'>
                                        <span>Made by <b>{owner.name}</b></span>
                                        <img className='mx-2' src={owner.avatar} style={{ width: '30px', height: 'auto', borderRadius: '20px'}} />
                                        <span className="text-muted">{postedAt(createdAt)}</span>
                                </div>
                                <div className='d-flex mt-2'>
                                        <FiMessageCircle onClick={() => setShowCommentBox(!showCommentBox)} />
                                </div>
                                {showCommentBox && (
                                        <div>
                                                <h6 className='mt-2'>Leave a Comments</h6>
                                                <ThreadComment id={id}/>
                                                <div className='mt-3 comments'>
                                                        <h6>Comments ({comments.length})</h6>
                                                        {
                                                                comments.map((comment) => (
                                                                        <div className='detail-comment mt-3' key={comment.id}>
                                                                                <div className='d-flex'>
                                                                                        <img className='' src={comment.owner.avatar} style={{ width: '25px', height: 'auto', borderRadius: '25px'}} />
                                                                                        <h6 className='mx-2'><b>{comment.owner.name}</b></h6>
                                                                                </div>
                                                                                <span className="text-muted">{postedAt(comment.createdAt)}</span>
                                                                                <p>{comment.content.replace(/(<([^>]+)>)/gi, "")}</p>
                                                                        </div>
                                                                ))
                                                        }  
                                                </div>
                                        </div>
                                )}
                                <hr></hr>
                        </div>
                </>
        );
}
ThreadDetail.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        owner: PropTypes.objectOf(PropTypes.string).isRequired,
        comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ThreadDetail;
