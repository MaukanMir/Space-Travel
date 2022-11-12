import { useEffect, useState, useContext } from 'react'
import "./SinglePost.css"
import { AiOutlineEdit } from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai';
import { useLocation, Link } from 'react-router-dom';
import axios from "axios"
import { Context } from '../Context/Context';


const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post,setPost] = useState({});
  const PF = "http://localhost:3500/images/";
  const {user} = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  console.log(path)
  useEffect(()=>{

    const getPost = async ()=>{
      const res = await axios.get("/posts/" + path);
  
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc)
    }

    getPost()

  },[path])

  const handleDelete = async ()=>{

    try{
      await axios.delete(`/posts/${post._id}`,{ data:{username:user.username}})
      window.location.replace("/");
    }catch(err){console.log(err)}
  }

  const handleUpdate = async ()=>{
    try{
      await axios.put(`/posts/${post._id}`,
      {
        username:user.username, 
        title,
        desc
      })
      setUpdateMode(false);
    }catch(err){console.log(err)}
  }

  return (
    <div className ="singlePost">
        <div className ="singlePostWrapper">
          {post.photo && (
            <img
            className ="singlePostImg"
            src={PF + post.photo}
            alt=""
            />
            )}{
              updateMode ? <input 
              className="singlePostTitleInput" 
              type="text"
              autoFocus
              onChange={(e)=>setTitle(e.target.value)}
              value={title}/>: (

            
        <h1 className ="singlePostTitle">{title}
        {post.username === user?.username && (
        <div className ="singlePostEdit">
            <AiOutlineEdit className ="singlePostIcon" onClick={()=>setUpdateMode(true)}/>
            <AiFillDelete className ="singlePostIcon" onClick={handleDelete}/>
        </div>
        )}
        </h1>
      )};
        <div className ="singlePostInfo">
            <span className ="sinlgePostAuthor">
              Author:
              <Link className ="link" to={`/?user=${post.username}`}> <b>{post.username}</b> </Link>
             </span>

            <span className ="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? 
        <textarea 
        className="singlePostDescInput" 
        value={desc}
        /> :(
        <p className='singlePostDesc'>{desc}</p>
        )}
        {updateMode && (
        <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )}
        </div>
    </div>
  )
}

export default SinglePost