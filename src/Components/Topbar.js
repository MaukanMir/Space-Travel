import "./Topbar.css"

import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsSearch} from "react-icons/bs";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { Context } from "../Context/Context";

const Topbar = () => {

  const {user,dispatch} = useContext(Context);
  const PF = "http://localhost:3500/images/"

  const handleLogOut = ()=>{
    dispatch({type:"LOGOUT"})
  }

  return (
    <div className ="top">
    <div className="topLeft">
        <BsFacebook className="topIcon"/>
        <BsTwitter className="topIcon"/>
        <BsInstagram className="topIcon"/>
        <BsLinkedin className="topIcon"/>
    </div>
    <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"> <Link className ="link" to="/">Home</Link> </li>
          <li className="topListItem"> <Link className ="link" to="/about">About</Link> </li>
          <li className="topListItem"> <Link className ="link" to="/contact">Contact</Link> </li>
          <li className="topListItem"> <Link className ="link" to="/write">Write</Link> </li>
          <li className="topListItem"> <Link className ="link" to="/" onClick={handleLogOut}>{user && "LOGOUT"}</Link> </li>
        </ul>
    </div>
    <div className="topRight">
      
      {user ? (
        <Link className ="link" to="/setting"> 
        <img className="topImg" alt ="" src ={PF + user.profilePic}/>
        </Link>
        ):(
          <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>
        </ul>
        )}
        <BsSearch className ="searchIcon"/>
    </div>
    </div>
  )
}

export default Topbar