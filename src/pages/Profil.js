import React from 'react'
// icon
import Facebook from '../icon/Facebook.png'
import Instagram from '../icon/Instagram.png'
import Twiter from '../icon/Twiter.png'
import List from '../icon/list.png'
import Edu from '../icon/list-edu.png'
import Berasil from '../asset/berasil.png'
import Avatar from '../asset/avatar.png'
// css
import '../Profil.css'
function profil() {
    return (
        <div className = "body-profil">
            <div className = "containner-profil">
                <div className = "main-profil">
                    <div className = "content-top-profil">
                        <div className="background-profil"></div>
                        <div className="document-user-profil">
                        <div className="img-profil"><img src={Avatar}></img></div>
                            <div className="description-user-profil">
                                <div className="name-profil">
                                    <h3>Hafidz</h3>
                                    <h6>Web Development, Fix bugs, Software Enginnering</h6>
                                </div>
                                <div className="list-addres-profil">
                                    <div className="addres1-profil">
                                        <span>Solo,Jawa Tengah</span>
                                        <span>081239900323</span>
                                        <span>diwangsa@gmail.com</span>
                                    </div>
                                    <div className="addres2-profil">
                                        <span><img src={Facebook} alt=""/> MuhammadHafidUdzri</span>
                                        <span><img src={Instagram} alt=""/> MuhammadHafidUdzri</span>
                                        <span><img src={Twiter} alt=""/> hafidudzri</span>
                                    </div>    
                                </div>
                            </div>
                            {/* <!-- dropdown --> */}
                            <button type="button" className="bt" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Edit
                            </button>
                            {/* <!-- Modal --> */}
                            <div className="modal fade p-6 " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl" id = "cont-pop">
                                <div className="modal-content p-4 " id="modal-content">
                                    <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Edit Profil</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body ">
                                    <div className="inp-1">
                                        <div className="item-in">
                                        <label for="">First Name</label>
                                        <input type="text"/>
                                        </div>
                                        <div className="item-in">
                                        <label for="">Last Name</label>
                                        <input type="text"/>
                                        </div>
                                        <div className="item-in">
                                        <label for="">Nomor telepon</label>
                                        <input type="text"/>
                                        </div>
                                        <div className="item-in">
                                        <label for="">Email</label>
                                        <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="inp-2">
                                        <div className="item-in">
                                        <label for="">Head Line</label>
                                        <input type="text"/>
                                        </div>
                                        <div className="item-in">
                                        <label for="">Alamat</label>
                                        <input type="text"/>
                                        </div>
                                    </div>
                                    <h6>Experience</h6>
                                    <div className="item-expe">
                                        <div className="cont-in-expe">
                                        <div className="inp-3">
                                            <div className="item-in">
                                            <label for="">Apa experience anda</label>
                                            <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="inp-4">
                                            <div className="item-in">
                                            <label for="">Durasi</label>
                                            <input type="text"/>
                                            </div>
                                            <div className="item-in">
                                            <label for="">Lokasi</label>
                                            {/* <!-- dropdown-input --> */}
                                            <div className="dropdown">
                                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                                                Kebutuhan
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">Kerja</a></li>
                                                <li><a className="dropdown-item" href="#">Magang</a></li>                        
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="inp-5">
                                        <div className="item-in">
                                        <label for="">Education</label>
                                        <input type="text"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                    <button id="bt-cl" type="button"  data-bs-dismiss="modal">Cancel</button>
                                    <button id="bt-in" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-dismiss="modal"><button id="bt-cl" type="button"  data-bs-dismiss="modal" style={{position:'absolute',top:"745px",left:"656px",opacity:"0"}}>Save</button>Save</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* <!-- content mid --> */}
                    <div className="content-mid-profil">
                        <h4>Experience</h4>
                        <div className="con-mid-ex">
                        <div className="item-ex">
                            <img src={List} alt=""/>
                            <div className="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div className="item-ex">
                            <img src={List} alt=""/>
                            <div className="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div className="item-ex">
                            <img src={List} alt=""/>
                            <div className="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div className="item-ex">
                            <img src={List} alt=""/>
                            <div className="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div className="item-ex">
                            <img src={List} alt=""/>
                            <div className="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        <div className="item-ex">
                            <img src={List} alt=""/>
                            <div className="des-itm">
                            <h6>Botcamp SIC Samsung</h6>
                            <p>Nov 2020 - Des 2020
                                Jakarta,Indonesia</p>
                            </div>
                        </div>
                        </div>
                    </div> 
                    <div className="content-bottom-profil">
                        <h4>Education</h4>
                        <div className="con-item-edu">
                        <div className="item-edu">
                        <img src={Edu} alt=""/>
                            <div className="des-itm">
                            <h5>Botcamp SIC Samsung</h5>
                            <h7>D3 Software Eginnering</h7>
                            <p>2017-2020</p>
                            </div>
                        </div>
                        <div className="item-edu">
                        <img src={Edu} alt=""/>
                            <div className="des-itm">
                            <h5>Botcamp SIC Samsung</h5>
                            <h7>D3 Software Eginnering</h7>
                            <p>2017-2020</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* <!-- Modal --> */}
             <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog  modal-lg" >
                    <div className="modal-content" style={{borderRadius:"20px"}}>                        
                        <div className="modal-body d-flex flex-column align-items-center">
                            <h3 className="text-center" style={{color:"#0497E1"}}><b> Berhasil mengedit  profil!</b></h3>
                            <img className="mt-5" src = {Berasil}></img>
                            <p  className="mt-3" style={{color:"#0497E1"}}>Demi keamanan, profil anda tidak bisa dirubah selama 30 hari kedepan</p>
                            <button type="button" className="btn btn-primary mt-4" data-bs-dismiss="modal">Mengerti</button>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profil
