import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './snake.css'

const PostPage = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await axios.get(`https://dummyjson.com/post/${postId}`)
        setPost(postResponse.data)

        const commentsResponse = await axios.get(`https://dummyjson.com/post/${postId}/comments`)
        setComments(commentsResponse.data.comments)
      } catch (error) {
        console.error('Ошибка:', error)
      }
    }

    fetchPostAndComments()
  }, [postId])

  if (!post) {
    return <div>Загрузка...</div>
  }

  return (
    <div className='posts'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul className='postComment'>
        {comments.length > 0 && comments.map(comment => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostPage
