import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Content from './pages/routes/routes'
import './pages/configs.css';

function App() {
  return (
    <div className='flex flexRow'>
      <Router>
        <Content />
      </Router>
    </div>

  )
}

export default App;
