import React from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { postedAt } from '../utils/convertTime';

function ThreadItem({
  id, user, title, body, createdAt, totalComments,
}) {
  const { name, avatar } = user;
  return (
    <div className="item-list mt-5">
      <div className="d-flex">
        <img src={avatar} style={{ width: '30px', height: 'auto', borderRadius: '20px' }} alt="avatar" />
        <Link to={`/detail/${id}`} className="text-decoration-none mx-2"><h5>{title}</h5></Link>
      </div>
      <p>{body.replace(/(<([^>]+)>)/gi, '')}</p>
      <div className="d-flex">
        <span>
          Made by
          {' '}
          <b>{name}</b>
        </span>
        <span className="mx-2 text-muted">{postedAt(createdAt)}</span>
      </div>
      <div className="d-flex mt-2">
        <FiMessageCircle className="mt-1" />
        <span className="mx-2">
          Comments (
          {totalComments}
          )
        </span>
      </div>
    </div>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
