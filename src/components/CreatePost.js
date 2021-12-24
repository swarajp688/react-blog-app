import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [content, setContent] = useState();

  function handleChange (e) {
    e.preventDefault();
    console.log('title',title);
    console.log('sub title',subTitle);
    console.log('content',content);

  }
    return (
      <div className="create-post">
        <h1>Create post</h1>
        <form onSubmit={handleChange}>
          <div className='form-field'>
            <label>Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
          </div>
          <div className='form-field'>
            <label>Sub Title</label>
            <input value={subTitle} onChange={(e)=> setSubTitle(e.target.value)}/>
          </div>
          <div className='form-field'>
            <label></label>
            <textarea value={content} onChange={(e)=> setContent(e.target.value)} ></textarea>
          </div>
          <button className='create-post-btn'>Create Post</button>
        </form>
      </div>
    );
  }
  
  export default CreatePost;