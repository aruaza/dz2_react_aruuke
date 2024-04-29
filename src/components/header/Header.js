import React from 'react'
import { Link } from 'react-router-dom'
import '../snake.css' 

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>На главную</Link>
      <Link to='/posts'>Посты</Link>
      <Link to='/posts/create'>Создать пост</Link>
      </div>
  )
}

export default Header
