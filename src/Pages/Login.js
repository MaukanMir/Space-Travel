import "./Login.css"

import { useRef,useContext } from "react"
import { Context } from "../Context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {

  const userRef = useRef();
  const usePasswordRef = useRef();
  const {dispatch, isFetching } = useContext(Context);

  const  handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});

    try{
      const response = await axios.post("/auth/login", {
            username: userRef.current.value,
            password: usePasswordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload:response.data});
      console.log(response)
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
      console.log(err)
    }
  }



  return (
    <div className ="login">
        <span className="loginTitle">Login</span>
        <form className ="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
            className ="loginInput"
            type="text"
            placeholder ="Enter your username"
            ref={userRef}
            />
            <label>Password</label>
            <input
            className ="loginInput"
            type="password"
            placeholder ="Enter your password"
            ref={usePasswordRef}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className ="link" to="/register"> Register </Link>
          </button>
    </div>
  )
}

export default Login