import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePostPage = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1,
      })
      console.log('Пост создан:', response.data)
      navigate('/posts')
    } catch (error) {
      console.error('Ошибка отравки запроса:', error)
    }
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default CreatePostPage
