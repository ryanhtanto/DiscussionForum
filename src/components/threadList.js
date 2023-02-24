/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './threadItem';

function ThreadList({ threads }) {
  return (
    <div className="py-1">
      {
                        threads.map((thread) => (
                          <div key={thread.id}>
                            <ThreadItem {...thread} />
                            <hr />
                          </div>
                        ))
                  }
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadList;
