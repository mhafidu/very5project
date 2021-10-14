import React from 'react'
import Logo from '../asset/logo.png'
import Icon from '../asset/icon-user.png'
import Home from '../pages/Home'
import '../Navbar.css'
import Hasil from '../pages/Hasil'
import Perusahaan from '../pages/Perusahaan'
import Profil from '../pages/Profil'
import Umum from '../pages/Umum'
import Avatar from '../asset/avatar.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbarafter() {
    return (
       <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light " >
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#"><img src={Logo}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav container-fluid d-flex justify-content-end align-items-center ">
                            <Link to="/after"><a className="nav-link" aria-current="page" href="#"><b>Home</b> </a></Link>
                            <Link to="/Perusahaan"><a className="nav-link" href="#"><b>Cari perusahaan</b></a></Link>
                            <Link to="/cv"><a className="nav-link" href="#"><b>Portofolio</b></a></Link>
                            <a className="nav-link" href="#">
                                <div className="dropdown">
                                    <button className=" dropdown-toggle position-relative" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"transparent",border:"none"}}>
                                        <b style={{color:"#555555"}}>Notifikasi</b>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                            99+
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link to="/Umum"> <li><a className="dropdown-item position-relative" href="#">Umum</a></li></Link>
                                        <Link to="/Hasil"> <li><a className="dropdown-item" href="#">Hasil</a></li> </Link>
                                        <Link to="/News"><li><a className="dropdown-item">News</a> </li> </Link>
                                    </ul>
                                </div>
                            </a>
                            <a className="nav-link" href="#">
                            <Link to="/Profil"> <button type="button" className="btn btn-light d-flex align-items-center justify-content-between" style={{width:"220px"}}>
                                    <div className="image-user-navbar">
                                        <img src={Avatar} style={{width:"10px"}}></img>
                                    </div>
                                    <span classNameName="name-user-navbar"><b>Muhammad Hafidz</b></span>
                                </button></Link>                                   
                            </a>                         
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarafter
