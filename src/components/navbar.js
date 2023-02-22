import React from 'react';
import { FiLogOut } from "react-icons/fi";

function Navbar() {
        return (
                <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid content">
                                <span className="navbar-brand fw-bold">DISCUSSION FORUM</span>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav ms-auto">
                                                <li className="nav-item">
                                                        <FiLogOut />
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
}

export default Navbar;
