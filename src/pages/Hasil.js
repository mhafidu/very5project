import React from 'react'
import '../Hasil.css'
import Konfirmasi from '../asset/konfirmasi.png'
import Per from '../asset/per.jpg'


function Hasil() {
    return (
        <div className = "body-hasil container-fluid" >
            <main className='main-hasil container p-4' >
                <h4>Hasil</h4>
                <hr/>
                <div className="list-hsl container" style={{maxWidth:"100%"}}>
                    <div className="list-hasil container" style={{maxWidth:"100%"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className="image-hasil container" style={{maxWidth:"25%"}}>
                            <img src={Per} alt=""/>                        
                        </div>
                        <div className="deskripsi-hasil container" style={{maxWidth:"75%"}}>                        
                        <p className="h5"><b> PT.Pertamina</b></p>
                        <p>Berdasarkan hasil sesi wawancara dan tes kualifikasi yang telah dilaksanakan pada tanggal 28 Mei 2021 maka dengan ini, kami  dari PT. Pertamina bermaksud untuk meberikan surat ...</p>
                        <div className="status-bottom-hasil">
                            <div className="info-status">
                                <p>Status: </p>
                                <span>Diterima</span>
                            </div>
                            <p className="time-hasil">09-06-2021</p>
                        </div>
                        </div>
                    </div>
                    <div className="list-hasil container" style={{maxWidth:"100%"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className="image-hasil container" style={{maxWidth:"25%"}}>
                            <img src={Per} alt=""/>                        
                        </div>
                        <div className="deskripsi-hasil container" style={{maxWidth:"75%"}}>
                        <p className="h5"><b> PT.Pertamina</b></p>
                        <p>Berdasarkan hasil sesi wawancara dan tes kualifikasi yang telah dilaksanakan pada tanggal 28 Mei 2021 maka dengan ini, kami  dari PT. Pertamina bermaksud untuk meberikan surat ...</p>
                        <div className="status-bottom-hasil">
                            <div className="info-status">
                                <p>Status: </p>
                                <span>Diterima</span>
                            </div>                            
                            <p className="time-hasil">09-06-2021</p>
                        </div>
                        </div>
                    </div>
                </div>
            </main>        
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog  modal-lg" >
                    <div className="modal-content" style={{borderRadius:"20px"}}>                        
                        <div className="modal-body d-flex flex-column align-items-center">
                            <h3 className="text-center" style={{color:"#0497E1"}}><b> Untuk Konfirmasi lebih lanjut Cek email anda!</b></h3>
                            <img src = {Konfirmasi}></img>
                            <p  style={{color:"#0497E1"}}>Selamat data telah berhasil diupload</p>
                            <button type="button" className="btn btn-primary mt-3" data-bs-dismiss="modal">Mengerti</button>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hasil
