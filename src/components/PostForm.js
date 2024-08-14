import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../reducers/postReducer';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      userId: 1
    };

    try {
      dispatch(addPost(newPost));
      setTitle('');
      setBody('');
      setMessage('post add successful');
      setError('');
    } catch {
      setError('post add fail');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input
            type="text"
            className='form-control'
            placeholder='enter title'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Body:</label>
          <textarea
            className='form-control'
            placeholder='enter body'
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submi" className='btn btn-primary mb-3'>Add Post</button>
        {message &&
          <div class="alert alert-success" role="alert">
            <div>
              {message}
            </div>
          </div>}
        {error &&
          <div class="alert alert-danger" role="alert">
            <div>
              {error}
            </div>
          </div>}
      </div>
    </form>
  );
};

export default PostForm;
