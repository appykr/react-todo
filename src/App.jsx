import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login  from './components/Login'
import Dashboard from './components/dashboard';
import Home from './components/Home';

function App() {

  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/Login" element={ <Login />} />
        <Route path="/Dashboard" element={ <Dashboard />} />
      </Routes>

    </Router>
    </>
  )
}

export default App


