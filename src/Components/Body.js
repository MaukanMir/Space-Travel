import React from 'react'
import "./Body.css"

import {data} from "./Images/Data"

const Body = () => {
  return (
    <div className ="body">
    {data.map((item,idx)=>{
        return (
            <div key ={idx}>
            <img className ="main" alt="" src ={item.src}/>
            </div>
        )
    })}
    </div>
  )
}

export default Body