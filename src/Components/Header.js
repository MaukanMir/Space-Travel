import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className ="header">
        
        <div className='headerTitles'>
            <span className ="headerTitlesm">React & Node</span>
            <span className ="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" alt ="" src ="https://images.pexels.com/photos/14098062/pexels-photo-14098062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

    </div>
  )
}

export default Header