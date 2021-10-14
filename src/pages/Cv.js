import React from 'react'
import {useRef} from 'react'
// css
import '../Cv.css'
// icon
import logo from '../asset/logo.png'
import search from '../asset/search.png'
import notif from '../asset/notif.png'
import email from '../asset/email.png'
import location from '../asset/location.png'
import telp from '../asset/telp.png'
import pdf from '../asset/pdf.png'
import Berasil from '../asset/berasil.png'
// component
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'



function Cv() {
    const inputref = useRef(null);
    const inputref1 = useRef(null);
    const inputref2 = useRef(null);
    const inputref3 = useRef(null);

    function block1(){
        inputref.current.style.display="block"
    }
    function block2(){
        inputref1.current.style.display="block"
    }
    function block3(){
        inputref2.current.style.display="block"
    }
    function none(){
        inputref3.current.style.display="none"
    }

    return (
        <div className=" bg-primary">
        
        <div className='container-cv container-fluid bg-primary'>
                <div className="sidebar">
                    <Sidebar></Sidebar>
                    <div className="actionbar">
                    <p className="h4"><b>Action</b></p>
                    <button className="upload-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Upload
                    </button>
                    <button className="pilih-btn" onClick={block2}>
                        Pilih
                    </button>
                    <button ref={inputref} className="delete-btn" style={{display:"none"}} onClick={none}>
                        Delete
                    </button>
                    
                </div>
                </div>
                <div className="main-content">
                    <p className="h4"><b>Portfolio</b></p>
                    <div className="pdf-container">                       
                            <div className="pdf-item" style={{display:"none"}} ref={inputref2}>
                                <div className="demo-delete" ref={inputref3}>
                                    <div className="cekbox">
                                        <input  className="checkbox-pdf" type="checkbox" style={{display:"none"}} onClick={block1} ref={inputref1}/>
                                    </div>
                                    <img src={pdf} alt="" srcset=""/>
                                    <p className="pdf-text">
                                        nama_file_sesuai.pdf   
                                    </p>
                                </div>
                                
                            </div>                                                      
                    </div>
            </div>              
        </div>
        {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" >
                            <div className="modal-content"style={{height:"600px",borderRadius:"20px"}}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Upload file sesuai syarat</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body d-flex flex-column align-items-center" style={{rowGap:"20px"}}>
                                <div className= "area-file-apply"></div>                            
                                <button type="button" className="btn btn-outline-primary"><input type="file" style={{position:"absolute",width:"90px",opacity:"0",top:"335px",left:"200px"}}></input>pilih file</button>
                            </div>
                            <div className="modal-footer d-flex justify-content-between" style={{color:"red"}}>
                                <p><b>Pastikan anda sudah mengisi semua syarat <br/>dan ketentuan dengan benar !</b></p>                        
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal"><button id="bt-cl" type="button"  data-bs-dismiss="modal" style={{left:"380px",top:"540px",position:"absolute",opacity:"0"}} onClick={block3}>upload</button>Upload</button>
                            </div>
                            </div>
                        </div>
            </div>
            <div className="modal fade " id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog  modal-lg" >
                    <div className="modal-content" style={{borderRadius:"20px"}}>                        
                        <div className="modal-body d-flex flex-column align-items-center">
                            <h3 className="text-center" style={{color:"#0497E1"}}><b> Berhasil upload portofolio</b></h3>
                            <img className="mt-5" src = {Berasil}></img>
                            <p  className="mt-3" style={{color:"#0497E1"}}><b>Selamat data telah berhasil diupload</b></p>
                            <button type="button" className="btn btn-primary mt-4" data-bs-dismiss="modal">Selesai</button>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cv
