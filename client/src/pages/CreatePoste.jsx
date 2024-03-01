import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { accountServices } from '../services/account.service';
import { Navigate } from 'react-router-dom';


import "../styles/login.css"
import logo from "../assets/logo/Yoyoblog.png"
function CreatePoste() {
   
    return (  
        <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
         <h1>Mes postes</h1>
    </div>
  </div>
    );
}

export default CreatePoste;