import React, { useEffect } from 'react'
import Home from './components/Home'
import FetchProvider from './components/context/Provider' 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from './components/app/Blog'
function App() {


  return (
    <>
      <FetchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </FetchProvider>
    </>
  )
}

export default App
