import React, {useRef,useState,useEffect} from 'react'

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState("");
    const [pwd,setPwd] = useState("");
    const [errMsg,setErrMsg] = useState("");

    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        setErrMsg("");
    },[user,pwd])

  return (
    <section>
    <p ref ={errRef} className ={errMsg ? "errMsg":"offscreen"}>{errMsg}</p>
    <h1>Sign in</h1>
    <form>
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
  )
}

export default Login