import "./Post.css"
import {Link} from "react-router-dom";

const Post = ({post}) => {
  const PF = "http://localhost:3500/images/"

  return (
    <div className="post">
      {post.photo && (
        <img
        className="postImg"
        alt=""
        src={PF + post.photo}
        />
        )}

    <div className ="postInfo">
      <div className="postCats">
          {post.categories.map((item,idx)=> {
              <span className ="postCat">{item.name}</span>
          })}
      </div>
      <Link className ="link" to ={`/post/${post.id}`}> <span className ="postTitle">{post.title}</span> </Link>

      <hr/>
      <span className ="postDate">{new Date(post.createdAt).toDateString()}</span>
      
    </div>

    <p className='postDesc'>{post.desc}</p>
    </div>
  )
}

export default Post