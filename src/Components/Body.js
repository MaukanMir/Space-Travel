import React from 'react'
import "./Body.css"

import {data} from "./Images/Data"

const Body = () => {
  return (
    <>
    <h1 className ="heading">The Future Has Arrived</h1>
    <div className ="body" >
    {data.map((item,idx)=>{
        return (
            <div key ={idx}>
            <img className ="main" alt="" src ={item.src}/>
            </div>
        )
    })}
    </div>
    </>
  )
}

export default Body