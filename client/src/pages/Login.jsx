import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { accountServices } from '../services/account.service';
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
      const [token, setToken] = useState('');
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
                    credentials: 'include',
                }
            })
           
            if(response.status===200){
              alert('success');
              const data = await response.json();
              accountServices.saveToken(data.acess_token)
              // setToken(data.acess_token);
              navigation('/');            
            }else{
              alert('bad data')
            }
           
        }
        
     

    function homePage(){
        navigation('/')
    }
    return (  
        <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Logo" className="w-30 h-20 rounded-md"  onClick={homePage}/>
      </div>
      <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Connexion</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" value={email} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={handleChange} />
        </div>
        <div className="mb-6">
          <label for="password" className="block mb-2 text-sm text-gray-600">Mot de passe</label>
          <input type="password" id="password" name="password" value={password} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={handleChange}/>
          <a href="#" className="block text-right text-xs text-cyan-600 mt-2">Mot de passe oublié?</a>
        </div>
        <button type="submit" className="w-32 from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6 btn-login">connexion</button>
      </form>
      <div className="text-center">
        <p className="text-sm">Vous n'avez pas de compte? <Link to="/sign" className="text-cyan-600">S'inscrire</Link></p>
      </div>
    </div>
  </div>
    );
}

export default Login;