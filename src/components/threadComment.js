import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncAddComment } from '../states/threadDetail/action';

function ThreadComment({ id }) {
        const [content, setContent] = useInput('');
        const dispatch = useDispatch();

        const createComment = async (e) => {
                e.preventDefault();
                dispatch(asyncAddComment({ content, id }));
        };
        return (
                <>
                        <form onSubmit={createComment}>
                                <textarea className="form-control textarea" placeholder="Leave a comment here" id="comments" value={content} onChange={setContent}></textarea>
                                <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className='btn btn-light' ><b>Submit</b></button>
                                </div>
                        </form>
                </>
        );
}

ThreadComment.propTypes = {
        id: PropTypes.string.isRequired,
};

export default ThreadComment;
