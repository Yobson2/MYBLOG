import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import {  UserContextProvider } from './context/UserContext';

function App() {
  return (
    
          <div className='body-app'>
            <UserContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign" element={<SignIn />} />
              </Routes> 
          </UserContextProvider>
        </div>
   
 
  )
}

export default App
