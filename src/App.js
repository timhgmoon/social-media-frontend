import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Posts from './Posts';
import Container from 'react-bootstrap/Container';
import SignIn from './routes/SignIn';

const axios = require('axios').default;

function App() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState ([]);
  const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Authorization': 'Bearer' + 'd318d2ed7ed03451d2e8cd865829b34e972896c2'
  }
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/posts/', {
      headers: headers
    })
    .then(response => {
      setPosts(response.data);
      console.log(response)
    });
  },[]);

  const postList = posts && posts.map((post) => 
    <Posts 
    user={post.owner}
    img={post.post_image} 
    content={post.content}
    votes={post.votes.length}
    />
  )

  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={postList} />
        <Route path="sign-in" element={<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
