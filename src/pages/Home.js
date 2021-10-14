import React from 'react'
import {useRef, useState} from 'react'
import { useHistory } from 'react-router-dom'
import '../Home.css'
import Login from '../asset/login.svg'
import Signup from '../asset/signup.svg'

function Home() {
    //Animation
    const container = useRef()
    function animation (){
        container.current.classList.add("sign-up-mode")
        console.log(container) 
    }
    function remov(){
        container.current.classList.remove("sign-up-mode")
        console.log(container) 
    }
    // handle signup 
    const [usernameState, setUsername] = useState("");
    const [passwordState, setPassword] = useState("");
    
    const handleUsername = (event) =>{
        setUsername(event.target.value); 
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }
    const handleSubmit = () =>{
        const dataSubmit = {
            username : usernameState,
            password : passwordState,
        }

        const dataJSON = JSON.stringify(dataSubmit)
        localStorage.setItem("user",dataJSON)        
    }
    // handle signin 
    const history = useHistory() 
    const [usernameStateAfter, setUsernameAfter] = useState("");
    const [passwordStateAfter, setPasswordAfter] = useState("");
    
    const handleUsernameAfter = (event) =>{
        setUsernameAfter(event.target.value); 
    }
    const handlePasswordAfter = (event) =>{
        setPasswordAfter(event.target.value);
    }
    const handleSubmitAfter = () =>{
        
        const userLC = localStorage.getItem('user')
        const userLCJ = JSON.parse(userLC)

        if(userLCJ.username === usernameStateAfter && userLCJ.password === passwordStateAfter){
            console.log("berasil")
            history.push('/after')
        }
        else{
            console.log("salah")
        }
             
    }   
    return (

        <div>

            <div ref={container} className="container-home">
                <div className="forms-container">
                    <div className="signin-signup">
                    <form action="#" className="sign-in-form form">
                        <h2 className="title"><b>Sign in</b></h2>
                        <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" onChange={handleUsernameAfter}  />
                        </div>
                        <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" onChange={handlePasswordAfter}/>
                        </div>
                        <input type="submit" value="Login" className="btn1 solid" onClick={handleSubmitAfter}/>
                        
                        
                    </form>
                    <form action="#" className="sign-up-form form">
                        <h2 className="title"><b>Sign up</b></h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text"  placeholder="Username" onChange={handleUsername}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password"   placeholder="Password" onChange={handlePassword}/>
                        </div>
                        <input type="submit" className="btn1 solid" value="Sign up" onClick={handleSubmit}/>
                       
                        
                    </form>
                    </div>
                </div>
                <div className="panels-container">                  
                    <div className="panel left-panel">
                    <div className="content">
                        <h3><b>New here ?</b></h3>
                        <p>
                        Silahkan mendaftar akun jika anda belum memiliki akun magangs
                        </p>
                        <button className="btn1 transparent" id="sign-up-btn" onClick={animation}>
                        Sign up
                        </button>
                    </div>
                    <img src={Signup} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                    <div className="content">
                        <h3><b>One of us ?</b></h3>
                        <p>
                        silahkan login apabila anda sudah memiliki akun magangs
                        </p>
                        <button className="btn1 transparent" id="sign-in-btn" onClick={remov}>
                        Sign in
                        </button>
                    </div>
                    <img src={Login} className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home