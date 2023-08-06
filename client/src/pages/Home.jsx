import { useState } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

function Home() {
    return (  
        <div className="app_home">
            <Header />
            <Blog />
            <Footer />
        </div>
           
    );
}

export default Home;