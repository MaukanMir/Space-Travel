import React, {useRef,useState,useEffect, useContext} from 'react'
import AuthContext from "../Context/AuthProvider.js"
import "./Login.css"
import axios from "../API/axios"

const LOGIN_URL = "/auth"
const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState("");
    const [pwd,setPwd] = useState("");
    const [errMsg,setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        setErrMsg("");
    },[user,pwd])

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try{
            const response = await axios.post(
            LOGIN_URL, JSON.stringify({user,pwd}),{
                headers: {"Context-Type":"application/json"},
                withCredentials:true
            }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user,pwd,roles,accessToken});
            setUser("");
            setPwd("");
            setSuccess(true);
        }catch(err){
            if(!err?.response){
                setErrMsg("No server response")
            }else if(err.response?.status ===400){
                setErrMsg("Missing username or password")
            }else if(err.response?.status === 401){
                setErrMsg("Unauthorized")
            }else{
                setErrMsg("Login failed");
            }
            errRef.current.focus();
        }
    }

  return (

    <>
    {success ? (
            <section>
                <h1>You Are logged in!</h1>
                <br/>
                <p>
                    <a href ="#"> Go to Home</a>
                </p>
            </section>
    ):(
    <section className ="main">
    <p ref ={errRef} className ={errMsg ? "errMsg":"offscreen"}>{errMsg}</p>
    <h1>Sign in</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor ="username">UserName:</label>
        <input
        type ="text"
        id="username"
        ref ={userRef}
        autoComplete ="off"
        onChange = {(e)=> setUser(e.target.value)}
        value ={user}
        required
        />
        <label htmlFor ="password">Password:</label>
        <input
        type ="password"
        id="password"
        onChange = {(e)=> setPwd(e.target.value)}
        value ={pwd}
        required
        />
        <button>Sign In</button>
        <p>
            Need an Account?<br />
            <span className ="line">
                <a href="#">Sign Up</a>
            </span>
        </p>
    </form>
    </section>
)}
    </>
  )
}

export default Login