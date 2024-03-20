import React, { useState } from 'react';
// import handleFileInput from '../services/image_services'
import {handleFileInput} from '../services/image_services';

function CreatePoste() {
    const userId = window.location.href.split('/').splice(4, 1)[0];
    const [formValues, setFormValues] = useState({
        title: "",
        content: "",
        files: null,
    });

    const { title, content } = formValues;

   

    const resetForm = () => {
        setFormValues({
            title: "",
            content: "",
            files: null,
        });
    };
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.type === 'file') {
            handleFileInput(e.target.files[0], (base64Image) => {
                setFormValues({
                    ...formValues,
                    files: base64Image
                });
            });
        } else {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response=await fetch(`http://localhost:3030/v1/create_post/${userId}`, {
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
        alert('noooooo')
       }
       resetForm();
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8" onSubmit={handleSubmit}>
                <h1 className="text-2xl mb-4">Créer un poste</h1>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Titre</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Titre du poste"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-gray-700 font-bold mb-2">Fichier</label>
                    <input
                        id="file"
                        type="file"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="file"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Contenu</label>
                    <textarea
                        id="content"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="content"
                        value={content}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Créer poste
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreatePoste;
