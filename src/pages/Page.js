import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// css
import '../Page.css'
// gambar
import Gambar from '../asset/gambar.png'
import Logo from '../asset/logo.png'
import Navbar from '../components/Navbar'
import Gambar2 from '../asset/gambar2.svg'
import Gambar3 from '../asset/gambar3.svg'
import Check from '../asset/check.svg'
import Globe from '../asset/globe.svg'
import Bunga from '../asset/bunga.svg'
import Mageng from '../asset/mageng.png'
import Magang from '../asset/magang.png'
import Cve from '../asset/cve.png'
// component
import Navbarafter from '../components/Navbarafter'
// halaman
import Perusahaan from './Perusahaan'
import Cv from './Cv'

  


function page() {
    
    
    return (
        <div>
          

        {/* <!--========== HEADER ==========--> */}
        <header className="l-header" id="header">
            {/* <Navbarafter /> */}
        </header>

        <main className="l-main">
            {/* <!--========== HOME ==========--> */}
            <section className="home" id="home">
                <div className="home__container bd-container bd-grid">
                    <div className="home__data">
                        <h1 className="home__title"><b>Start Small, Think Big <br/>DO IT NOW !</b></h1>
                        <h2 className="home__subtitle">Masa Depan Ada Di Tanganmu! Wujudkan PekerjaanImpian Mu!</h2>
                        <a href="#" className="button">View Menu</a>
                    </div>
    
                    <img src={Gambar} alt="" className="home__img"/>
                </div>
            </section>
            
            {/* <!--========== ABOUT ==========--> */}
            <section className="about section bd-container" id="about">
                <div className="about__container  bd-grid">
                    <div className="about__data">
                        <span className="section-subtitle about__initial"><b>About us</b></span>
                        <h2 className="section-title about__initial"><b> Menghubungkan user dengan perusahaan</b></h2>
                        <p className="about__description">membantu anda mencari tempat magang ataupun pekerjaan, mencari tempat magang maupun pekerjaan sesuai dengan bidang keahlian Anda cari</p>
                        <a href="#" className="button">Explore history</a>
                    </div>

                    <img src={Gambar3} alt="" className="about__img"/>
                </div>
            </section>

            {/* <!--========== SERVICES ==========--> */}
            <section className="services section bd-container" id="services">
                <span className="section-subtitle"><b>Offering</b> </span>
                <h2 className="section-title"><b>Our amazing services</b> </h2>

                <div className="services__container  bd-grid">
                    <div className="services__content">
                        <svg className="services__img" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.319,4.431,8.5,18.249a1,1,0,0,1-1.417,0L1.739,12.9a1,1,0,0,0-1.417,0h0a1,1,0,0,0,0,1.417l5.346,5.345a3.008,3.008,0,0,0,4.25,0L23.736,5.847a1,1,0,0,0,0-1.416h0A1,1,0,0,0,22.319,4.431Z"/></svg>
                        <h3 className="services__title">Mudah dan Efisien</h3>
                        <p className="services__description">mencari tempat magang ataupun pekerjaan dengan mudah dan efisien.</p>
                    </div>

                    <div className="services__content">
                        <svg className="services__img" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z"/></svg>
                        <h3 className="services__title">Semua Bidang Keahlian</h3>
                        <p className="services__description">mencari tempat magang maupun pekerjaan sesuai dengan bidang keahlian Anda cari.</p>
                    </div>

                    <div className="services__content">
                        <svg className="services__img" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.535,14.725a1.99,1.99,0,0,0-1.726-.716A11.993,11.993,0,0,0,13,18.987V13.91A6.006,6.006,0,0,0,18,8c0-2.793-1.943-5.152-3.844-7.091a3.085,3.085,0,0,0-4.312,0C7.943,2.848,6,5.207,6,8a6.006,6.006,0,0,0,5,5.91v5.077a11.993,11.993,0,0,0-8.809-4.978,1.992,1.992,0,0,0-1.726.716,1.971,1.971,0,0,0-.393,1.792C2.111,23.855,11.591,24,11.994,24h.012c.4,0,9.884-.145,11.923-7.483A1.975,1.975,0,0,0,23.535,14.725ZM8,8c0-2.654,3.318-5.719,3.338-5.736C10.973,3.2,8.693,8.9,11,9a1,1,0,0,0,1-1,13.472,13.472,0,0,1,1.257-5.137C14.688,4.393,16,6.154,16,8A4,4,0,0,1,8,8ZM2.006,16a10.268,10.268,0,0,1,8.462,5.863C7.971,21.517,3.2,20.3,2.006,16Zm11.539,5.861A10.379,10.379,0,0,1,22,15.981C20.806,20.283,16.046,21.511,13.545,21.861Z"/></svg>                       
                        <h3 className="services__title">Hemat</h3>
                        <p className="services__description">menghemat biaya untuk berkeliling mencari lowongan pekerjaan atau magang.</p>
                    </div>
                </div>
            </section>

            {/* <!--========== MENU ==========--> */}
            <section className="menu section bd-container" id="menu">
                <span className="section-subtitle"><b>Special</b></span>
                <h2 className="section-title"><b>Menu Magangs</b></h2>

                <div className="menu__container bd-grid">
                    <Link to="/Perusahaan"><div className="menu__content">
                        <img src={Magang} alt="" className="menu__img"/>
                        <h3 className="menu__name">Magang</h3>
                        <a href="#" className="button menu__button"><svg className="menu-button-input"  style={{width:"15px",height:"15px"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"/></svg></a>
                    </div></Link>
                    <Link to="/Perusahaan"><div className="menu__content">
                        <img src={Mageng} alt="" className="menu__img"/>
                        <h3 className="menu__name">Kerja</h3>                    
                        <a href="#" className="button menu__button"><svg className="menu-button-input"  style={{width:"15px",height:"15px"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"/></svg></a>
                    </div></Link>
                    <Link to="/cv"><div className="menu__content">
                        <img src={Cve} alt="" className="menu__img"/>
                        <h3 className="menu__name">Upload portofolio</h3>
                        <a href="#" className="button menu__button"><svg className="menu-button-input" style={{width:"15px",height:"15px"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"/></svg></a>
                    </div></Link>
                </div>
            </section>

            {/* <!--===== APP =======--> */}
            <section className="app section bd-container">
                <div className="app__container bd-grid">
                    <div className="app__data">
                        <span className="section-subtitle app__initial"><b>App</b></span>
                        <h2 className="section-title app__initial"><b>App is aviable</b></h2>
                        <p className="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                        <div className="app__stores">
                            <a href="#"><img src="assets/img/app1.png" alt="" className="app__store"/></a>
                            <a href="#"><img src="assets/img/app2.png" alt="" className="app__store"/></a>
                        </div>
                    </div>

                    <img src={Gambar2} alt="" className="app__img"/>
                </div>
            </section>

            {/* <!--========== CONTACT US ==========--> */}
            <section className="contact section bd-container" id="contact">
                <div className="contact__container bd-grid">
                    <div className="contact__data">
                        <span className="section-subtitle contact__initial"><b>Let's talk</b></span>
                        <h2 className="section-title contact__initial"><b>Contact us</b></h2>
                        <p className="contact__description">Jika Anda mengalami masalah, hubungi kami dan kami akan segera melayani Anda, dengan layanan obrolan 24/7 kami.</p>
                    </div>

                    <div className="contact__button">
                        <a href="#" className="button">Contact us now</a>
                    </div>
                </div>
            </section>
        </main>

        {/* <!--========== FOOTER ==========--> */}
        <footer className="footer section bd-container">
            <div className="footer__container bd-grid">
                <div className="footer__content">
                    <a href="#" className="footer__logo">Magangs</a>
                    <span className="footer__description">Services</span>
                    <div>                        
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Services</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Conecting</a></li>
                        <li><a href="#" className="footer__link">Company</a></li>
                        <li><a href="#" className="footer__link">apprenticeship</a></li>
                        <li><a href="#" className="footer__link">Reserve your spot</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Information</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Event</a></li>
                        <li><a href="#" className="footer__link">Contact us</a></li>
                        <li><a href="#" className="footer__link">Privacy policy</a></li>
                        <li><a href="#" className="footer__link">Terms of services</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Adress</h3>
                    <ul>
                        <li>Solo - Indo</li>
                        <li>Jr Union #999</li>
                        <li>999 - 888 - 777</li>
                        <li>magangs@email.com</li>
                    </ul>
                </div>
            </div>

            <p className="footer__copy">&#169; 2020 Bedimcode. All right reserved</p>
            </footer>
            <Switch>
                <Route path="/Perusahaan">
                    <Perusahaan/>
                </Route>
                <Route path="/cv">
                    <Cv/>
                </Route>
            </Switch>
        </div>
    )
}

export default page
