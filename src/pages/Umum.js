import React from 'react'
import '../Umum.css'
import Per from '../asset/per.jpg'
import Shop from '../asset/shop.jpg'


function Umum() {
    return (
        <div className = "body-umum">
            <div className="containner-umum">
                <main className="main-umum">
                <h4>Umum</h4>
                <hr/>
                    <div className="list-umum">
                    <div className="list-item-umum">
                        <img src={Per} alt=""/>
                        <div className="deskripsi-umum">
                        <p className="h5"><b>PT.Pertamina</b> </p>
                        <p>Pelatihan pembuatan wesite mulai dari penentuan ide,penentuan fitur ,desain wire frane,desain UI,dan 
                            coding.Pelatihan ini juga ada pelatihan coding website mulai dari HTML sampai Java Scripth</p>
                        </div>  
                    </div>
                    <div className="list-item-umum">
                        <img src={Shop} alt=""/>
                        <div className="deskripsi-umum">
                        <p className="h5"><b>Shopee</b> </p>
                        <p>Pelatihan pembuatan wesite mulai dari penentuan ide,penentuan fitur ,desain wire frane,desain UI,dan 
                            coding.Pelatihan ini juga ada pelatihan coding website mulai dari HTML sampai Java Scripth</p>
                        </div>
                    </div>
                    <div className="list-item-umum">
                        <img src={Shop} alt=""/>
                        <div className="deskripsi-umum">
                        <p className="h5"><b>Shopee</b> </p>
                        <p>Pelatihan pembuatan wesite mulai dari penentuan ide,penentuan fitur ,desain wire frane,desain UI,dan 
                            coding.Pelatihan ini juga ada pelatihan coding website mulai dari HTML sampai Java Scripth</p>
                        </div>
                    </div>
                    <div className="list-item-umum">
                        <img src={Shop} alt=""/>
                        <div className="deskripsi-umum">
                        <p className="h5"><b>Shopee</b> </p>
                        <p>Pelatihan pembuatan wesite mulai dari penentuan ide,penentuan fitur ,desain wire frane,desain UI,dan 
                            coding.Pelatihan ini juga ada pelatihan coding website mulai dari HTML sampai Java Scripth</p>
                        </div>
                    </div>
                    <div className="list-item-umum">
                        <img src={Shop} alt=""/>
                        <div className="deskripsi-umum">
                        <p className="h5"><b>Shopee</b> </p>
                        <p>Pelatihan pembuatan wesite mulai dari penentuan ide,penentuan fitur ,desain wire frane,desain UI,dan 
                            coding.Pelatihan ini juga ada pelatihan coding website mulai dari HTML sampai Java Scripth</p>
                        </div>
                    </div>
                </div>
            </main>
            </div>
        </div>
    )
}

export default Umum
