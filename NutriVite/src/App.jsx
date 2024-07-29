import React from 'react'
import Home from './components/Home'
import FetchProvider from './components/context/Provider'

function App() {


  return (
    <>
    <FetchProvider>
      <Home />
    </FetchProvider>
    </>
  )
}

export default App
