import React, {useRef,useState,useEffect, useContext} from 'react'
import "./Login.css"
import axios from "../API/axios"
const LOGIN_URL = "/auth"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

return (
    <div className ="login-main">
    <h1>Login</h1>
    <form className="form-base" onSubmit ={handleSubmit}>
        <label> Email </label>
        <input type="text"
        required
        placeholder='Email'
        value = {email}
        onChange={(e)=> setEmail(e.target.value)}
        />
        
        <label> Password </label>
        <input type="password"
        value ={password}
        required
        placeholder='Password'
        onChange={(e)=> setPassword(e.target.value)}
        />
    <button className ="form-button">Sign In Here</button>
    </form>
    
    </div>
)
}

export default Login