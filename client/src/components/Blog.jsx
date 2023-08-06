import { useState } from 'react'
import "../styles/blog.css"

function Blog() {
    return (
        <section class="bg-white dark:bg-gray-900 blog-section">
            <div class="container px-6 py-10 mx-auto">

                <div class="mt-8 lg:flex lg:items-center">
                    <img class="object-cover w-full lg:w-1/2 rounded-xl h-72 lg:h-45" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <div class="mt-6 lg:w-1/2 lg:mt-0 lg:ml-8">
                        <h3 class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                            All the features you want to know
                        </h3>
                        <div class="flex items-center mt-6">
                            <div class="flex items-center">
                                <img class="h-10 w-10 rounded-full object-cover" src="https://placekitten.com/100/100" alt="Author" />
                                <div class="ml-4">
                                    <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia Anderson</h1>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">2023-01-06 16:22</p>
                                </div>
                            </div>
                        </div>
                        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                            laudantium quia tempore delect
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                            laudantium quia tempore delect
                        </p>
                    </div>
                </div>
            </div>
            <div class="container px-6 py-10 mx-auto">

                <div class="mt-8 lg:flex lg:items-center">
                    <img class="object-cover w-full lg:w-1/2 rounded-xl h-72 lg:h-45" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <div class="mt-6 lg:w-1/2 lg:mt-0 lg:ml-8">
                        <h3 class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                            All the features you want to know
                        </h3>
                        <div class="flex items-center mt-6">
                            <div class="flex items-center">
                                <img class="h-10 w-10 rounded-full object-cover" src="https://placekitten.com/100/100" alt="Author" />
                                <div class="ml-4">
                                    <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia Anderson</h1>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">2023-01-06 16:22</p>
                                </div>
                            </div>
                        </div>
                        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
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
