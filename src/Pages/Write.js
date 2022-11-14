import {useContext, useState}from 'react'
import "./Write.css"

import {AiOutlinePlus} from 'react-icons/ai'
import axios from 'axios';
import { Context } from '../Context/Context';

 const Write = () => {

  const [title, setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [file,setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newPost ={
      username:user.username,
      title,
      desc,
    }
    console.log(file)
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename)
      data.append("file",file)
      newPost.photo= filename;
      try{
        await axios.post("/upload",data)
      }catch(err){
        console.log(err)
        

      }
    }
    try{
      const res = await axios.post("/posts",newPost);
      window.location.replace("/post/"+res.data._id);
      
    }catch(err){
      console.log(err) 
      console.log("right here")}
    
  }

  return (
    <div className ="write">

      {file && (
        <img className="writeImg" alt="" src={URL.createObjectURL(file)} />
      
      )}
        <form
        onSubmit={handleSubmit}
        className ="writeForm"
        >
            <div className ="writeFormGroup">
                <label htmlFor="fileInput"> <AiOutlinePlus/> </label>
                <input 
                type ="file" 
                id ="fileInput" 
                style ={{display:"none"}} 
                onChange={e=> setFile(e.target.files[0])}
                />
                <input 
                type ="text" 
                id ="text" 
                className ="writeInput"
                autoFocus = {true}
                onChange={e=> setTitle(e.target.value)}
                 />
            </div>
            <div className ="writeForumGroup">
                <textarea 
                placeholder ="Tell your story"
                type ="text"
                className="writeInput writeText"
                onChange={e=> setDesc(e.target.value)}
                >
                </textarea>
            </div>
            <button className ="writeSubmit" type="submit">Publish</button>
        </form>
    </div>
  )
}

export default Write