/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/named */
import React, { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { postedAt } from '../utils/convertTime';
import ThreadComment from './threadComment';
import CommentItem from './commentItem';

function ThreadDetail({
  id, title, body, createdAt, owner, category, comments, refresh,
}) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  return (
    <div className="mt-3">
      <h5>{title}</h5>
      <p className="mb-2">{body.replace(/(<([^>]+)>)/gi, '')}</p>
      <span className="category p-1 px-2">
        #
        {category}
      </span>
      <div className="d-flex mt-2">
        <span>
          Made by
          <b>{owner.name}</b>
        </span>
        <img className="mx-2" src={owner.avatar} style={{ width: '30px', height: 'auto', borderRadius: '20px' }} />
        <span className="text-muted">{postedAt(createdAt)}</span>
      </div>
      <div className="d-flex mt-2">
        <FiMessageCircle onClick={() => setShowCommentBox(!showCommentBox)} />
      </div>
      {showCommentBox && (
      <div>
        <h6 className="mt-2">Leave a Comments</h6>
        <ThreadComment id={id} refresh={refresh} />
        <div className="mt-3 comments">
          <h6>
            Comments (
            {comments.length}
            )
          </h6>
          {
                comments.map((comment) => (
                        <CommentItem key={comment.id} comment={comment} />
                ))
        }
        </div>
      </div>
      )}
      <hr />
    </div>
  );
}
ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  refresh: PropTypes.func.isRequired,
  owner: PropTypes.objectOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ThreadDetail;
