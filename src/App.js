import React from 'react';
import Message from './pages/Message';
import AboutMe from './pages/AboutMe';
import Home from './pages';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Aos from 'aos'
import ScrollUpButton from './components/ScrollUpButton';
import Projects from './pages/Projects';
import Turnips from './pages/Turnips';

function App() {
  Aos.init();
 
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/message' element={<Message />}></Route>
      <Route exact path='/about-me' element={<AboutMe />}></Route>
      <Route exact path='/projects' element={<Projects />}></Route>
      <Route exact path='/turnips' element={<Turnips />}></Route>
      </Routes>
      <ScrollUpButton />
    </Router>
  );
}

export default App;
