import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import PostListPage from './components/PostListPage';
import CreatePostPage from './components/CreatePostPage';
import PostPage from './components/PostPage';
import Header from './components/header/Header';
import './components/snake.css'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/posts" element={<PostListPage/>} />
        <Route path="/posts/create" element={<CreatePostPage/>} />
        <Route path="/posts/:postId" element={<PostPage/>} />
        <Route path='/' element=''/>
      </Routes>
    </>
  )
}

export default App;
