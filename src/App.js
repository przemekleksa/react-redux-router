import React from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Post from './components/post/Post';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path="/:post_id" component={Post} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
