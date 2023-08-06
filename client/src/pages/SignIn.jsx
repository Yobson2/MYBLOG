import { useState } from 'react'
import { Link } from 'react-router-dom';

import "../styles/signIn.css"
import logo from "../assets/logo/Yoyoblog.png"
function SignIn() {
    return ( 
        <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div class="flex justify-center mb-8">
            <img src={logo} alt="Logo" class="w-30 h-20 rounded-md"  />
          </div>
          <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">S'inscrire</h1>
          <form>
          <div class="mb-6">
              <label for="Nom" class="block mb-2 text-sm text-gray-600">Nom</label>
              <input type="text" id="Nom" name="Nom" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm text-gray-600">Mot de passe</label>
              <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <button type="submit" class="w-32 from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6 btn-sign">Envoyer</button>
          </form>
          <div class="text-center">
            <p class="text-sm">Vous avez un compte? <Link to="/login" class="text-cyan-600">Se connecter</Link></p>
          </div>
        </div>
      </div>
     );
}

export default SignIn;