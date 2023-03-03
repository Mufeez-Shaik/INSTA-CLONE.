import React, { useEffect, useState } from "react";

import Card from "../cards/Card";

function PostView() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://instaclone-backend.onrender.com/instaclone/v1")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        
      })
      .catch((error) => {
        if (error) console.log(error);
      });
  }, []);
  console.log(posts);
  return (
    
    <div>
      
      
      {posts && posts.map((post,i)=>{return <Card post={post} key={i} />})}
        
    
    </div>
  );
}

export default PostView;
