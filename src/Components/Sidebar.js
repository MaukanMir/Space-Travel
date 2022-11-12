import {useEffect, useState} from 'react'
import "./Sidebar.css"
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import axios from "axios"
import {Link} from "react-router-dom"

const Sidebar = () => {

    const [cats,setCats] = useState([])

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories"); 
            setCats(res.data);     
        }
        getCats();
    },[])

  return (
    
    <div className='sidebar'>
        <div className ="sidebarItem">
            <span className ="sidebarTitle">About Me</span>
            <img  alt ="" src="https://images.pexels.com/photos/13866924/pexels-photo-13866924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <p>Lorem Lorem Lorem Lorem Lorem</p>
        </div>
        <div className="sidebarItem">
            <span className ="sidebarTitle">Categories</span>
            <ul className ="sideBarList">
                {cats.map((item,idx)=>{
                    <Link className ="link" to={`/?cat=${item.name}`}> 
                <li className ="sidebarListItem">{item.name}</li>
                </Link>
            })}
            </ul>
        </div>
        <div className="sidebarItem">

            <span className ="sidebarTitle"> Follow Us</span>
            <div className ="sidebarSocial">
                <BsFacebook className="sidebarIcon"/>
                <BsTwitter className="sidebarIcon"/>
                <BsInstagram className="sidebarIcon"/>
                <BsLinkedin className="sidebarIcon"/>
            </div>

        </div>

    </div>
  )
}

export default Sidebar