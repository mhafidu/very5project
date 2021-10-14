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
         
    }
    function remov(){
        container.current.classList.remove("sign-up-mode")
         
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
                <div ref={container} className="forms-container">
                    <div className="signin-signup">
                    <form action="#" className="sign-in-form form">
                        <h2 className="title"><b>Sign in</b></h2>
                        <div className="input-field">
                        <svg className="icon-form" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                        <input type="text" placeholder="Username" onChange={handleUsernameAfter}  />
                        </div>
                        <div className="input-field">
                        <svg className="icon-form" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"/><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"/></svg>
                        <input type="password" placeholder="Password" onChange={handlePasswordAfter}/>
                        </div>
                        <input type="submit" value="Login" className="btn1 solid" onClick={handleSubmitAfter}/>
                        
                        
                    </form>
                    <form action="#" className="sign-up-form form">
                        <h2 className="title"><b>Sign up</b></h2>
                        <div className="input-field">
                        <svg className="icon-form" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                            <input type="text"  placeholder="Username" onChange={handleUsername}/>
                        </div>                        
                        <div className="input-field">
                        <svg className="icon-form" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"/><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"/></svg>
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