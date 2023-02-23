import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterForm({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
        <form>
                <div className="mb-3">
                        <input type="text" className="form-control" id="username" placeholder="Name" value={name} onChange={onNameChange}/>
                </div>
                <div className="mb-3">
                        <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={onEmailChange}/>
                </div>
                <div className="mb-3">
                        <input type='password' className="form-control" id="password" placeholder="Password" value={password} onChange={onPasswordChange}/>
                </div>
                <div className="d-grid gap-2">
                        <button type="button" className='btn btn-light' onClick={() => register({ name, email, password })}><b>Submit</b></button>
                </div>
        </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
