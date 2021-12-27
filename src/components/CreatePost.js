
import { firestore } from '../firebase'; 
import {useFormInput} from '../hooks';
function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');


  function handleChange (event) {
    event.preventDefault();
    console.log('title',title.value);
    console.log('sub title',subTitle.value);
    console.log('content',content.value);
    
    firestore.collection('post').add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    });
    
  }
    return (
      <div className="create-post">
        <h1>Create post</h1>
        <form onSubmit={handleChange}>
          <div className='form-field'>
            <label>Title</label>
            <input {...title} required/>
          </div>
          <div className='form-field'>
            <label>Sub Title</label>
            <input {...subTitle} required/>
          </div>
          <div className='form-field'>
            <label></label>
            <textarea {...content} required></textarea>
          </div>
          <button className='create-post-btn'>Create Post</button>
        </form>
      </div>
    );
  }
  
  export default CreatePost;