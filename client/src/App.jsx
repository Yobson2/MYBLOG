
import './App.css'
import { Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import CreatePoste from './pages/CreatePoste';
import {  UserContextProvider } from './context/UserContext';

function App() {

  return (
    
          <div className='body-app'>
            <UserContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Blog/:userId" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign" element={<SignIn />} />
                <Route path="/Blog/:userId/create" element={<CreatePoste />} />
              </Routes> 
          </UserContextProvider>
        </div>
   
 
  )
}

export default App
{/* <Route path={`/Blog/${userContext.userInfo._id}`} element={<Home />} /> */}