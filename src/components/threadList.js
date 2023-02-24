import React from 'react';
import ThreadItem, { threadItemShape } from './threadItem';
import PropTypes from 'prop-types';

function ThreadList({ threads }) {
      return (
            <div className='py-1'>
                  {
                        threads.map((thread) => (
                              <div key={thread.id}>
                                    <ThreadItem  {...thread}/>
                                    <hr></hr>
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
