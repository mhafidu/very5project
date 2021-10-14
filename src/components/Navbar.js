import React from 'react'
import Logo from '../asset/logo.png'
import Home from '../pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#"><img src={Logo}></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav container-fluid d-flex justify-content-end">
                            <Link to="/page" ><a class="nav-link" aria-current="page" href="#"><b>Home</b></a></Link>
                            <a class="nav-link" href="#"><b>Cari perusahaan</b></a>
                            <a class="nav-link" href="#"><b>Upload portofolio</b></a>
                            <a class="nav-link" href="#">
                                <div class="dropdown">
                                    <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"transparent",border:"none"}}>
                                        <b style={{color:"#555555"}}>Notifikasi</b>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#"><b>Umum</b></a></li>
                                        <li><a class="dropdown-item" href="#"><b>Hasil</b></a></li>
                                        <li><a class="dropdown-item" href="#"><b>News</b></a></li>
                                    </ul>
                                </div>
                            </a>
                            <Link to="/Home"><button type="button" class="btn btn-outline-primary rounded-pill">Sig up</button></Link> 
                            <Link to="/Home"><button type="button" class="btn btn-outline-primary rounded-pill ms-1">Login</button></Link>                        
                           
                        </div>
                        {/* <Switch>
                           <Route path="/Home">
                            <Home />
                          </Route>
                        </Switch> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
