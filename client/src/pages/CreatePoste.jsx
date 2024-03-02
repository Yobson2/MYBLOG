import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePoste() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');

   
  const modules= {
        toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline','strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'link', 'code-block'],
        ['clean'],
        ],
    }

    const formats=[
       'header' ,'bold',
        'italic', 'underline','strike',
        'ordered', 'bullet',
        'image', 'code-block', 'link'
    ]
    

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Titre:', title);
        console.log('Résumé:', summary);
        console.log('Contenu:', content);
    };

    return (  
        <div className="flex items-center justify-center h-screen">
            <form className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl mb-4">Créer un poste</h1>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Titre</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Titre du poste"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">Résumé</label>
                    <input
                        id="summary"
                        type="text"
                        placeholder="Résumé du poste"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={summary}
                        onChange={e=>setSummary(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-gray-700 font-bold mb-2">Fichier</label>
                    <input
                        id="file"
                        type="file"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Contenu</label>
                    <ReactQuill
                        id="content"
                        theme="snow"
                        value={content}
                        modules={modules}
                        formats={formats}
                        onChange={e=>setContent(e)}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleSubmit}
                    >
                        Créer poste
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreatePoste;
