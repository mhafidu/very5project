import React from 'react'
// icon
import Telp from '../asset/telp.png'
import LogoPro from '../asset/LogPro.png'
import Email from '../asset/email.png'
import Location from '../asset/location.png'
import Avatar from '../asset/avatar.png'


// css
import '../sidebar.css'

function Sidebar() {
    return (
        <div>
            <div className="container-sidebar"> 
                <div className="profil-sidebar">
                    <div className='foto-profil-sidebar'>
                        <img src={Avatar}></img>
                    </div>                   
                    <div className="name-sidebar">
                        <p  className="h5 text-center"><b>Hafidz</b></p>
                        <p className="h6 text-center">Web designer,<br/>Front-End Web Developer</p>
                    </div>
                </div>
                
                <div className="sosial-media-sidebar">
                    <ul>
                        <li><img src={Email}></img> galiwangkah@gmail.com</li>
                        <li><img src={Location}></img>Solo,Indo</li>
                        <li><img src={Telp}></img>081239900323</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
