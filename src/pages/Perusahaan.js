import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Apply from './Apply';
// gambar
import Gudang from '../asset/gudang.png'
import Bca from '../asset/BCA.png'
import Bri from '../asset/bri.png'
import Mandiri from '../asset/mandiri.png' 
import Telkom from '../asset/telkom.png' 
import Bni from '../asset/bni.png'
import Astra from '../asset/astra.png'
import Semen from '../asset/semen.png'
import Permata from '../asset/permata.png'
import Barito from '../asset/barito.jpg'
// component
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// css
import '../perusahaan.css'

function Perusahaan() {
    return (
        <div style={{backgroundColor:"#0497E1"}} >
            {/* <Navbar></Navbar> */}
            <div className=" container-fluid container-perusahaan">
                <Sidebar></Sidebar>
                <div className="main-content-perusahaan">
                        <div className="content-top-perusahaan">
                            <div className="container-dropdown-perusahaan">
                                <div class="dropdown">
                                    <button class="btn btn-outline-primary  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Bidang
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Kesehatan</a></li>
                                        <li><a class="dropdown-item" href="#">Teknologi</a></li>
                                        <li><a class="dropdown-item" href="#">Pangan</a></li>
                                        <li><a class="dropdown-item" href="#">Pertambangan</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Kebutuhan
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Magang</a></li>
                                        <li><a class="dropdown-item" href="#">Kerja</a></li>                                      
                                    </ul>
                                </div>
                            </div>
                            <form class="d-flex">
                                <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>               
                        <div className="content-main-perusahaan">
                           <Link to="/apply"> <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src={Gudang} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Gudang Garam, Tbk</h5>
                                    <p class="card-text">merek/perusahaan produsen rokok terbesar keenam di Indonesia setelah STTC. Didirikan pada 26 Juni 1958 oleh Surya Wonowidjojo, perusahaan rokok ini merupakan peringkat pertama dan terbesar keenam di Indonesia menurut tahun pendiriannya dalam produksi rokok kretek.</p>
                                </div>
                            </div></Link>
                            <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src={Bca} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">BCA, Tbk</h5>
                                    <p class="card-text">bank swasta terbesar di Indonesia. Bank ini didirikan pada 21 Februari 1957 dengan nama Bank Central Asia NV dan pernah menjadi bagian penting dari Salim Group.</p>
                                </div>
                            </div>
                            <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src={Bri} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">BRI, Tbk</h5>
                                    <p class="card-text">PT Bank Rakyat Indonesia, Tbk adalah salah satu bank milik pemerintah terbesar di Indonesia.</p>
                                </div>
                            </div>
                            <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src={Mandiri} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Bank Mandiri, Tbk</h5>
                                    <p class="card-text">bank terbesar di Indonesia dalam hal aset, pinjaman, dan deposit. Bank ini berdiri pada tanggal 2 Oktober 1998 sebagai bagian dari program restrukturisasi perbankan yang dilaksanakan oleh Pemerintah Indonesia.</p>
                                </div>
                            </div>
                            <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src={Telkom} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Telkom Indonesia</h5>
                                    <p class="card-text">PT Telkom Indonesia Tbk, biasa disebut Telkom Indonesia atau Telkom saja adalah perusahaan informasi dan komunikasi serta penyedia jasa dan jaringan telekomunikasi secara lengkap di Indonesia.</p>
                                </div>
                            </div>
                            <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src={Bni} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">BNI</h5>
                                    <p class="card-text">institusi bank milik pemerintah, dalam hal ini adalah perusahaan BUMN, di Indonesia. Dalam struktur manajemen organisasinya, Bank Negara Indonesia, dipimpin oleh seorang Direktur Utama yang saat ini dijabat oleh Royke Tumilaar.</p>
                                </div>
                            </div>
                            <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src={Astra}class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title"> Astra Internasional, Tbk</h5>
                                    <p class="card-text">Perusahaan ini didirikan pada tahun 1957 dengan nama PT Astra International Incorporated. Pada tahun 1990, perseroan mengubah namanya menjadi PT Astra International Tbk.</p>
                                </div>
                            </div>
                            <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src={Semen} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Semen Indonesia</h5>
                                    <p class="card-text">PT Semen Indonesia Tbk adalah produsen semen yang terbesar di Indonesia. Pada tanggal 20 Desember 2012, PT Semen Indonesia Tbk resmi berganti nama dari sebelumnya bernama PT Semen Gresik Tbk.</p>
                                </div>
                            </div>
                            <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src="https://source.unsplash.com/random/202x202" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Barito Pacific, Tbk</h5>
                                    <p class="card-text">PT. Barito Pacific Tbk merupakan perusahaan di sektor sumber daya alam yang terdiversifikasi dan terintegrasi.</p>
                                </div>
                            </div>
                            <div class="card card-perusahaan" style={{width: "13rem"}}>
                                <img src={Permata} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title"> Bank Permata, Tbk</h5>
                                    <p class="card-text">SSebagai bank yang memahami setiap aspirasi Anda, PermataBank menyediakan produk perbankan terkini dan penuh inovasi untuk personal, syariah, maupun bisnis.</p>
                                </div>
                            </div>
                            
                        </div>                                            
                    
                </div>
            </div>
            <Switch>
                <Route path="/apply">
                    <Apply/>
                </Route>
            </Switch>
        </div>
    )
}

export default Perusahaan
