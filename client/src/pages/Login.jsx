import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


import "../styles/login.css"
import logo from "../assets/logo/Yoyoblog.png"
function Login() {
    const navigation=useNavigate();
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
      });
      const { email, password} = formLogin;
      const [redirect, setRedirect] = useState(false);
      const handleChange = (e) => {
        setFormLogin({
          ...formLogin,
          [e.target.name]: e.target.value
        });
      };
        const handleLogin= async(e)=>{
            e.preventDefault();
            const response= await fetch('http://localhost:3030/v1/login', {
                method: 'POST',
                body: JSON.stringify(formLogin),
                headers: {
                    'Content-Type': 'application/json',
                     Accept:"application/json",
                    "Access-Control-Allow-Origin":"*",
                }
            })
            if(response.status===200){
              alert('success')
              navigation('/');
            }else{
              alert('bad data')
            }
           
        }
        
     

    function homePage(){
        navigation('/')
    }
    return (  
        <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-8">
        <img src={logo} alt="Logo" class="w-30 h-20 rounded-md"  onClick={homePage}/>
      </div>
      <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Connexion</h1>
      <form onSubmit={handleLogin}>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" value={email} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={handleChange} />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm text-gray-600">Mot de passe</label>
          <input type="password" id="password" name="password" value={password} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={handleChange}/>
          <a href="#" class="block text-right text-xs text-cyan-600 mt-2">Mot de passe oublié?</a>
        </div>
        <button type="submit" class="w-32 from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6 btn-login">connexion</button>
      </form>
      <div class="text-center">
        <p class="text-sm">Vous n'avez pas de compte? <Link to="/sign" class="text-cyan-600">S'inscrire</Link></p>
      </div>
    </div>
  </div>
    );
}

export default Login;