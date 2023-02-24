/* eslint-disable import/named */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils/convertTime';

function CommentItem({ comment }) {
  return (
    <div className="detail-comment mt-3" key={comment.id}>
      <div className="d-flex">
        <img className="" src={comment.owner.avatar} style={{ width: '25px', height: 'auto', borderRadius: '25px' }} />
        <h6 className="mx-2"><b>{comment.owner.name}</b></h6>
      </div>
      <span className="text-muted">{postedAt(comment.createdAt)}</span>
      <p>{comment.content.replace(/(<([^>]+)>)/gi, '')}</p>
    </div>
  );
}
CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentItem;
