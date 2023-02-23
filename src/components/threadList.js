import React from 'react';
import ThreadItem, { threadItemShape } from './threadItem';
import PropTypes from 'prop-types';

function ThreadList({ threads }) {
  return (
        <div className='py-1'>
            {
                  threads.map((thread) => (
                        <ThreadItem key={thread.id} {...thread} />
                  ))
            }  
        </div>
  );
}

ThreadList.propTypes = {
      threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadList;
