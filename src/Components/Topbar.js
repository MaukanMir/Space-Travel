import "./Topbar.css"

import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsSearch} from "react-icons/bs";

const Topbar = () => {
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
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">Write</li>
            <li className="topListItem">Logout</li>
        </ul>
    </div>
    <div className="topRight">
        <img className="topImg" alt ="" src ="https://images.pexels.com/photos/13918728/pexels-photo-13918728.jpeg?cs=srgb&dl=pexels-eugenia-remark-13918728.jpg&fm=jpg&_gl=1*kc4w2t*_ga*MTAyODQzMzI3Ny4xNjY2NDUxOTA4*_ga_8JE65Q40S6*MTY2Nzc4Mjc5NC4zLjEuMTY2Nzc4Mjk1Ny4wLjAuMA.."/>
        <BsSearch className ="searchIcon"/>
    </div>
    </div>
  )
}

export default Topbar