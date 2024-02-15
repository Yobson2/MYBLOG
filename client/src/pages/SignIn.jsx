import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/Yoyoblog.png";

import "../styles/signIn.css";

function SignIn() {
    const navigation = useNavigate();
    const [formValues, setFormValues] = useState({
        nom: "",
        email: "",
        password: "",
        image: null,
    });

   
    const { nom, email, password,image} = formValues;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const resetForm = () => {
        setFormValues({
            nom: "",
            email: "",
            password: "",
            image: null,
        });
    };

    const homePage = () => {
        navigation('/');
    };

    const handleSign = async (e) => {
        e.preventDefault();
        const response=await fetch('http://localhost:3030/v1/register', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                'Content-Type': 'application/json',
                 Accept:"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        })
       if(response.status===200){
         alert('Enregistrement reussi')
       }else{
        alert('Enregistrement reussi')
       }
        resetForm();
    };

    const baseImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setFormValues({
                    ...formValues,
                    image: reader.result,
                });
            });
            reader.readAsDataURL(file);
        } else {
            setFormValues({
                ...formValues,
                image: null,
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="Logo" className="w-30 h-20 rounded-md cursor-pointer" onClick={homePage} />
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">S'inscrire</h1>
                <form onSubmit={handleSign}>
                    <div className="mb-6">
                        <label htmlFor="nom" className="block mb-2 text-sm text-gray-600">Nom</label>
                        <input type="text" id="nom" name="nom" value={nom} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" value={email} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Mot de passe</label>
                        <input type="password" id="password" name="password" value={password} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm text-gray-600">Photo</label>
                        <input type="file" id="image" name="image" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required onChange={baseImage} />
                    </div>
                    <button type="submit" className="w-32 from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6 btn-sign">Envoyer</button>
                </form>
                <div className="text-center">
                    <p className="text-sm">Vous avez un compte? <Link to="/login" className="text-cyan-600">Se connecter</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
