import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import "../styles/blog.css"
import { accountServices } from '../services/account.service';

function Blog() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userContext = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:3030/v1/all_posts", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log('data', posts);
                setPosts(data.data);
            } else {
                setPosts([]);
            }

            
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    useEffect(() => {
        setIsLoggedIn(accountServices.islogged());
        fetchPosts();
    }, []);

    return (
        <section className="bg-white dark:bg-gray-900 blog-section">
            {isLoggedIn && userContext.userInfo && (
                <div className="bg-blue-500 text-white p-4">
                    <p>Nom: {userContext.userInfo.nom}</p>
                    <p>Email: {userContext.userInfo.email}</p>
                </div>
            )}
            <div className="container px-6 py-10 mx-auto">
                {posts && posts.map(item => (
                    <div className="mt-8 lg:flex lg:items-center" key={item.post.id_post}>
                        <img className="object-cover w-full lg:w-1/2 rounded-xl h-72 lg:h-45" src={item.post.image}  alt="" />
                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:ml-8">
                            <h3 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                               {item.post.title}
                            </h3>
                            <div className="flex items-center mt-6">
                                <div className="flex items-center">
                                    <img className="h-10 w-10 rounded-full object-cover" src={item.image} alt="Author" />
                                    <div className="ml-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{item.nom}</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.post.date}    {item.post.heure}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            {item.post.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;
