import React,{useState} from 'react';
import './App.css';
import Tweets from './components/Tweets';
import Top from './data/Top'
import Main from './data/Main'

function App() {

  return (
    <div>
      <div> <Top/></div>
      <div> <Main /></div>
    </div>
  );
}

export default App;
