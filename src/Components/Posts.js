import React from 'react'
import "./Posts.css";
import Post from "./Post"

const Posts = ({posts}) => {
  
    return (
    <div className ="posts">
      {posts.map((item,idx)=> {
        <Post post ={item} />
      })}
    </div>
  )
}

export default Posts