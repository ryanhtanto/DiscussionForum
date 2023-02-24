import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="content">
      <div className="row">
        <div className="col-md-6 col-lg-6 none-display">
          <h4 className="m-0">Don&apos;t miss  what&apos;s happening</h4>
          <p className="">Share to others!</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="d-flex justify-content-end align-items-center">
            <Link to="/login">
              <button type="button" className="btn btn-primary m-3"><b>Log in</b></button>
            </Link>
            <Link to="/register">
              <button type="button" className="btn btn-light"><b>Register</b></button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
