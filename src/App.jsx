import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="container pt-4 mx-auto ">
        <h1 class="text-4xl text-center">Welcome To Note</h1>
        <div className="container flex items-center justify-center">
        <a href="">Login</a>
        <a href="">Sign Up</a>
        </div>
      </div>
      

      
    </>
  )
}

export default App


