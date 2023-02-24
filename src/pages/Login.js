import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/loginForm';
import { asyncSetAuthUser } from '../states/authUser/action';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return (
    <section>
      <h3 className="p-5 py-5">Sign in to Forum Discussion</h3>
      <div className="p-5 py-3">
        <LoginForm login={onLogin} />
        <p className="mt-3">
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Sign up</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
