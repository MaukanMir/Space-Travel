import React, { useEffect } from 'react';
import "./Home.css";
import Header from '../Components/Header'; 
import Posts from '../Components/Posts';
import Sidebar from '../Components/Sidebar';
import axios from "axios"

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const Home = () => {

  const [posts,setPosts] = useState([]);
  const {search} = useLocation();



  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts" + search)
      setPosts(res.data);
    }

    fetchPosts();

  },[search])

  return (
    <> 
    <Header/>
    <div className ="home">
      <Posts posts ={posts}/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home