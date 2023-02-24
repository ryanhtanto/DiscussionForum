import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';

function Navbar({ signOut }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid content">
        <span className="navbar-brand fw-bold">DISCUSSION FORUM</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <FiLogOut onClick={signOut} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// const authUserShape = {
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         photo: PropTypes.string.isRequired,

// };

Navbar.propTypes = {
  // authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navbar;
