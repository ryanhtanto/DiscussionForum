import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/register/action';
import RegisterForm from '../components/registerForm';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };
  return (
    <section>
      <h3 className="p-5 py-5">Register to Forum Discussion</h3>
      <div className="p-5 py-3">
        <RegisterForm register={onSubmitRegister} />
        <p className="mt-3">
          Have an account?
          {' '}
          <Link to="/">Sign in</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
