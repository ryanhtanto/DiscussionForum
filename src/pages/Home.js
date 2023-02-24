/* eslint-disable import/named */
import React, { useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ThreadList from '../components/threadList';

function Home() {
  const {
    threads = [],
    users = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <section>
      <h3 className="mt-5">Forum Discussion</h3>
      <ThreadList threads={threadList} />
      <Link to="/addThread">
        <div className="float">
          <FiPlus className="my-float" />
        </div>
      </Link>
    </section>
  );
}

export default Home;
