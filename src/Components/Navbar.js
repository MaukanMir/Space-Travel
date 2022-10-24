import React from 'react'
import "./Navbar.css"
import {
    FaSpaceShuttle,
    FaHome,
    FaAddressBook,
} from "react-icons/fa"
import {AiOutlineLogin} from "react-icons/ai"

const Navbar = () => {
    
    return (
    
    <nav className ="nav">
    <h1>Life Starts Here</h1>
    {social_icons.map((item,idx)=>{
        return(
            
            <ul key ={item.id}>
                <li>
                <a href={item.url}>{item.type}{item.link}</a>
                </li>
            </ul>
        )
    })}
    </nav>

    )
}


const social_icons = [
      {
        id: 1,
        type: "Home",
        link: <FaHome/>,
        url: "",
      },
      {
        id: 2,
        type: "Tours",
        link: <FaSpaceShuttle/>,
        url: "",
      },
      {
        id: 3,
        type: "Contact",
        link: <FaAddressBook />,
        url: "",
      },
      {
        id: 4,
        type: "Login",
        link: <AiOutlineLogin/>,
        url: "",
      },
    ];

export default Navbar