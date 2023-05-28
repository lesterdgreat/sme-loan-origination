import React, { useState } from "react";
import 'bootstrap/js/dist/dropdown';
import "../index.css";

export default function SideBarComponent() {
    const aeon_logo = require('../assets/aeon-logo.svg');
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="color-nav col-auto min-vh-100 d-flex justify-content-between flex-column">
                        <div>
                            <a className="text-decoration-none d-sm-none d-md-inline d-lg-inline d-flex align-itemcenter mt-2" href="/dashboard">
                                <img src={aeon_logo} className="d-sm-none d-md-inline d-lg-inline pb-4" alt="Loan Origination System"></img>
                            </a>
                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item fs-6 text-white my-1">
                                    <a href="/sme-loan-origination/dashboard" className="nav-link text-white" aria-current="page">
                                        <i className="bi bi-speedometer2"></i>
                                        <span className="ms-3 d-sm-none d-md-inline d-lg-inline">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item fs-6 text-white my-1">
                                    <a href="/sme-loan-origination/sorting" className="nav-link text-white" aria-current="page">
                                        <i className="bi bi-sort-up"></i>
                                        <span className="ms-3 d-sm-none d-md-inline">Sorting</span>
                                    </a>
                                </li>
                                <li className="nav-item fs-6 text-white my-1">
                                    <a href="/sme-loan-origination/dataentry" className="nav-link text-white" aria-current="page">
                                        <i className="bi bi-file-earmark-pdf"></i>
                                        <span className="ms-3 d-sm-none d-md-inline">Data Entry</span>
                                    </a>
                                </li>
                                <li className="nav-item fs-6 text-white my-1">
                                    <a href="/sme-loan-origination/verification" className="nav-link text-white" aria-current="page">
                                        <i className="bi bi-card-checklist"></i>
                                        <span className="ms-3 d-sm-none d-md-inline">Verification</span>
                                    </a>
                                </li>
                                <li className="nav-item fs-6 text-white my-1">
                                    <a href="/sme-loan-origination/assessment" className="nav-link text-white" aria-current="page">
                                        <i className="bi bi-file-check"></i>
                                        <span className="ms-3 d-sm-none d-md-inline">Assessment</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown open">
                            <a className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="targetId" aria-expanded="false">
                                <i className="bi bi-person-circle"></i><span className="ms-3 d-sm-none d-md-inline">LOS User</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="targetId">
                                <a className="dropdown-item" href="/profile">Profile</a>
                                <a className="dropdown-item" href="/settings">Settings</a>
                                <a className="dropdown-item" href="/logout">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
      );
}