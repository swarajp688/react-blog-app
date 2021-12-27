import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { firestore } from "../firebase";

function PostDetail() {
  const [post , setPost] = useState({});
  const {postId} = useParams();
  console.log("snapshot",postId);
  useEffect(() => {
    firestore.
    collection('post').
    doc(postId).
    get().
    then((snapshot)=>{
      console.log("snapshot",snapshot.data());
      setPost(snapshot.data());
    })
  }, [])
  return (
    <div className="container " >
      <h1 >{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;