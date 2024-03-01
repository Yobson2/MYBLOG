import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import "../styles/blog.css"
import { accountServices } from '../services/account.service';

function Blog() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userContext = useContext(UserContext);
    
    useEffect(() => {
        setIsLoggedIn(accountServices.islogged());
    },[isLoggedIn])

    
    return (
        <section className="bg-white dark:bg-gray-900 blog-section">
           
           {isLoggedIn && userContext.userInfo && (
                <div className="bg-blue-500 text-white p-4">
                    <p>Nom: {userContext.userInfo.nom}</p>
                    <p>Email: {userContext.userInfo.email}</p>
                </div>
            )}
            <div className="container px-6 py-10 mx-auto">

                <div className="mt-8 lg:flex lg:items-center">
                    <img className="object-cover w-full lg:w-1/2 rounded-xl h-72 lg:h-45" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:ml-8">
                        <h3 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                            All the features you want to know
                        </h3>
                        <div className="flex items-center mt-6">
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full object-cover" src="https://placekitten.com/100/100" alt="Author" />
                                <div className="ml-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia Anderson</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">2023-01-06 16:22</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                            laudantium quia tempore delect
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                            laudantium quia tempore delect
                        </p>
                    </div>
                </div>
            </div>
            <div className="container px-6 py-10 mx-auto">

                <div className="mt-8 lg:flex lg:items-center">
                    <img className="object-cover w-full lg:w-1/2 rounded-xl h-72 lg:h-45" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:ml-8">
                        <h3 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                            All the features you want to know
                        </h3>
                        <div className="flex items-center mt-6">
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full object-cover" src="https://placekitten.com/100/100" alt="Author" />
                                <div className="ml-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia Anderson</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">2023-01-06 16:22</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                            laudantium quia tempore delect
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                            laudantium quia tempore delect
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
