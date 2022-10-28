import { useRef, useState, useEffect } from "react";

import {FaCheck, FaTimes,FcCheckmark} from "react-icons/fa"

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';




const Register = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user,setUser] = useState("");
  const [validName,setValidName] = useState(false);
  const [userFocus,setUserFocus] = useState(false);

  const [pwd,setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus,setPwdFocus] = useState(false);

  const [matchPwd,setMatchPwd] = useState("");
  const [validMatch,setValidMatch] = useState("");
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [succes,setSuccess] = useState(false);

  
  useEffect(()=>{
    useRef.current.focus();
  },[])

  useEffect(()=>{
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result)
  },[user])

  useEffect (()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    crossOriginIsolated.log(pwd);
    setValidPwd(result);
    const match = pwd=== matchPwd
    setValidMatch(match)
  },[pwd,matchPwd])

  useEffect(()=>{
    setErrMsg("");
  },[user,pwd,matchPwd])

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if(!v1 || !v2){
        setErrMsg("Invalid Entry");
        return ;
    }

    setSuccess(true);


  }

  return (
    <>
    <section>
        <p ref ={errRef} className ={errMsg ? "errmsg":"offscreen"
    } aria-live ="assertive">{errMsg}</p>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor ="username">
            Username:
            <span className ={validName ? "valid":"hide"}>
                <FaCheck />
            </span>
            <span className ={validName || !user ? "hide" : "invalid"}>
                <FaTimes />
            </span>
        </label>
        <input
        type ="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e)=> setUser(e.target.value)}
        required
        onFocus={()=> setUserFocus(true)}
        onBlur={()=> setUserFocus(false)}
        />
        <p id="uidnote" className={userFocus && user && !validName ? "instructions":"offscreen"}>
            4-24 characters. <br/>
            Must begin with a letter. <br/>
            Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor ="password">
            Password:
            <span className ={validPwd ? "valid":"hide"}>
                <FaCheck />
            </span>
            <span className ={validPwd || !pwd ? "hide" : "invalid"}>
                <FaTimes />
            </span>
        </label>
        <input
        type ="password"
        id="password"
        ref={userRef}
        autoComplete="off"
        onChange={(e)=> setPwd(e.target.value)}
        required
        onFocus={()=> setPwdFocus(true)}
        onBlur={()=> setPwdFocus(false)}
        />
        <p id="uidnote" className={pwdFocus && !validPwd ? "instructions":"offscreen"}>
            8-24 characters. <br/>
            Must include uppercase and lowercase letter, number and a special 
            character. <br/>
            Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor ="confirm_pwd">
            Confirm Password:
            <span className ={validMatch && matchPwd ? "valid":"hide"}>
                <FaCheck />
            </span>
            <span className ={validMatch || !matchPwd ? "hide" : "invalid"}>
                <FaTimes />
            </span>
        </label>
        <input
        type ="password"
        id="confirm_pwd"
        autoComplete="off"
        onChange={(e)=> setMatchPwd(e.target.value)}
        required
        onFocus={()=> setMatchFocus(true)}
        onBlur={()=> setMatchFocus(false)}
        />
        <p id="uidnote" className={matchFocus && !validMatch ? "instructions":"offscreen"}>
            8-24 characters. <br/>
            Must include uppercase and lowercase letter, number and a special 
            character. <br/>
            Letters, numbers, underscores, hyphens allowed.
        </p>

    <button disabled={!validName || !validPwd || !validMatch ? true:false} >Sign Up</button>
    </form>
    </section>
    </>
  )
  
}

export default Register